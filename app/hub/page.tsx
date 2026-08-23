import Link from "next/link";
import { BlogFilter } from "@/components/blog/blog-filter";
import { BLOG_POSTS } from "@/data/blog";

export default function HubPage() {
  return (
    <div className="relative w-full font-mono text-on-surface">
      <div className="mx-auto w-full max-w-container-max px-5 py-8 sm:py-10">
        <nav className="flex flex-col gap-2 border-b border-outline-variant pb-6 text-[11px] uppercase tracking-[0.08em] sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/projects"
            className="cursor-pointer font-bold text-primary-fixed-dim hover:underline focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary-fixed-dim"
          >
            ← BACK_TO_GALLERY
          </Link>
          <span className="text-on-surface-variant">
            <span className="text-primary-fixed-dim">[NOW_LOG]</span> · FETCHING HUB.LOG... [ OK ]
          </span>
        </nav>

        <header className="grid gap-6 overflow-hidden py-9 sm:py-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(240px,0.6fr)]">
          <div>
            <h1 className="font-heading text-[clamp(36px,8vw,88px)] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-primary-fixed-dim animate-flicker">
              hub.log
            </h1>
            <p className="mt-5 max-w-3xl text-[clamp(15px,2vw,18px)] leading-relaxed text-on-surface">
              A terminal archive for engineering notes, interface systems, portfolio telemetry, and project evidence. Every entry is treated as a versioned node, not a soft blog post.
            </p>
          </div>

          <aside className="relative overflow-hidden border border-outline-variant bg-surface-container-low p-4" aria-label="System log">
            <span className="crosshair crosshair-tl" aria-hidden="true" />
            <span className="crosshair crosshair-br" aria-hidden="true" />
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.25)_50%)] [background-size:100%_4px]" aria-hidden="true" />
            <div className="relative text-xs uppercase text-primary-fixed-dim">● SYSTEM_LOG:</div>
            <div className="relative mt-3 space-y-2 text-xs text-on-surface-variant">
              <p>NODES_DETECTED: {BLOG_POSTS.length.toString().padStart(2, "0")}</p>
              <p>INDEX_MODE: PUBLIC_ARCHIVE</p>
              <p>UPDATE_CADENCE: MANUAL_SYNC</p>
              <p>CURSOR_READY <span className="ml-0.5 inline-block h-3.5 w-[9px] bg-primary-fixed-dim align-[-2px] animate-blink-block" aria-hidden="true" /></p>
            </div>
          </aside>
        </header>

        <section aria-labelledby="archive-title">
          <div className="mb-3 flex flex-col justify-between gap-2 text-[11px] uppercase tracking-[0.08em] text-on-surface-variant sm:flex-row">
            <span id="archive-title">ACTIVE_NODES:</span>
            <span>FILTER: ALL_STACKS</span>
          </div>
          <BlogFilter posts={BLOG_POSTS} />
        </section>

        <section className="mt-10 grid gap-3 md:grid-cols-3" aria-label="Archive stats">
          <div className="border border-outline-variant bg-surface-container-low p-4"><div className="text-xs uppercase text-primary-fixed-dim">● COVERAGE:</div><p className="mt-3 text-xs leading-6 text-on-surface-variant">PROJECT_SCHEMA [ OK ]<br />QUALITY_RULES [ OK ]<br />TOKEN_LOG [ OK ]</p></div>
          <div className="border border-outline-variant bg-surface-container-low p-4"><div className="text-xs uppercase text-primary-fixed-dim">● FORMAT:</div><p className="mt-3 text-xs leading-6 text-on-surface-variant">MONO_ARCHIVE<br />SQUARE_NODE_CARDS<br />BRACKET_LINKS</p></div>
          <div className="border border-outline-variant bg-surface-container-low p-4"><div className="text-xs uppercase text-primary-fixed-dim">● NEXT_SYNC:</div><p className="mt-3 text-xs leading-6 text-on-surface-variant">CONNECT REAL POSTS WHEN CONTENT EXISTS.<br />NO FAKE METRICS WRITTEN.</p></div>
        </section>
      </div>
    </div>
  );
}
