import Link from "next/link";
import type { BlogPost } from "@/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative min-w-0 overflow-hidden border border-[#2a2a2a] bg-[#0a0a0a] p-6 transition-colors hover:border-[#00ff9f44] hover:bg-[#111111] focus-within:outline focus-within:outline-1 focus-within:outline-offset-2 focus-within:outline-[#00ff9f] max-md:p-[18px]">
      <span className="absolute left-1 top-1 h-2.5 w-2.5 border-l border-t border-[#00ff9f66]" aria-hidden="true" />
      <span className="absolute bottom-1 right-1 h-2.5 w-2.5 border-b border-r border-[#00ff9f66]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_3px,rgba(0,0,0,0.08)_3px,rgba(0,0,0,0.08)_4px)]" aria-hidden="true" />

      <div className="relative">
        <div className="mb-5 flex items-center justify-between gap-2.5 font-mono text-[10px] uppercase tracking-[0.06em] text-[#888888]">
          <span>NODE_ID: 0xA{post.id}</span>
          <span className="border border-green-700/50 bg-green-950/30 px-1.5 py-0.5 text-[8px] text-green-400">
            ● PUBLIC
          </span>
        </div>

        <div className="relative mb-5 grid min-h-[150px] place-items-center overflow-hidden border border-[#2a2a2a] bg-[linear-gradient(135deg,#00ff9f0a,transparent_45%),#111111] font-mono text-[11px] uppercase tracking-[0.12em] text-[#00ff9f66]">
          <span className="relative z-10">{post.id === "001" ? "VISUAL_OUTPUT" : post.id === "002" ? "SIGNAL_TRACE" : "MODULE_MAP"}</span>
          <span className="absolute inset-0 opacity-20 [background-image:radial-gradient(#00ff9f1a_1px,transparent_1px)] [background-size:18px_18px]" aria-hidden="true" />
        </div>

        <h2 className="mb-2 font-heading text-base uppercase leading-[1.35] text-[#00ff9f]">
          {post.title}
        </h2>
        <p className="mb-3.5 text-xs leading-6 text-[#888888]">SYSTEM_LOG: {post.excerpt}</p>
        <div className="my-[18px] flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="border border-[#00ff9f44] bg-[#00ff9f0a] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.04em] text-[#00ff9f]">
              {tag.toLowerCase()}
            </span>
          ))}
        </div>
        <Link
          href={`/hub/blog/${post.slug}`}
          className="block cursor-pointer border border-[#2a2a2a] p-3 text-center font-mono text-[11px] uppercase text-[#888888] transition-colors hover:text-[#00ff9f] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#00ff9f]"
        >
          [READ_NODE]
        </Link>
      </div>
    </article>
  );
}
