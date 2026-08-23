"use client";

import { useEffect, useRef } from "react";
import type { BlogPost } from "@/data/blog";
import { BlogCard } from "./blog-card";

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const cardsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
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
    <div className="grid min-w-0 grid-cols-1 gap-3 container px-5 lg:grid-cols-2" aria-live="polite">
      {posts.map((post, index) => (
        <BlogCard
          key={post.slug}
          post={post}
          ref={(element) => {
            if (element) cardsRef.current[index] = element;
          }}
        />
      ))}
    </div>
  );
}
