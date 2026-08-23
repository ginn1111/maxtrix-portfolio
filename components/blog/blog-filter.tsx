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
      <div className="mb-3 flex flex-wrap items-center gap-2 border border-outline-variant bg-surface-container-low p-3 font-mono">
        <span className="mr-1 text-[10px] uppercase tracking-[0.08em] text-on-surface-variant">
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
              className={`cursor-pointer border px-2.5 py-1.5 text-[10px] uppercase tracking-[0.04em] transition-colors focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary-fixed-dim ${
                isActive
                  ? "border-primary-dim text-primary-fixed-dim outline outline-1 outline-offset-2 outline-primary-fixed-dim"
                  : "border-outline-variant bg-background text-on-surface-variant hover:border-primary-dim hover:bg-primary-container hover:text-on-primary-container"
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
        <p className="border border-outline-variant bg-surface-container-low p-8 text-center font-mono text-xs uppercase tracking-[0.08em] text-on-surface-variant">
          NO_MATCHING_NODES // ADJUST_FILTER_TO_CONTINUE
        </p>
      )}
    </>
  );
}
