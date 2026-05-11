"use client";

import { useEffect, useRef } from "react";
import { DigitalFlicker } from "../ui/glitch-text";

const TESTIMONIALS = [
  {
    name: "Anonymous",
    role: "Unknown, YRISM",
    quote:
      "Excellent technical skills, very positive attitude, and great diligence. Your smile brightens the team. Wish you all the best, see you!",
  },
  {
    name: "Pinky",
    role: "Designer, YRISM",
    quote:
      "You are honest, hardworking, and a great team player. I really appreciate your attitude and the way you share ideas with colleagues. Keep speaking up and sharing your thoughts more - you're doing great and I'm always here to support you.",
  },
  {
    name: "Hoang Nguyen",
    role: "Team Member, YRISM",
    quote:
      "Open attitude and eager to learn. Learned a lot working with your and grew quickly. Keep it up!",
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
      <div className="animate-page-scan page-scan-line-specs">
        <DigitalFlicker
          config={{
            xOffest: 100,
            yOffset: 50,
            delay: 0,
          }}
          className="size-full bg-primary"
        >
          {null}
        </DigitalFlicker>
      </div>
      <div className="w-full space-y-8 px-5">
        <div className="font-mono text-code-sm text-on-surface-variant flex items-center gap-2">
          <span className="text-primary-fixed-dim font-bold animate-flicker">
            TESTIMONIALS.DAT
          </span>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name + i}
              ref={(el) => {
                if (el !== null) cardsRef.current[i] = el;
              }}
              className="relative p-6 border border-outline-variant bg-surface-container-low opacity-0 size-full flex flex-col"
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
                &quot;{t.quote}&ldquo;
              </p>

              <div className="flex items-center gap-3 border-t border-outline-variant pt-4 mt-auto">
                <div className="w-10 h-10 border border-primary-fixed-dim flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-sm">
                    person
                  </span>
                </div>
                <div>
                  <p className="font-mono text-label-sm text-primary-fixed-dim uppercase">
                    <DigitalFlicker>{t.name}</DigitalFlicker>
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
