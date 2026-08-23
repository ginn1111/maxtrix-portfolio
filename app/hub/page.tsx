import { BlogCard } from "@/components/blog/blog-card";
import { BLOG_POSTS } from "@/data/blog";

export default function HubPage() {
  return (
    <div className="w-full max-w-5xl space-y-8">
      <header className="space-y-3 border-b border-primary-fixed-dim pb-5">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h1 className="font-heading text-headline-xl tracking-tight text-primary-fixed">
            KNOWLEDGE_HUB
          </h1>
          <span className="font-mono text-xs text-secondary">/hub</span>
        </div>
        <p className="font-mono text-sm text-on-surface-variant">
          ACCESSING PERSONAL DATA LOGS... [ OK ] | ENTRIES_FOUND: {BLOG_POSTS.length.toString().padStart(2, "0")}
        </p>
      </header>

      <section className="space-y-4" aria-labelledby="blog-index-heading">
        <div className="flex items-center justify-between border-b border-outline-variant pb-2 font-mono text-xs text-on-surface-variant">
          <h2 id="blog-index-heading" className="text-primary-fixed">
            USER@GIN:~/hub $ ls -la
          </h2>
          <span>READ_ONLY</span>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
