"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Chip } from "@/components/terminal/chip";
import type { BlogPost } from "@/data/blog";
import { BLOG_POSTS } from "@/data/blog";
import { GlitchTransition } from "@/components/ui/glitch-transition";
import { DigitalFlicker } from "@/components/ui/glitch-text";

type TocItem = { id: string; label: string; level?: 2 | 3 };

const CODE_SNIPPETS = {
  shell: `ffmpeg -i input.m4a -vn -ac 1 -ar 44100 \\\n  -f f32le -acodec pcm_f32le -`,
  typescript: `type ArticleSection = {\n  heading: string;\n  paragraphs: string[];\n};\n\nexport function getArticle(slug: string) {\n  return articles.find((article) => article.slug === slug);\n}`,
};

const TOC_ITEMS: TocItem[] = [
  { id: "overview", label: "ARTICLE_OVERVIEW" },
  { id: "content-contract", label: "CONTENT_CONTRACT" },
  { id: "implementation", label: "IMPLEMENTATION_NOTES" },
  { id: "production", label: "PRODUCTION_CHECKS" },
  { id: "references", label: "REFERENCES" },
];

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function CodeBlock({
  name,
  language,
  code,
}: {
  name: string;
  language: string;
  code: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="my-6 overflow-hidden border border-outline-variant bg-surface-container-low">
      <div className="flex items-center gap-2 border-b border-outline-variant bg-background px-3 py-2 font-mono">
        <span className="text-xs uppercase text-on-surface">{name}</span>
        <span className="border border-outline-variant px-2 py-0.5 text-[10px] uppercase text-on-surface-variant">
          {language}
        </span>
        <button
          type="button"
          onClick={copyCode}
          className="ml-auto cursor-pointer border border-outline-variant bg-surface-container-low px-2.5 py-1 font-mono text-[11px] uppercase text-on-surface-variant transition-colors hover:border-primary hover:bg-primary-container hover:text-on-primary-container"
          aria-live="polite"
        >
          {copied ? "COPIED" : "COPY"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-6 text-on-surface">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function Pipeline() {
  return (
    <figure className="relative my-8 overflow-visible border border-outline-variant bg-surface-container-low p-6">
      <span className="crosshair crosshair-tl" aria-hidden="true" />
      <span className="crosshair crosshair-br" aria-hidden="true" />
      <div className="flex flex-wrap items-stretch gap-2 font-mono text-xs uppercase">
        {[
          ["CONTENT_SOURCE", "md / local"],
          ["ARTICLE_MODEL", "typed data"],
          ["DETAIL_ROUTE", "server page"],
          ["READING_UI", "rendered"],
        ].map(([label, detail], index, items) => (
          <div key={label} className="flex items-center gap-2">
            <div className={`border p-3 ${index === 1 ? "border-primary-dim bg-primary-muted/10" : "border-outline-variant bg-background"}`}>
              <div className="text-on-surface">{label}</div>
              <small className="text-[10px] text-on-surface-variant">{detail}</small>
            </div>
            {index < items.length - 1 && <span className="font-bold text-primary-fixed-dim" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.04em] text-on-surface-variant">
        FIG_1 — CONTENT FLOWS FROM A PORTABLE LOCAL MODEL INTO A FOCUSED READING SURFACE
      </figcaption>
    </figure>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("ERROR: ENTER_A_VALID_EMAIL.");
      return;
    }
    setStatus("OK: CHECK_YOUR_INBOX_TO_CONFIRM.");
    setEmail("");
  }

  return (
    <section className="relative mt-12 overflow-visible border border-outline-variant bg-surface-container-low p-6" aria-label="Newsletter signup">
      <span className="crosshair crosshair-tl" aria-hidden="true" />
      <span className="crosshair crosshair-br" aria-hidden="true" />
      <h2 className="font-heading text-headline-md uppercase text-primary-fixed-dim">SUBSCRIBE_FEED</h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-on-surface-variant">
        One practical lesson about engineering, media processing, or frontend architecture every two weeks.
      </p>
      <form className="mt-4 flex flex-wrap gap-2" onSubmit={submit}>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="YOU@EXAMPLE.COM"
          aria-label="Email address"
          className="min-h-10 min-w-0 flex-1 border border-outline-variant bg-background px-3 font-mono text-xs uppercase text-on-surface placeholder:text-on-surface-variant focus-visible:border-primary"
        />
        <button type="submit" className="cursor-pointer border border-primary-container bg-primary-container px-4 font-mono text-xs font-bold uppercase text-on-primary-container hover:bg-primary-dim">
          SUBSCRIBE
        </button>
      </form>
      <p className="mt-2 min-h-4 font-mono text-[11px] uppercase text-primary-fixed-dim" role="status" aria-live="polite">{status}</p>
    </section>
  );
}

export function ArticleDetail({ post }: { post: BlogPost }) {
  const [activeToc, setActiveToc] = useState(TOC_ITEMS[0].id);
  const [tocTransition, setTocTransition] = useState(0);
  const currentIndex = BLOG_POSTS.findIndex((item) => item.slug === post.slug);
  const previous = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : undefined;
  const next = currentIndex >= 0 ? BLOG_POSTS[currentIndex + 1] : undefined;
  const related = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);

  useEffect(() => {
    const headings = TOC_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const onScroll = () => {
      const current = headings.reduce((selected, heading) => {
        return heading.getBoundingClientRect().top <= 140 ? heading.id : selected;
      }, TOC_ITEMS[0].id);
      setActiveToc(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionToc = useMemo(
    () => post.sections.map((section) => ({ id: slugify(section.heading), label: section.heading })),
    [post.sections]
  );

  return (
    <GlitchTransition triggerKey={tocTransition}>
    <div className="reading-layout mx-auto grid w-full max-w-container-max grid-cols-1 gap-10 px-5 py-8 lg:grid-cols-[minmax(0,720px)_240px] lg:justify-center">
      <main id="main" className="min-w-0">
        <article>
          <nav className="mb-4 flex flex-wrap items-center font-mono text-xs uppercase tracking-[0.04em] text-on-surface-variant" aria-label="Breadcrumb">
            <Link href="/hub" className="cursor-pointer text-on-surface-variant hover:text-primary-fixed-dim">← BACK_TO_HUB</Link>
            <span className="mx-2 text-primary-fixed-dim" aria-hidden="true">/</span>
            <span>{post.tags[0]}</span>
          </nav>

          <span className="mb-3 inline-block font-mono text-[11px] uppercase tracking-[0.12em] text-primary-fixed-dim">ARTICLE</span>
          <h1 className="max-w-[22ch] font-heading text-[clamp(26px,4vw,40px)] font-bold uppercase leading-tight tracking-tight text-on-surface">
            <DigitalFlicker config={{ delay: 5000, xOffest: 3 }}>
              {post.title}
            </DigitalFlicker>
          </h1>
          <p className="mt-3 max-w-[60ch] text-base leading-7 text-on-surface-variant">{post.excerpt}</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-y border-outline-variant py-3 font-mono text-xs uppercase text-on-surface-variant">
            <span>PUBLISHED: <b className="text-on-surface">{post.date}</b></span>
            <span>READ_TIME: <b className="text-on-surface">{post.readTime}</b></span>
          </div>
          <div className="mt-3 flex flex-wrap gap-3" aria-label="Tags">
            {post.tags.map((tag) => <Chip key={tag}>{tag}</Chip>)}
          </div>

          <Pipeline />

          <details className="my-6 lg:hidden">
            <summary className="cursor-pointer border border-outline-variant bg-surface-container-low p-3 font-mono text-xs uppercase text-on-surface">ON_THIS_PAGE</summary>
            <TocLinks items={[...TOC_ITEMS, ...sectionToc]} active={activeToc} onNavigate={() => setTocTransition((value) => value + 1)} />
          </details>

          <div className="article-body text-base leading-7 text-on-surface-variant">
            <h2 id="overview" className="mt-12 border-t border-outline-variant pt-5 font-heading text-headline-md uppercase text-primary-fixed-dim">ARTICLE_OVERVIEW</h2>
            <p className="mb-4">This article records the decisions behind the current implementation. The goal is a reading surface that feels like a precise engineering notebook: structured enough to scan, but calm enough to read from start to finish.</p>

            <h2 id="content-contract" className="mt-12 border-t border-outline-variant pt-5 font-heading text-headline-md uppercase text-primary-fixed-dim">CONTENT_CONTRACT</h2>
            {post.sections.slice(0, 1).map((section) => (
              <section key={section.heading}>
                <h3 className="mb-2 mt-8 font-heading text-base uppercase text-on-surface">{section.heading}</h3>
                {section.paragraphs.map((paragraph) => <p key={paragraph} className="mb-4">{paragraph}</p>)}
              </section>
            ))}
            <div className="my-6 border border-outline-variant border-l-4 bg-surface-container-low p-4" style={{ borderLeftColor: "var(--accent)" }}>
              <DigitalFlicker config={{ delay: 7000, xOffest: 2 }} className="mb-1 font-mono text-xs font-bold uppercase text-primary-fixed-dim">NOTE</DigitalFlicker>
              <p className="mb-0 text-sm">The content model stays local and explicit so the listing and detail route cannot silently drift apart.</p>
            </div>
            <CodeBlock name="article-model.ts" language="typescript" code={CODE_SNIPPETS.typescript} />

            <h2 id="implementation" className="mt-12 border-t border-outline-variant pt-5 font-heading text-headline-md uppercase text-primary-fixed-dim">IMPLEMENTATION_NOTES</h2>
            {post.sections.slice(1).map((section) => (
              <section key={section.heading}>
                <h3 className="mb-2 mt-8 font-heading text-base uppercase text-on-surface">{section.heading}</h3>
                {section.paragraphs.map((paragraph) => <p key={paragraph} className="mb-4">{paragraph}</p>)}
              </section>
            ))}
            <CodeBlock name="terminal.log" language="shell" code={CODE_SNIPPETS.shell} />
            <div className="my-6 border border-outline-variant border-l-4 bg-surface-container-low p-4" style={{ borderLeftColor: "var(--internal-fg)" }}>
              <DigitalFlicker config={{ delay: 7000, xOffest: 2 }} glitchColor="var(--internal-fg)" className="mb-1 font-mono text-xs font-bold uppercase text-secondary">WARNING</DigitalFlicker>
              <p className="mb-0 text-sm">Decorative motion must remain subordinate to the reading flow and respect reduced-motion preferences.</p>
            </div>

            <h2 id="production" className="mt-12 border-t border-outline-variant pt-5 font-heading text-headline-md uppercase text-primary-fixed-dim">PRODUCTION_CHECKS</h2>
            <p className="mb-4">The article surface is complete only when its links, focus states, responsive layout, and generated route behavior are verified together.</p>
            <div className="my-6 overflow-x-auto">
              <table className="w-full min-w-[460px] border-collapse font-mono text-xs">
                <thead><tr><th className="border border-outline-variant bg-surface-container-low p-2 text-left uppercase text-primary-fixed-dim">CHECK</th><th className="border border-outline-variant bg-surface-container-low p-2 text-left uppercase text-primary-fixed-dim">STATE</th><th className="border border-outline-variant bg-surface-container-low p-2 text-left uppercase text-primary-fixed-dim">PURPOSE</th></tr></thead>
                <tbody>{[["ROUTE", "STATIC", "Stable detail URL"], ["TOC", "ACTIVE", "Long-form navigation"], ["COPY", "READY", "Accessible code feedback"], ["MOTION", "SAFE", "Reduced-motion support"]].map(([check, state, purpose]) => <tr key={check}><td className="border border-outline-variant p-2 text-on-surface">{check}</td><td className="border border-outline-variant p-2 text-primary-fixed-dim">{state}</td><td className="border border-outline-variant p-2">{purpose}</td></tr>)}</tbody>
              </table>
            </div>

            <h2 id="references" className="mt-12 border-t border-outline-variant pt-5 font-heading text-headline-md uppercase text-primary-fixed-dim">REFERENCES</h2>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li><a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">NEXT.JS APP ROUTER DOCUMENTATION</a></li>
              <li><a href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">GSAP SCROLLTRIGGER DOCUMENTATION</a></li>
              <li><Link href="/hub" className="underline underline-offset-2">EXISTING KNOWLEDGE HUB</Link></li>
            </ul>
          </div>

          <footer className="mt-12 border-t border-outline-variant pt-6 font-mono text-xs uppercase tracking-[0.04em] text-on-surface-variant">
            <p className="mb-3">LAST_UPDATED: {post.date}</p>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => navigator.clipboard.writeText(window.location.href)} className="cursor-pointer border border-outline-variant px-3 py-2 hover:border-primary hover:text-primary-fixed-dim">COPY_LINK</button>
              <Link href="/hub" className="border border-outline-variant px-3 py-2 hover:border-primary hover:text-primary-fixed-dim">RETURN_TO_HUB</Link>
            </div>
          </footer>
        </article>

        <section className="relative mt-12 flex gap-5 overflow-visible border border-outline-variant bg-surface-container-low p-6" aria-label="About the author">
          <span className="crosshair crosshair-tl" aria-hidden="true" /><span className="crosshair crosshair-br" aria-hidden="true" />
          <div className="grid size-16 shrink-0 place-items-center border border-outline-variant bg-background font-heading text-xl font-bold text-primary-fixed-dim">G</div>
          <div><h2 className="font-heading text-base uppercase text-on-surface">GIN</h2><p className="mt-1 text-sm text-on-surface-variant">Frontend engineer transitioning into backend engineering and building media-processing systems.</p><div className="mt-2 flex flex-wrap gap-4 font-mono text-xs uppercase"><a href="https://github.com" target="_blank" rel="noopener noreferrer">[GITHUB]</a><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">[LINKEDIN]</a></div></div>
        </section>

        <nav className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2" aria-label="Previous and next articles">
          {previous ? <ArticlePager direction="PREV" post={previous} /> : <span />}
          {next ? <ArticlePager direction="NEXT" post={next} align="right" /> : <span />}
        </nav>

        <section className="mt-12" aria-label="Related articles"><h2 className="mb-4 font-heading text-headline-md uppercase text-primary-fixed-dim">RELATED</h2><ul className="border-t border-outline-variant">{related.map((item) => <li key={item.slug} className="border-b border-outline-variant"><Link href={`/hub/blog/${item.slug}`} className="block py-4"><div className="font-heading text-base uppercase text-on-surface">{item.title}</div><p className="mt-1 text-sm text-on-surface-variant">{item.excerpt}</p><span className="mt-1 block font-mono text-[11px] uppercase text-on-surface-variant">{item.readTime}</span></Link></li>)}</ul></section>
        <Newsletter />
      </main>

      <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start" aria-label="Table of contents"><h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-primary-fixed-dim">ON_THIS_PAGE</h2><TocLinks items={[...TOC_ITEMS, ...sectionToc]} active={activeToc} onNavigate={() => setTocTransition((value) => value + 1)} /></aside>
    </div>
    </GlitchTransition>
  );
}

function TocLinks({ items, active, onNavigate }: { items: TocItem[]; active: string; onNavigate: () => void }) {
  return <ul className="border-l border-outline-variant">{items.map((item) => <li key={`${item.id}-${item.label}`}><a href={`#${item.id}`} onClick={onNavigate} className={`block border-l px-3 py-1.5 font-mono text-xs uppercase transition-colors ${active === item.id ? "-ml-px border-primary-fixed-dim text-primary-fixed-dim" : "border-transparent text-on-surface-variant hover:text-on-surface"}`}>{item.label}</a></li>)}</ul>;
}

function ArticlePager({ direction, post, align }: { direction: "PREV" | "NEXT"; post: BlogPost; align?: "right" }) {
  return <Link href={`/hub/blog/${post.slug}`} className={`group relative block border border-outline-variant bg-surface-container-low p-4 transition-colors hover:border-primary hover:bg-surface-container-lowest ${align === "right" ? "text-right" : ""}`}><span className="block font-mono text-[11px] uppercase text-on-surface-variant">{direction} {direction === "PREV" ? "←" : "→"}</span><span className="mt-2 block font-heading text-sm uppercase text-on-surface group-hover:text-primary-fixed-dim">{post.title}</span></Link>;
}
