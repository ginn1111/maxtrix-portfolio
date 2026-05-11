# Contact Form Rate Limiting Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add rate limiting (1 email per 5 minutes per address) to the contact form using Resend for email delivery.

**Architecture:** In-memory rate limit store in API route, Resend for sending emails, frontend updated to show block message on 429.

**Tech Stack:** Next.js App Router, Resend, TypeScript

---

## File Structure

```
app/api/contact/route.ts    — API route with rate limiting + Resend
components/sections/secure-contact-section.tsx  — Handle 429 response
.env.local.example          — Document RESEND_API_KEY
```

---

## Task 1: Install Resend

**Files:**
- Modify: `package.json` (add resend dependency)

- [ ] **Step 1: Install resend package**

Run: `npm install resend`

---

## Task 2: Create API Route with Rate Limiting

**Files:**
- Create: `app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server";

const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_MS = 5 * 60 * 1000; // 5 minutes

function isRateLimited(email: string): { limited: boolean; remainingSeconds: number } {
  const lastSent = rateLimitMap.get(email);
  if (!lastSent) return { limited: false, remainingSeconds: 0 };

  const elapsed = Date.now() - lastSent;
  if (elapsed < RATE_LIMIT_MS) {
    return {
      limited: true,
      remainingSeconds: Math.ceil((RATE_LIMIT_MS - elapsed) / 1000),
    };
  }
  return { limited: false, remainingSeconds: 0 };
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, subject, message } = body;

  // Validation
  const errors: Record<string, string> = {};
  if (!name?.trim()) errors.name = "Name is required";
  if (!email?.trim()) errors.email = "Email is required";
  if (!subject?.trim()) errors.subject = "Subject is required";
  if (!message?.trim()) errors.message = "Message is required";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  // Rate limit check
  const { limited, remainingSeconds } = isRateLimited(email);
  if (limited) {
    return NextResponse.json({ remainingSeconds }, { status: 429 });
  }

  // Send email via Resend
  const { RESEND_API_KEY } = process.env;
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY not set");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const { Resend } = await import("resend");
  const resend = new Resend(RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "your-email@example.com",
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  // Record successful send
  rateLimitMap.set(email, Date.now());

  return NextResponse.json({ success: true }, { status: 200 });
}
```

- [ ] **Step 1: Create app/api/contact/route.ts with rate limiting logic**

Create the file with the code above.

---

## Task 3: Update SecureContactSection to Handle Rate Limit

**Files:**
- Modify: `components/sections/secure-contact-section.tsx:1-100` (find handleSubmit and update it)

Current `handleSubmit` only logs. Need to:
1. Add error state for rate limit
2. POST to `/api/contact` on submit
3. Show block message on 429
4. Clear form and show success on 200

```typescript
// Add to component state
const [rateLimitError, setRateLimitError] = useState<string | null>(null);

// Update handleSubmit
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setRateLimitError(null);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.status === 429) {
      const { remainingSeconds } = await res.json();
      setRateLimitError(`Please wait ${remainingSeconds} seconds before sending another message.`);
      return;
    }

    if (!res.ok) {
      throw new Error("Failed to send");
    }

    // Success
    setFormData({ name: "", email: "", subject: "", message: "" });
    setLogs([...logs,
      { time: new Date().toLocaleTimeString("en-GB", { hour12: false }), text: "TRANSMISSION_COMPLETE", type: "primary" as const }
    ]);
  } catch {
    setLogs([...logs,
      { time: new Date().toLocaleTimeString("en-GB", { hour12: false }), text: "TRANSMISSION_FAILED", type: "error" as const }
    ]);
  }
};
```

- [ ] **Step 1: Read current secure-contact-section.tsx**

Run: `head -150 components/sections/secure-contact-section.tsx`

- [ ] **Step 2: Identify handleSubmit location and add rateLimitError state**

Find where formData and handleSubmit are defined, add `const [rateLimitError, setRateLimitError] = useState<string | null>(null);` nearby.

- [ ] **Step 3: Replace handleSubmit with async version that calls /api/contact**

Replace the existing handleSubmit function with the async version above.

- [ ] **Step 4: Add rate limit error display below subject field**

Find where form fields are rendered and add:
```tsx
{rateLimitError && (
  <p className="text-red-500 text-sm mt-1">{rateLimitError}</p>
)}
```

- [ ] **Step 5: Test the form submission**

Run: `npm run dev` and submit the form. Verify rate limiting works by submitting twice within 5 minutes.

---

## Task 4: Document Environment Variable

**Files:**
- Create: `.env.local.example`

```
# Resend API key for contact form email
RESEND_API_KEY=re_xxxxxxxxxxxx
```

- [ ] **Step 1: Create .env.local.example with RESEND_API_KEY documentation**