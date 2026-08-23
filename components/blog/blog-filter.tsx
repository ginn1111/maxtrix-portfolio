"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/data/blog";
import { BlogCard } from "./blog-card";

const FILTERS = ["all", "schema", "audit", "css", "ops"] as const;

type Filter = (typeof FILTERS)[number];

export function BlogFilter({ posts }: { posts: BlogPost[] }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const visiblePosts = useMemo(
    () =>
      posts.filter(
        (post) =>
          activeFilter === "all" ||
          post.tags.some((tag) => tag.toLowerCase() === activeFilter)
      ),
    [activeFilter, posts]
  );

  return (
    <>
      <div className="mb-3 flex flex-wrap items-center gap-2 border border-[#2a2a2a] bg-[#111111] p-3 font-mono">
        <span className="mr-1 text-[10px] uppercase tracking-[0.08em] text-[#888888]">
          TECH_STACK:
        </span>
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter)}
              className={`border px-2.5 py-1.5 text-[10px] uppercase tracking-[0.04em] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#00ff9f] ${
                isActive
                  ? "border-[#00ff9f66] text-[#00ff9f] outline outline-1 outline-offset-2 outline-[#00ff9f]"
                  : "border-[#2a2a2a] bg-[#0a0a0a] text-[#888888] hover:border-[#00ff9f44] hover:text-[#00ff9f]"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div
        className="grid grid-cols-1 gap-3 md:grid-cols-2"
        aria-live="polite"
      >
        {visiblePosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {visiblePosts.length === 0 && (
        <p className="border border-[#2a2a2a] bg-[#111111] p-8 text-center font-mono text-xs uppercase tracking-[0.08em] text-[#888888]">
          NO_MATCHING_NODES // ADJUST_FILTER_TO_CONTINUE
        </p>
      )}
    </>
  );
}
