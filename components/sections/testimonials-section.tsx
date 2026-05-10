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