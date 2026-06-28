export const siteConfig = {
  name: "GStack AI Tools",
  shortName: "GStack",
  description:
    "Opinionated AI tool picks for software engineers: best coding agents, code review copilots, debugging tools, and comparison guides.",
  url: "https://gstack.ai",
  email: "ops@gstack.ai",
  affiliateDisclosure:
    "Disclosure: some outbound links may earn affiliate revenue. Recommendations stay scenario-first.",
  methodology: [
    "Hands-on use before recommendation when possible.",
    "Score for usefulness, speed to first value, docs quality, and price clarity.",
    "Call out tradeoffs, ideal user, and reasons not to choose tool.",
  ],
  newsletterSources: ["home", "blog", "comparison", "tool", "about"] as const,
  subscribe: {
    recipient: process.env.SUBSCRIBE_NOTIFY_TO ?? process.env.CONTACT_NOTIFY_TO ?? "vanthuanjw@gmail.com",
    from: process.env.RESEND_FROM ?? "onboarding@resend.dev",
    subjectPrefix: "[Portfolio Subscribe]",
  },
  analytics: {
    endpoint: process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT ?? "",
  },
  nav: [
    { href: "/", label: "HOME" },
    { href: "/tools", label: "TOOLS" },
    { href: "/compare", label: "COMPARE" },
    { href: "/blog", label: "BLOG" },
    { href: "/about", label: "ABOUT" },
    { href: "/subscribe", label: "SUBSCRIBE" },
  ],
} as const;

export type SiteNavItem = (typeof siteConfig.nav)[number];
