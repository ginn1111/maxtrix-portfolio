import { TerminalEntry } from "@/components/terminal/terminal-entry";

const BLOG_POSTS = [
  {
    id: "001",
    title: "Building a Matrix-themed Portfolio",
    date: "2026-05-19",
    tags: ["PORTFOLIO", "NEXT.JS"],
    excerpt: "How I built my personal portfolio with a terminal/matrix aesthetic...",
  },
  {
    id: "002",
    title: "Understanding CRT Effects with CSS",
    date: "2026-05-15",
    tags: ["CSS", "ANIMATION"],
    excerpt: "Implementing scanlines, flicker, and phosphor bloom effects...",
  },
  {
    id: "003",
    title: "TypeScript Patterns for Scale",
    date: "2026-05-10",
    tags: ["TYPESCRIPT", "ARCHITECTURE"],
    excerpt: "Advanced TypeScript patterns I use in large codebases...",
  },
];

export default function BlogPage() {
  return (
    <div className="w-full max-w-4xl space-y-8">
      <div className="space-y-2">
        <h1 className="font-heading text-headline-xl text-primary-fixed tracking-tight">
          DATA LOGS
        </h1>
        <p className="text-on-surface-variant font-mono text-sm">
          [{BLOG_POSTS.length}] ENTRIES FOUND
        </p>
      </div>

      <div className="border border-outline-variant p-4 space-y-4">
        <div className="text-xs font-mono text-on-surface-variant border-b border-outline-variant pb-2">
          <span className="text-primary-fixed">USER@GIN:</span>
          <span className="text-secondary">~/logs</span>
          <span className="text-on-surface">$ cat *</span>
        </div>

        {BLOG_POSTS.map((post) => (
          <TerminalEntry
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            tags={post.tags}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  );
}