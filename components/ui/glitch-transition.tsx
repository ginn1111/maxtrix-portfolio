"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface GlitchTransitionProps {
  children: React.ReactNode;
}

export function GlitchTransition({ children }: GlitchTransitionProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const runGlitch = async () => {
      const gsap = (await import("gsap")).default;

      // Phase 1: Glitch out (150ms)
      await gsap.to(overlay, {
        opacity: 1,
        duration: 0.15,
        ease: "power4.in",
        onStart: () => {
          document.body.style.overflow = "hidden";
        },
      });

      // Phase 2: Glitch in (150ms)
      await gsap.to(overlay, {
        opacity: 0,
        duration: 0.15,
        ease: "power4.out",
        onComplete: () => {
          document.body.style.overflow = "";
        },
      });
    };

    runGlitch();
  }, [pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9999] pointer-events-none opacity-0"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.15) 0px,
              rgba(0, 0, 0, 0.15) 1px,
              transparent 1px,
              transparent 2px
            )
          `,
          boxShadow: `inset 0 0 100px rgba(0, 230, 57, 0.3)`,
        }}
      />
      {children}
    </>
  );
}