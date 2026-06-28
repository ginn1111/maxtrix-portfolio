export interface ComparisonEntry {
  slug: string;
  title: string;
  primaryToolSlugs: string[];
  winnerByScenario: Array<{
    scenario: string;
    winnerSlug: string;
    why: string;
  }>;
  summary: string;
  affiliateCtaSlug?: string;
  updatedAt: string;
}

export const comparisons: ComparisonEntry[] = [
  {
    slug: "cursor-vs-windsurf",
    title: "Cursor vs Windsurf",
    primaryToolSlugs: ["cursor", "windsurf"],
    winnerByScenario: [
      {
        scenario: "Fast daily coding in familiar editor",
        winnerSlug: "cursor",
        why: "Lower workflow friction and stronger default predictability.",
      },
      {
        scenario: "Agent-led feature implementation",
        winnerSlug: "windsurf",
        why: "More willing to take bigger autonomous swings.",
      },
    ],
    summary: "Pick Cursor for predictable day-to-day engineering. Pick Windsurf when you want more autonomous implementation flow.",
    affiliateCtaSlug: "cursor",
    updatedAt: "2026-06-28",
  },
  {
    slug: "cursor-vs-codex",
    title: "Cursor vs Codex CLI",
    primaryToolSlugs: ["cursor", "codex-cli"],
    winnerByScenario: [
      {
        scenario: "IDE-first product engineering",
        winnerSlug: "cursor",
        why: "Inline editing and repo chat beat terminal hopping for most engineers.",
      },
      {
        scenario: "Terminal-first debugging and patching",
        winnerSlug: "codex-cli",
        why: "Closer to tests, logs, git, and shell automation.",
      },
    ],
    summary: "Cursor wins for mainstream editor workflows. Codex CLI wins for shell-native engineers and disciplined patch review loops.",
    affiliateCtaSlug: "cursor",
    updatedAt: "2026-06-28",
  },
  {
    slug: "claude-code-vs-codex",
    title: "Claude Code vs Codex CLI",
    primaryToolSlugs: ["claude-code", "codex-cli"],
    winnerByScenario: [
      {
        scenario: "Architecture and deep repo reasoning",
        winnerSlug: "claude-code",
        why: "Better long-context synthesis and explanation depth.",
      },
      {
        scenario: "Small shell-driven fixes",
        winnerSlug: "codex-cli",
        why: "Faster path from prompt to patch inside terminal workflow.",
      },
    ],
    summary: "Claude Code favors deep reasoning; Codex CLI favors fast terminal execution.",
    updatedAt: "2026-06-28",
  },
];

export const comparisonBySlug = Object.fromEntries(
  comparisons.map((comparison) => [comparison.slug, comparison]),
);
