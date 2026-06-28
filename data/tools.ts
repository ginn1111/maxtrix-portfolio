export type ToolCategory =
  | "agent"
  | "editor"
  | "model"
  | "search"
  | "infra"
  | "eval";

export type TrustLevel = "tested" | "researched" | "community_signal";
export type DisclosureType = "affiliate" | "sponsored" | "organic";

export interface ToolEntry {
  slug: string;
  name: string;
  category: ToolCategory;
  summary: string;
  bestFor: string[];
  pricingSummary: string;
  affiliateUrl?: string;
  vendorUrl: string;
  disclosure: DisclosureType;
  trustLevel: TrustLevel;
  tags: string[];
  pros: string[];
  cons: string[];
  useCases: string[];
  comparedSlugs: string[];
  updatedAt: string;
}

export const tools: ToolEntry[] = [
  {
    slug: "cursor",
    name: "Cursor",
    category: "editor",
    summary: "Best default pick for engineers who want AI-native coding inside familiar editor workflow.",
    bestFor: ["day-to-day coding", "repo chat", "multi-file edits"],
    pricingSummary: "Free tier, Pro from $20/mo",
    affiliateUrl: "https://cursor.com/",
    vendorUrl: "https://cursor.com/",
    disclosure: "affiliate",
    trustLevel: "tested",
    tags: ["coding", "editor", "agents"],
    pros: ["Fast inline edits", "Good repo context", "Low switching cost from VS Code"],
    cons: ["Can over-edit", "Best value needs paid plan"],
    useCases: ["feature spikes", "refactors", "code explanation"],
    comparedSlugs: ["cursor-vs-windsurf", "cursor-vs-codex"],
    updatedAt: "2026-06-28",
  },
  {
    slug: "windsurf",
    name: "Windsurf",
    category: "editor",
    summary: "Best when you want stronger agentic flow and less manual prompt steering inside IDE.",
    bestFor: ["agent-assisted implementation", "handoff-heavy work"],
    pricingSummary: "Free tier, paid plans available",
    affiliateUrl: "https://windsurf.com/",
    vendorUrl: "https://windsurf.com/",
    disclosure: "affiliate",
    trustLevel: "researched",
    tags: ["coding", "editor", "agent"],
    pros: ["Strong autonomy", "Good implementation momentum"],
    cons: ["Less predictable diffs", "Needs review discipline"],
    useCases: ["scaffolding", "parallel implementation", "prototype delivery"],
    comparedSlugs: ["cursor-vs-windsurf"],
    updatedAt: "2026-06-28",
  },
  {
    slug: "codex-cli",
    name: "Codex CLI",
    category: "agent",
    summary: "Best for terminal-first engineers who want AI help close to git, tests, and shell tools.",
    bestFor: ["terminal workflows", "patch generation", "fast debugging"],
    pricingSummary: "Usage-based or bundled by provider",
    vendorUrl: "https://openai.com/index/introducing-codex/",
    disclosure: "organic",
    trustLevel: "tested",
    tags: ["cli", "agent", "debugging"],
    pros: ["Shell-native", "Good for focused diffs", "Fits reviewable workflow"],
    cons: ["Higher prompt discipline needed", "Not IDE-native"],
    useCases: ["bugfixes", "review prep", "script writing"],
    comparedSlugs: ["cursor-vs-codex"],
    updatedAt: "2026-06-28",
  },
  {
    slug: "claude-code",
    name: "Claude Code",
    category: "agent",
    summary: "Best for large-repo reasoning, architecture changes, and codebase-wide edits with explanation depth.",
    bestFor: ["large repos", "design changes", "deep code review"],
    pricingSummary: "Provider plan dependent",
    vendorUrl: "https://www.anthropic.com/claude-code",
    disclosure: "organic",
    trustLevel: "researched",
    tags: ["agent", "review", "architecture"],
    pros: ["Strong reasoning", "Good summaries", "Handles broad context"],
    cons: ["Can be slower", "Higher cost sensitivity"],
    useCases: ["planning", "refactor audits", "reviewing branches"],
    comparedSlugs: ["claude-code-vs-codex"],
    updatedAt: "2026-06-28",
  },
];

export const toolBySlug = Object.fromEntries(tools.map((tool) => [tool.slug, tool]));
