"use client";

import { useCallback, useEffect, useRef } from "react";

export function ScrambleText({
  text,
  isHover = true,
  scrambleText = '"!@#$%^&*()_+-=[]{}|;:,./<>?"',
}: {
  isHover?: boolean;
  scrambleText?: string;
  text: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const gsapRef = useRef<typeof gsap>(null);

  const runScramble = useCallback(() => {
    if (gsapRef.current && ref.current) {
      gsapRef.current.to(ref.current, {
        duration: 1,
        scrambleText: {
          text,
          chars: scrambleText,
        },
      });
    }
  }, [text, scrambleText]);

  useEffect(() => {
    (async () => {
      const gsap = await import("gsap");
      const ScrambleTextPlugin = await import("gsap/ScrambleTextPlugin");
      gsap.default.registerPlugin(ScrambleTextPlugin.default);
      gsapRef.current = gsap.default;
      runScramble();
    })();
  }, []);

  return (
    <span ref={ref} onMouseOver={isHover ? runScramble : undefined}>
      {text}
    </span>
  );
}
