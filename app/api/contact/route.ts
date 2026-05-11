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
