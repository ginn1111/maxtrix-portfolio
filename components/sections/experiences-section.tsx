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
          }
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
              <div className="crosshair crosshair-tr" />
              <div className="crosshair crosshair-bl" />
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
