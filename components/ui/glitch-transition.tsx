"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { DigitalFlicker } from "./glitch-text";

interface GlitchTransitionProps {
  children: React.ReactNode;
}

export function GlitchTransition({ children }: GlitchTransitionProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef(null);
  const brRef = useRef(null);

  const pathname = usePathname();

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const runGlitch = async () => {
      const gsap = (await import("gsap")).default;

      gsap
        .timeline()
        .to(overlayRef.current, {
          top: -100,
          left: -100,
          bottom: -100,
          right: -100,
          ease: "power4.out",
        })
        .to(overlayRef.current, {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          ease: "power4.in",
        });

      gsap.to(tlRef.current, {
        top: 8,
        left: 8,
        ease: "power4.in",
      });

      gsap.to(brRef.current, {
        bottom: 8,
        right: 8,
        ease: "power4.in",
      });
    };

    runGlitch();
  }, [pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9999] pointer-events-none opacity-100"
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
      >
        <DigitalFlicker ref={tlRef} className="crosshair-tl size-8 crosshair">
          {null}
        </DigitalFlicker>
        <DigitalFlicker ref={brRef} className="crosshair-br size-8 crosshair">
          {null}
        </DigitalFlicker>
      </div>
      {children}
    </>
  );
}
