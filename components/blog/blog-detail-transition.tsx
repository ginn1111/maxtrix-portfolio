"use client";

import { useEffect, useRef } from "react";

export function BlogDetailTransition({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const content = contentRef.current;
    const raw = sessionStorage.getItem("blog-card-transition");

    if (!content || !raw) return;

    const cardProxy = document.querySelector<HTMLElement>("[data-blog-transition-proxy]");
    const titleProxy = document.querySelector<HTMLElement>("[data-blog-title-proxy]");
    const shell = document.querySelector<HTMLElement>("[data-blog-detail-shell]");
    const title = document.querySelector<HTMLElement>("[data-blog-detail-target]");
    if (!cardProxy || !shell || !title) return;

    let transitionData: { hasTitleProxy: boolean };
    try {
      transitionData = JSON.parse(raw);
    } catch {
      return;
    }

    const shellRect = shell.getBoundingClientRect();
    const titleRect = title.getBoundingClientRect();
    const gsapRun = async () => {
      const gsap = (await import("gsap")).default;
      gsap.set(content, { opacity: 0 });
      gsap.set(title, { opacity: 0 });
      const timeline = gsap.timeline({
        onComplete: () => {
          cardProxy.remove();
          titleProxy?.remove();
          sessionStorage.removeItem("blog-card-transition");
        },
      });

      timeline.to(cardProxy, {
        left: shellRect.left,
        top: shellRect.top,
        width: shellRect.width,
        height: shellRect.height,
        duration: 0.7,
        ease: "power3.inOut",
      });

      if (transitionData.hasTitleProxy && titleProxy) {
        timeline.to(titleProxy, {
          left: titleRect.left,
          top: titleRect.top,
          width: titleRect.width,
          height: titleRect.height,
          duration: 0.7,
          ease: "power3.inOut",
        }, 0);
      }

      timeline
        .to(cardProxy, { opacity: 0, borderColor: "transparent", duration: 0.18 }, 0.56)
        .to(titleProxy, { opacity: 0, duration: 0.18 }, 0.56)
        .to(title, { opacity: 1, duration: 0.25 }, 0.58)
        .to(content, { opacity: 1, duration: 0.35 }, 0.68);
    };
    gsapRun();

    return undefined;
  }, []);

  return <div ref={contentRef}>{children}</div>;
}
