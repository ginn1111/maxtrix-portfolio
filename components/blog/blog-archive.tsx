"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/data/blog";
import { BlogFilter, type Filter } from "./blog-filter";
import { BlogGrid } from "./blog-grid";

export function BlogArchive({ posts }: { posts: BlogPost[] }) {
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
      <BlogFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      {visiblePosts.length > 0 ? (
        <BlogGrid posts={visiblePosts} />
      ) : (
        <p className="mx-5 border border-outline-variant bg-surface-container-low p-8 text-center font-mono text-xs uppercase tracking-[0.08em] text-on-surface-variant">
          NO_MATCHING_NODES // ADJUST_FILTER_TO_CONTINUE
        </p>
      )}
    </>
  );
}
