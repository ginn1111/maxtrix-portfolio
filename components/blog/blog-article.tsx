import Link from "next/link";
import { Chip } from "@/components/terminal/chip";
import type { BlogPost } from "@/data/blog";

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="w-full max-w-4xl space-y-8">
      <Link
        href="/hub"
        className="inline-flex font-mono text-sm text-primary-fixed-dim transition-colors hover:text-primary-fixed focus-visible:outline-none"
      >
        ← RETURN_TO_HUB
      </Link>

      <header className="space-y-5 border-b border-primary-fixed-dim pb-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-outline">
          <span>LOG_ID: [{post.id}]</span>
          <span>DATE: {post.date}</span>
          <span>READ_TIME: {post.readTime}</span>
        </div>
        <h1 className="font-heading text-headline-xl tracking-tight text-primary-fixed">
          {post.title}
        </h1>
        <div className="flex flex-wrap gap-3">
          {post.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
        <p className="max-w-3xl font-mono text-base leading-7 text-on-surface-variant">
          {post.excerpt}
        </p>
      </header>

      <div className="border border-outline-variant bg-surface-container-lowest p-5 sm:p-8">
        <div className="mb-8 border-b border-outline-variant pb-3 font-mono text-xs text-on-surface-variant">
          <span className="text-primary-fixed">USER@GIN:</span>~/hub/blog $ cat {post.slug}.log
        </div>
        <div className="space-y-9">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="font-mono text-sm font-bold tracking-wider text-secondary">
                {"// "}{section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="font-mono text-sm leading-7 text-on-surface">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
