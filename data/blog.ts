export type BlogPost = {
  slug: string;
  id: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-a-matrix-themed-portfolio",
    id: "001",
    title: "Building a Matrix-themed Portfolio",
    date: "2026-05-19",
    readTime: "06 MIN",
    tags: ["PORTFOLIO", "NEXT.JS"],
    excerpt:
      "How I built a personal portfolio around terminal affordances, a constrained palette, and a system that makes the work the interface.",
    sections: [
      {
        heading: "START WITH THE OPERATING MODEL",
        paragraphs: [
          "A visual theme is easy to apply and easy to outgrow. The useful question was not how to make a portfolio look like a terminal, but what a terminal changes about navigation and attention.",
          "The answer became a small operating model: every page is a data surface, every link is a command, and every visual effect has to reinforce state rather than compete with the content.",
        ],
      },
      {
        heading: "CONSTRAINTS CREATE SIGNAL",
        paragraphs: [
          "The interface uses a narrow color system, monospaced type, structural borders, and a fixed spacing rhythm. Those constraints make new sections predictable while leaving room for each project to carry its own story.",
          "Responsive behavior follows the same rule. Desktop exposes the full navigation rail; smaller screens collapse it into a compact header without changing the information hierarchy.",
        ],
      },
      {
        heading: "THE TAKEAWAY",
        paragraphs: [
          "The strongest portfolio detail is not another effect. It is a clear path from an index to a specific piece of work, with enough context to understand the decisions behind it.",
        ],
      },
    ],
  },
  {
    slug: "understanding-crt-effects-with-css",
    id: "002",
    title: "Understanding CRT Effects with CSS",
    date: "2026-05-15",
    readTime: "05 MIN",
    tags: ["CSS", "ANIMATION"],
    excerpt:
      "Implementing scanlines, flicker, and phosphor bloom effects without sacrificing contrast, performance, or accessibility.",
    sections: [
      {
        heading: "LAYER THE EFFECTS",
        paragraphs: [
          "A convincing CRT treatment is a stack of restrained signals: a repeating scanline gradient, a little text glow, and occasional motion. Each layer should still look intentional when the others are removed.",
          "A fixed overlay can provide the scanline texture, but it must have pointer-events disabled and sit outside the content's stacking context so it never intercepts interaction.",
        ],
      },
      {
        heading: "MOTION HAS A BUDGET",
        paragraphs: [
          "Flicker works best as an accent on high-priority labels rather than a constant animation across the page. The global reduced-motion rule is the final safety net, turning movement into a readable static state for users who request it.",
          "The result is atmosphere without turning navigation into noise. The content remains high contrast, and focus outlines remain visible above the decorative layer.",
        ],
      },
    ],
  },
  {
    slug: "typescript-patterns-for-scale",
    id: "003",
    title: "TypeScript Patterns for Scale",
    date: "2026-05-10",
    readTime: "07 MIN",
    tags: ["TYPESCRIPT", "ARCHITECTURE"],
    excerpt:
      "Practical TypeScript patterns for keeping feature data explicit, components composable, and refactors safe as a codebase grows.",
    sections: [
      {
        heading: "MAKE CONTENT A CONTRACT",
        paragraphs: [
          "A typed content model is a small investment that pays back whenever a listing and its detail view need to agree. Slugs, labels, metadata, and body sections become one explicit contract instead of parallel assumptions.",
          "The model should describe what the UI needs, not every possible future CMS field. Narrow types make missing content visible during development rather than after deployment.",
        ],
      },
      {
        heading: "COMPOSE AT THE PRESENTATION EDGE",
        paragraphs: [
          "Reusable presentation components should own layout and semantics while receiving content as props. That keeps route files focused on selecting data and handling route-specific behavior such as not-found responses.",
          "When the data shape changes, the compiler points to both the index and detail surfaces. That feedback loop is more valuable than a clever abstraction that hides the relationship between them.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
