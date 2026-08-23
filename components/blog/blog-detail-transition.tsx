"use client";

import { useEffect, useRef } from "react";

export function BlogDetailTransition({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    const raw = sessionStorage.getItem("blog-card-transition");
    sessionStorage.removeItem("blog-card-transition");

    if (!content || !raw) return;

    const target = document.querySelector<HTMLElement>("[data-blog-detail-target]");
    if (!target) return;

    let transitionData: { title: string; rect: { left: number; top: number; width: number; height: number } };
    try {
      transitionData = JSON.parse(raw);
    } catch {
      return;
    }

    const targetRect = target.getBoundingClientRect();
    const proxy = document.createElement("div");
    proxy.textContent = transitionData.title;
    proxy.setAttribute("aria-hidden", "true");
    Object.assign(proxy.style, {
      position: "fixed",
      zIndex: "10000",
      left: `${transitionData.rect.left}px`,
      top: `${transitionData.rect.top}px`,
      width: `${transitionData.rect.width}px`,
      height: `${transitionData.rect.height}px`,
      overflow: "hidden",
      padding: "24px",
      border: "1px solid var(--accent)",
      background: "var(--bg)",
      color: "var(--accent)",
      fontFamily: "var(--font-family-heading)",
      fontSize: "24px",
      fontWeight: "700",
      textTransform: "uppercase",
      pointerEvents: "none",
    });
    document.body.appendChild(proxy);

    let active = true;
    const run = async () => {
      const gsap = (await import("gsap")).default;
      if (!active) return;
      gsap.set(content, { opacity: 0, y: 24 });
      gsap.timeline({ onComplete: () => proxy.remove() })
        .to(proxy, {
          left: targetRect.left,
          top: targetRect.top,
          width: targetRect.width,
          height: targetRect.height,
          duration: 0.55,
          ease: "power3.inOut",
        })
        .to(proxy, { opacity: 0, duration: 0.16 }, 0.42)
        .to(content, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, 0.16);
    };
    run();

    return () => {
      active = false;
      proxy.remove();
    };
  }, []);

  return <div ref={contentRef}>{children}</div>;
}
