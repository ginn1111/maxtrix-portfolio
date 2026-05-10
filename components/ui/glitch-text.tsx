"use client";

import { ForwardedRef, forwardRef, RefObject, useEffect, useRef } from "react";

interface DigitalFlickerProps {
  children: React.ReactNode;
  className?: string;
  glitchColor?: string;
}

export const DigitalFlicker = forwardRef(
  (
    { children, className = "", glitchColor = "#00e639" }: DigitalFlickerProps,
    outerRef: ForwardedRef<HTMLSpanElement>,
  ) => {
    const ref = useRef<HTMLSpanElement>(null);
    const gsapRef = useRef<typeof gsap>(null);

    useEffect(() => {
      if (!ref.current) return;

      const element = ref.current;
      let timeline: gsap.core.Timeline | null = null;
      let timeoutId: NodeJS.Timeout;
      let isRunning = true;

      const createGlitch = async () => {
        if (!isRunning || !element || !gsapRef.current) return;

        const duration = Math.random() * 0.08 + 0.04;
        const offsetX = (Math.random() - 0.5) * 4;
        const offsetY = (Math.random() - 0.5) * 2;
        const targetOpacity = Math.random() * 0.35 + 0.65;

        timeline = gsapRef.current.timeline({
          onComplete: () => {
            if (!isRunning) return;

            gsapRef.current?.set(element, {
              x: 0,
              y: 0,
              opacity: 1,
              textShadow: "none",
            });

            const nextDelay = Math.random() * 4000 + 1000;
            timeoutId = setTimeout(createGlitch, nextDelay);
          },
        });

        timeline
          .to(element, {
            x: offsetX,
            y: offsetY,
            opacity: targetOpacity,
            textShadow: `2px 0 0 ${glitchColor}, -2px 0 0 rgba(0, 255, 255, 0.8)`,
            duration,
            ease: "steps(3)",
          })
          .to(element, {
            x: offsetX * -0.5,
            y: offsetY * 0.5,
            opacity: targetOpacity * 0.9,
            duration: duration * 0.5,
            ease: "steps(2)",
          });
      };

      (async () => {
        const gsap = await import("gsap");
        gsapRef.current = gsap.default;
        timeoutId = setTimeout(createGlitch, Math.random() * 2000 + 500);
      })();

      return () => {
        isRunning = false;
        clearTimeout(timeoutId);
        timeline?.kill();
        gsapRef.current?.set(element, {
          x: 0,
          y: 0,
          opacity: 1,
          textShadow: "none",
        });
      };
    }, [glitchColor]);

    return (
      <span
        ref={(el) => {
          if (el) {
            if (outerRef) {
              (outerRef as RefObject<HTMLSpanElement>).current = el;
            }
            ref.current = el;
          }
        }}
        className={`inline-block ${className}`}
      >
        {children}
      </span>
    );
  },
);

DigitalFlicker.displayName = "DigitalFlicker";

interface FlickerTextProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export function FlickerText({
  children,
  className = "",
  intensity = "medium",
}: FlickerTextProps) {
  const durations = {
    low: "4s",
    medium: "2s",
    high: "0.8s",
  };

  return (
    <span
      className={`inline-block animate-flicker ${className}`}
      style={{ animationDuration: durations[intensity] }}
    >
      {children}
    </span>
  );
}

interface GlitchHoverProps {
  children: React.ReactNode;
  className?: string;
  glitchColor?: string;
}

export function GlitchHover({
  children,
  className = "",
  glitchColor = "#00e639",
}: GlitchHoverProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const gsapRef = useRef<typeof gsap>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleMouseEnter = () => {
      if (!gsapRef.current) return;

      timelineRef.current = gsapRef.current.timeline();

      timelineRef.current
        .to(element, {
          x: (Math.random() - 0.5) * 6,
          duration: 0.05,
          ease: "steps(2)",
        })
        .to(element, {
          x: (Math.random() - 0.5) * -4,
          y: (Math.random() - 0.5) * 2,
          opacity: 0.8,
          textShadow: `2px 0 0 ${glitchColor}, -2px 0 0 rgba(0, 255, 255, 0.8)`,
          duration: 0.05,
          ease: "steps(3)",
        })
        .to(element, {
          x: 0,
          y: 0,
          opacity: 1,
          textShadow: "none",
          duration: 0.05,
        })
        .repeat(-1);
    };

    const handleMouseLeave = () => {
      timelineRef.current?.kill();
      gsapRef.current?.set(element, {
        x: 0,
        y: 0,
        opacity: 1,
        textShadow: "none",
      });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      timelineRef.current?.kill();
    };
  }, [glitchColor]);

  useEffect(() => {
    (async () => {
      const gsap = await import("gsap");
      gsapRef.current = gsap.default;
    })();
  }, []);

  return (
    <span ref={ref} className={`inline-block cursor-pointer ${className}`}>
      {children}
    </span>
  );
}
