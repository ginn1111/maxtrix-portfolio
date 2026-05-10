"use client";

import { useEffect, useRef, useCallback } from "react";

export function ScrambleText({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const gsapRef = useRef<{ to: Function } | null>(null);

  const runScramble = useCallback(() => {
    if (gsapRef.current && ref.current) {
      gsapRef.current.to(ref.current, {
        duration: 1,
        scrambleText: {
          text,
          chars: "!@#$%^&*()_+-=[]{}|;:,./<>?",
        },
      });
    }
  }, [text]);

  useEffect(() => {
    (async () => {
      const gsap = await import("gsap");
      const ScrambleTextPlugin = await import("gsap/ScrambleTextPlugin");
      gsap.default.registerPlugin(ScrambleTextPlugin.default);
      gsapRef.current = gsap.default;
    })();
  }, []);

  return (
    <span ref={ref} onMouseEnter={runScramble}>
      {text}
    </span>
  );
}