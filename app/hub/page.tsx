import { BlogFilter } from "@/components/blog/blog-filter";
import { BLOG_POSTS } from "@/data/blog";

export default function HubPage() {
  return (
    <div className="relative w-full">
      <div className="mx-auto w-full max-w-container-max">
        <header className="mb-6 border-b border-primary-fixed-dim px-5 pb-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="font-heading text-headline-lg font-bold uppercase text-primary-fixed-dim animate-flicker">
                HUB.LOG
              </h1>
              <p className="mt-2 font-mono text-code-sm text-on-surface-variant">
                FETCHING KNOWLEDGE_ARCHIVE... [ OK ] | NODES_DETECTED:{" "}
                {BLOG_POSTS.length.toString().padStart(2, "0")}
              </p>
            </div>
            <span className="font-mono text-[10px] uppercase text-on-surface-variant">
              PUBLIC_ARCHIVE
            </span>
          </div>
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
