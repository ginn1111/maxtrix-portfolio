import Link from "next/link";
import { Chip } from "@/components/terminal/chip";
import type { BlogPost } from "@/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/hub/blog/${post.slug}`}
      className="group relative block border border-outline-variant bg-surface-container-lowest p-5 transition-colors hover:border-primary-fixed focus-visible:outline-none"
    >
      <span className="crosshair crosshair-tl" aria-hidden="true" />
      <span className="crosshair crosshair-br" aria-hidden="true" />
      <div className="flex items-start gap-4">
        <span className="shrink-0 pt-1 font-mono text-xs text-secondary">
          [{post.id}]
        </span>
        <div className="min-w-0 flex-1 space-y-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h2 className="font-heading text-headline-md text-on-surface transition-colors group-hover:text-primary-fixed">
              {post.title}
            </h2>
            <span className="font-mono text-xs text-outline">{post.date}</span>
          </div>
          <p className="font-mono text-sm leading-6 text-on-surface-variant">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-mono text-xs text-outline">READ_TIME: {post.readTime}</span>
            {post.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>
        </div>
        <span className="pt-1 text-primary-fixed opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">
          →
        </span>
      </div>
    </Link>
  );
}
