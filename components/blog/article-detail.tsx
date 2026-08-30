import Link from "next/link";
import { Chip } from "@/components/terminal/chip";
import type { BlogPost } from "@/data/blog";
import { BLOG_POSTS } from "@/data/blog";
import { DigitalFlicker } from "@/components/ui/glitch-text";
import { ArticleToc } from "./article-toc";
import { ArticleCallout } from "./article-callout";
import { CopyLinkButton } from "./copy-link-button";
import { Newsletter } from "./newsletter";
import { ShikiCodeBlock } from "./shiki-code-block";

const CODE_SNIPPETS = {
  shell: `ffmpeg -i input.m4a -vn -ac 1 -ar 44100 \\\n  -f f32le -acodec pcm_f32le -`,
  typescript: `type ArticleSection = {\n  heading: string;\n  paragraphs: string[];\n};\n\nexport function getArticle(slug: string) {\n  return articles.find((article) => article.slug === slug);\n}`,
};

const TOC_ITEMS = [
  { id: "overview", label: "ARTICLE_OVERVIEW" },
  { id: "content-contract", label: "CONTENT_CONTRACT" },
  { id: "implementation", label: "IMPLEMENTATION_NOTES" },
  { id: "production", label: "PRODUCTION_CHECKS" },
  { id: "references", label: "REFERENCES" },
];

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

export function ArticleDetail({ post }: { post: BlogPost }) {
  const currentIndex = BLOG_POSTS.findIndex((item) => item.slug === post.slug);
  const previous = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : undefined;
  const next = currentIndex >= 0 ? BLOG_POSTS[currentIndex + 1] : undefined;
  const related = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);

  const sectionToc = post.sections.map((section) => ({
    id: section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    label: section.heading,
  }));

  return (
    <>
      <main id="main" className="min-w-0">
        <article>
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

          <ArticleToc items={[...TOC_ITEMS, ...sectionToc]} mobile />

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
            <ArticleCallout variant="note">
              The content model stays local and explicit so the listing and detail route cannot silently drift apart.
            </ArticleCallout>
            <ShikiCodeBlock name="article-model.ts" language="typescript" code={CODE_SNIPPETS.typescript} />

            <h2 id="implementation" className="mt-12 border-t border-outline-variant pt-5 font-heading text-headline-md uppercase text-primary-fixed-dim">IMPLEMENTATION_NOTES</h2>
            {post.sections.slice(1).map((section) => (
              <section key={section.heading}>
                <h3 className="mb-2 mt-8 font-heading text-base uppercase text-on-surface">{section.heading}</h3>
                {section.paragraphs.map((paragraph) => <p key={paragraph} className="mb-4">{paragraph}</p>)}
              </section>
            ))}
            <ShikiCodeBlock name="terminal.log" language="shellscript" code={CODE_SNIPPETS.shell} />
            <ArticleCallout variant="warning">
              Decorative motion must remain subordinate to the reading flow and respect reduced-motion preferences.
            </ArticleCallout>

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
              <CopyLinkButton />
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

      <ArticleToc items={[...TOC_ITEMS, ...sectionToc]} />
    </>
  );
}

function ArticlePager({ direction, post, align }: { direction: "PREV" | "NEXT"; post: BlogPost; align?: "right" }) {
  return <Link href={`/hub/blog/${post.slug}`} className={`group relative block border border-outline-variant bg-surface-container-low p-4 transition-colors hover:border-primary hover:bg-surface-container-lowest ${align === "right" ? "text-right" : ""}`}><span className="block font-mono text-[11px] uppercase text-on-surface-variant">{direction} {direction === "PREV" ? "←" : "→"}</span><span className="mt-2 block font-heading text-sm uppercase text-on-surface group-hover:text-primary-fixed-dim">{post.title}</span></Link>;
}
