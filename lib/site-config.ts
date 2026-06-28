export const SITE_CONFIG = {
  affiliateDisclosure:
    "Disclosure: some outbound links may be affiliate links. If you buy through them, I may earn commission at no extra cost to you.",
  methodology:
    [
      "Hands-on use before recommendation when possible.",
      "Score for usefulness, speed to first value, docs quality, and price clarity.",
      "Call out tradeoffs, ideal user, and reasons not to choose tool.",
    ],
  subscribe: {
    recipient: process.env.SUBSCRIBE_NOTIFY_TO ?? process.env.CONTACT_NOTIFY_TO ?? "vanthuanjw@gmail.com",
    from: process.env.RESEND_FROM ?? "onboarding@resend.dev",
    subjectPrefix: "[Portfolio Subscribe]",
  },
  analytics: {
    endpoint: process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT ?? "",
  },
} as const;
