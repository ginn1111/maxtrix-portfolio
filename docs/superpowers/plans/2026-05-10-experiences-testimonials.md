# Experiences & Testimonials Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create `/experiences` and `/testimonials` pages with matching terminal/matrix aesthetic. Extract experience content from homepage inline sections; create realistic placeholder testimonials.

**Architecture:** Each page is a thin wrapper around a new section component. No AppLayout wrapper needed (root layout handles it). Follow existing section patterns: GSAP animations, crosshair corners, terminal typography. Sidebar gets two new nav items.

**Tech Stack:** Next.js 16 App Router, GSAP ScrollTrigger, Tailwind CSS v4, Lucide icons

---

## File Map

| Action | Path                                           | Responsibility                                   |
| ------ | ---------------------------------------------- | ------------------------------------------------ |
| Create | `components/sections/experiences-section.tsx`  | Experience entries as terminal card grid         |
| Create | `components/sections/testimonials-section.tsx` | Testimonial cards grid                           |
| Create | `app/experiences/page.tsx`                     | Route — renders ExperiencesSection               |
| Create | `app/testimonials/page.tsx`                    | Route — renders TestimonialsSection              |
| Modify | `app/shared/sidebar.tsx`                       | Add nav items for /experiences and /testimonials |

---

## Task 1: Create Experiences Section

**Files:**

- Create: `components/sections/experiences-section.tsx`

- [ ] **Step 1: Write the section component**

```tsx
"use client";

import { useEffect, useRef } from "react";

const EXPERIENCES = [
  {
    role: "FrontEnd Developer",
    type: "FULLTIME",
    period: "2022 - Present",
    company: "AIOZ Network",
    description:
      "Building high-performance web applications with Next.js, TypeScript, and React. Implementing pixel-perfect UIs with shadcn/ui components and custom GSAP animations.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "GSAP"],
  },
  {
    role: "FrontEnd Developer",
    type: "FREELANCER",
    period: "2023 - 2024",
    company: "Freelance Projects",
    description:
      "Delivered custom web solutions for clients including e-commerce platforms and task management systems. Integrated Stripe payments, Meilisearch, and SendGrid notifications.",
    tech: ["Next.js", "TypeScript", "MedusaJS", "Stripe", "Prisma"],
  },
  {
    role: "FrontEnd Developer",
    type: "INTERN",
    period: "2021 - 2022",
    company: "Startup Hub",
    description:
      "Assisted in building MVPs for early-stage startups. Learned React fundamentals and contributed to feature development under senior developer guidance.",
    tech: ["React", "JavaScript", "CSS", "HTML"],
  },
];

export function ExperiencesSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    };
    loadGSAP();
  }, []);

  return (
    <div className="relative w-full">
      <div className="page-scan-line-specs animate-page-scan" />
      <div className="w-full space-y-8">
        <div className="font-mono text-code-sm text-on-surface-variant flex items-center gap-2">
          <span className="text-primary-fixed-dim font-bold animate-flicker">
            EXPERIENCES.DAT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={exp.role + i}
              ref={(el) => {
                if (el !== null) cardsRef.current[i] = el;
              }}
              className="relative p-6 border border-outline-variant bg-surface-container-low opacity-0"
            >
              <div className="crosshair crosshair-tl" />
              <div className="crosshair crosshair-br" />
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-2 py-1 font-mono text-[10px] text-background bg-primary-fixed-dim mb-2">
                    {exp.type}
                  </span>
                  <h3 className="font-heading text-headline-sm text-primary-fixed-dim uppercase">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-label-sm text-on-surface-variant mt-1">
                    {exp.company}
                  </p>
                </div>
                <p className="font-mono text-code-sm text-primary-fixed-dim">
                  {exp.period}
                </p>
              </div>

              <p className="font-body-lg text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 border border-outline-variant font-mono text-[10px] text-primary-fixed-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

---

## Task 2: Create Testimonials Section

**Files:**

- Create: `components/sections/testimonials-section.tsx`

- [ ] **Step 1: Write the section component**

```tsx
"use client";

import { useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "CTO, AIOZ Network",
    quote:
      "Thuan consistently delivers clean, performant code with an eye for design. His frontend work elevated our platform significantly.",
  },
  {
    name: "Minh Nguyen",
    role: "Project Manager, Freelance Client",
    quote:
      "Exceptional communication and technical skill. Delivered the project ahead of schedule with all features working flawlessly.",
  },
  {
    name: "Alex Tran",
    role: "Senior Developer, Startup Hub",
    quote:
      "A fast learner who asks great questions. His React fundamentals solidified quickly during his internship.",
  },
  {
    name: "Lisa Park",
    role: "Product Owner, E-Commerce Platform",
    quote:
      "Thuan integrated Stripe and Meilisearch seamlessly. The search experience and payment flow were exactly what we needed.",
  },
];

export function TestimonialsSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            delay: i * 0.12,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    };
    loadGSAP();
  }, []);

  return (
    <div className="relative w-full">
      <div className="page-scan-line-specs animate-page-scan" />
      <div className="w-full space-y-8">
        <div className="font-mono text-code-sm text-on-surface-variant flex items-center gap-2">
          <span className="text-primary-fixed-dim font-bold animate-flicker">
            TESTIMONIALS.DAT
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name + i}
              ref={(el) => {
                if (el !== null) cardsRef.current[i] = el;
              }}
              className="relative p-6 border border-outline-variant bg-surface-container-low opacity-0"
            >
              <div className="crosshair crosshair-tl" />
              <div className="crosshair crosshair-tr" />
              <div className="crosshair crosshair-bl" />
              <div className="crosshair crosshair-br" />

              <span
                className="material-symbols-outlined text-primary-fixed-dim mb-4 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                format_quote
              </span>

              <p className="font-body-lg text-body-sm text-on-surface-variant mb-6 leading-relaxed italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 border-t border-outline-variant pt-4">
                <div className="w-10 h-10 border border-primary-fixed-dim flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-sm">
                    person
                  </span>
                </div>
                <div>
                  <p className="font-mono text-label-sm text-primary-fixed-dim uppercase">
                    {t.name}
                  </p>
                  <p className="font-mono text-[10px] text-on-surface-variant">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

---

## Task 3: Create Page Routes

**Files:**

- Create: `app/experiences/page.tsx`
- Create: `app/testimonials/page.tsx`

- [ ] **Step 1: Create experiences page**

```tsx
import { ExperiencesSection } from "@/components/sections/experiences-section";

export default function ExperiencesPage() {
  return <ExperiencesSection />;
}
```

- [ ] **Step 2: Create testimonials page**

```tsx
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function TestimonialsPage() {
  return <TestimonialsSection />;
}
```

- [ ] **Step 3: Verify directories exist**

Run: `mkdir -p app/experiences app/testimonials`

---

## Task 4: Update Sidebar Navigation

**Files:**

- Modify: `app/shared/sidebar.tsx:14-33`

- [ ] **Step 1: Add nav items to NAV_ITEMS array**

Add two new entries after the existing three:

```tsx
{
  href: "/experiences",
  label: "EXPERIENCES",
  icon: "work_history",
  scrambleText: "CAREER_LOG",
},
{
  href: "/testimonials",
  label: "TESTIMONIALS",
  icon: "format_quote",
  scrambleText: "FEEDBACK_DATA",
},
```

---

## Task 5: Verify

- [ ] **Step 1: Start dev server**

Run: `npm run dev`

- [ ] **Step 2: Navigate to http://localhost:3002/experiences**

Verify: Page loads with two-column experience card grid, terminal aesthetic, scroll animations.

- [ ] **Step 3: Navigate to http://localhost:3002/testimonials**

Verify: Page loads with testimonial cards, quote icons, GSAP entrance animations.

- [ ] **Step 4: Check sidebar**

Verify: Two new nav items visible — EXPERIENCES and TESTIMONIALS — with correct icons and active state highlighting.
