import Link from "next/link";
import { Chip } from "@/components/terminal/chip";
import type { BlogPost } from "@/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/hub/blog/${post.slug}`}
      className="card-node group/project relative block min-w-0 cursor-pointer overflow-hidden border border-outline-variant bg-surface-container-lowest p-6 transition-colors hover:border-primary hover:bg-surface-container-low focus-visible:outline-none max-md:p-[18px]"
    >
      <span className="crosshair crosshair-tl" aria-hidden="true" />
      <span className="crosshair crosshair-br" aria-hidden="true" />
      <div className="scanline-effect group-hover/project:animate-page-scan-specs" aria-hidden="true" />

      <div className="relative">
        <div className="mb-5 flex items-center justify-between gap-2.5 font-mono text-[10px] uppercase tracking-[0.06em] text-on-surface-variant">
          <span>NODE_ID: 0xA{post.id}</span>
          <span className="border border-[var(--public-border)] bg-[var(--public-bg)] px-1.5 py-0.5 text-[8px] text-[var(--public-fg)]">
            ● PUBLIC
          </span>
        </div>

        <div className="relative mb-5 grid min-h-[150px] place-items-center overflow-hidden border border-outline-variant bg-surface-container-low font-mono text-[11px] uppercase tracking-[0.12em] text-primary-dim">
          <span className="relative z-10">{post.id === "001" ? "VISUAL_OUTPUT" : post.id === "002" ? "SIGNAL_TRACE" : "MODULE_MAP"}</span>
          <span className="absolute inset-0 opacity-20 bg-[radial-gradient(var(--accent-faint)_1px,transparent_1px)] [background-size:18px_18px]" aria-hidden="true" />
        </div>

        <h2 className="mb-2 font-heading text-base uppercase leading-[1.35] text-primary-fixed-dim">
          {post.title}
        </h2>
        <p className="mb-3.5 text-xs leading-6 text-on-surface-variant">SYSTEM_LOG: {post.excerpt}</p>
        <div className="my-[18px] flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Chip key={tag}>{tag.toLowerCase()}</Chip>
          ))}
        </div>
        <span className="block border border-outline-variant p-3 text-center font-mono text-[11px] uppercase text-on-surface-variant transition-colors group-hover/project:bg-primary-container group-hover/project:text-on-primary-container">
          [READ_NODE]
        </span>
      </div>
    </Link>
  );
}
