export interface ArticleEntry {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  intentCluster: string;
  relatedToolSlugs: string[];
  relatedComparisonSlugs: string[];
  featured: boolean;
  body: string[];
}

export const articles: ArticleEntry[] = [
  {
    slug: "best-ai-coding-tools-for-engineers",
    title: "Best AI Coding Tools for Engineers",
    description: "Shortlist for engineers choosing between editor copilots, coding agents, and terminal-first AI tools.",
    publishedAt: "2026-06-28",
    updatedAt: "2026-06-28",
    intentCluster: "coding",
    relatedToolSlugs: ["cursor", "windsurf", "codex-cli"],
    relatedComparisonSlugs: ["cursor-vs-windsurf"],
    featured: true,
    body: [
      "Most engineers do not need twenty tools. They need one default coding surface, one backup path for debugging, and one comparison that explains tradeoffs without hype.",
      "Start with Cursor if your team already lives in VS Code-style workflow. Choose Windsurf when you want agent-led implementation. Keep Codex CLI nearby for terminal-first patching and debugging.",
      "Do not optimize for demo magic. Optimize for reviewable diffs, low prompt overhead, and trust under deadline.",
    ],
  },
  {
    slug: "cursor-vs-windsurf-for-real-work",
    title: "Cursor vs Windsurf for Real Engineering Work",
    description: "Where each tool wins once code review, debugging, and team workflow matter.",
    publishedAt: "2026-06-28",
    updatedAt: "2026-06-28",
    intentCluster: "code-review",
    relatedToolSlugs: ["cursor", "windsurf"],
    relatedComparisonSlugs: ["cursor-vs-windsurf"],
    featured: true,
    body: [
      "Cursor feels better when you want to stay in control. Windsurf feels better when you want larger autonomous moves.",
      "For most teams, safer default beats flashier demo. That makes Cursor easier to recommend broadly.",
      "If your bottleneck is implementation throughput and you already review hard, Windsurf can buy speed.",
    ],
  },
  {
    slug: "terminal-first-ai-debugging-stack",
    title: "Terminal-First AI Debugging Stack",
    description: "How shell-native engineers combine logs, tests, and AI agents without losing control of patches.",
    publishedAt: "2026-06-28",
    updatedAt: "2026-06-28",
    intentCluster: "debugging",
    relatedToolSlugs: ["codex-cli", "claude-code"],
    relatedComparisonSlugs: ["claude-code-vs-codex"],
    featured: false,
    body: [
      "Terminal-first debugging stays strong because tests, logs, and git already live there.",
      "Codex CLI is quick for focused shell work. Claude Code is stronger when bug spans architecture and multiple subsystems.",
      "Best stack is not one model. Best stack is shortest path from evidence to small verified diff.",
    ],
  },
];

export const articleBySlug = Object.fromEntries(
  articles.map((article) => [article.slug, article]),
);
