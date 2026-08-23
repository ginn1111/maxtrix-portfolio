import Link from "next/link";
import { BlogFilter } from "@/components/blog/blog-filter";
import { BLOG_POSTS } from "@/data/blog";

export default function HubPage() {
  return (
    <div className="relative w-full font-mono text-[#cccccc]">
      <div className="mx-auto w-full max-w-container-max">
      <nav className="mb-6 flex flex-col gap-2 border-b border-[#2a2a2a] px-5 pb-4 text-[11px] uppercase tracking-[0.08em] sm:flex-row sm:items-center sm:justify-between">
        <Link href="/projects" className="font-bold text-[#00ff9f] hover:underline focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[#00ff9f]">← BACK_TO_GALLERY</Link>
        <span className="text-[#888888]"><span className="text-[#00ff9f]">[NOW_LOG]</span> · FETCHING HUB.LOG... [ OK ]</span>
      </nav>

      <header className="grid gap-6 overflow-hidden px-5 py-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(240px,0.6fr)]">
        <div>
          <h1 className="font-heading text-[clamp(36px,8vw,88px)] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-[#00ff9f] animate-flicker">
            hub.log
          </h1>
          <p className="mt-5 max-w-3xl text-[clamp(15px,2vw,18px)] leading-relaxed text-[#cccccc]">
            A terminal archive for engineering notes, interface systems, portfolio telemetry, and project evidence. Every entry is treated as a versioned node, not a soft blog post.
          </p>
        </div>

        <aside className="relative overflow-hidden border border-[#2a2a2a] bg-[#111111] p-4" aria-label="System log">
          <span className="absolute left-1 top-1 h-2.5 w-2.5 border-l border-t border-[#00ff9f66]" aria-hidden="true" />
          <span className="absolute bottom-1 right-1 h-2.5 w-2.5 border-b border-r border-[#00ff9f66]" aria-hidden="true" />
          <span className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_3px,rgba(0,0,0,0.08)_3px,rgba(0,0,0,0.08)_4px)]" aria-hidden="true" />
          <div className="relative text-xs uppercase text-[#00ff9f]">● SYSTEM_LOG:</div>
          <div className="relative mt-3 space-y-2 text-xs text-[#888888]">
            <p>NODES_DETECTED: {BLOG_POSTS.length.toString().padStart(2, "0")}</p>
            <p>INDEX_MODE: PUBLIC_ARCHIVE</p>
            <p>UPDATE_CADENCE: MANUAL_SYNC</p>
            <p>CURSOR_READY <span className="ml-0.5 inline-block h-3.5 w-[9px] bg-[#00ff9f] align-[-2px] animate-blink-block" aria-hidden="true" /></p>
          </div>
        </aside>
      </header>

      <section aria-labelledby="archive-title">
        <div className="mb-3 flex flex-col justify-between gap-2 px-5 text-[11px] uppercase tracking-[0.08em] text-[#888888] sm:flex-row">
          <span id="archive-title">ACTIVE_NODES:</span>
          <span>FILTER: ALL_STACKS</span>
        </div>
        <BlogFilter posts={BLOG_POSTS} />
      </section>

      <section className="mt-12 grid gap-3 px-5 md:grid-cols-3" aria-label="Archive stats">
        <div className="border border-[#2a2a2a] bg-[#111111] p-4"><div className="text-xs uppercase text-[#00ff9f]">● COVERAGE:</div><p className="mt-3 text-xs leading-6 text-[#888888]">PROJECT_SCHEMA [ OK ]<br />QUALITY_RULES [ OK ]<br />TOKEN_LOG [ OK ]</p></div>
        <div className="border border-[#2a2a2a] bg-[#111111] p-4"><div className="text-xs uppercase text-[#00ff9f]">● FORMAT:</div><p className="mt-3 text-xs leading-6 text-[#888888]">MONO_ARCHIVE<br />SQUARE_NODE_CARDS<br />BRACKET_LINKS</p></div>
        <div className="border border-[#2a2a2a] bg-[#111111] p-4"><div className="text-xs uppercase text-[#00ff9f]">● NEXT_SYNC:</div><p className="mt-3 text-xs leading-6 text-[#888888]">CONNECT REAL POSTS WHEN CONTENT EXISTS.<br />NO FAKE METRICS WRITTEN.</p></div>
      </section>
      </div>
    </div>
  );
}
