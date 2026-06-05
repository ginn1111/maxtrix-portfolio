export interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  isPublic: boolean;
  features: string[];
  link?: string; // Live demo URL (for public projects)
  githubLink?: string; // GitHub repository URL
}

// Pre-calculated keccak256 hashes for project IDs
// User will provide actual hash values
export const PROJECTS: Project[] = [
  // AIOZ Network
  {
    id: "0xA1F2B3C4D5E6F7A8B9C0D1E2F3A4B5C6D7E8F9A0",
    title: "AIOZ Stream",
    company: "AIOZ Network",
    description:
      "Web3 live-streaming platform with HLS/DASH support, real-time analytics, and scalable video streaming via Turborepo, Vercel, and Cloudflare.",
    tags: ["Next.js", "Shaka Player", "Turborepo", "WebSocket"],
    isPublic: true,
    link: "https://aiozstream.network/",
    features: [
      "HLS/DASH streaming with Shaka Player",
      "Real-time viewer analytics",
      "Quality selection (1080p, 720p, 480p)",
      "Chat overlay integration",
      "Stream key management",
    ],
  },
  {
    id: "0xB2C3D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8A9B0",
    title: "AIOZ Wallet",
    company: "AIOZ Network",
    description:
      "Multi-chain Web3 wallet integration built on Keplr infrastructure for blockchain connectivity and transaction management.",
    tags: ["React", "Next.js", "Keplr Wallet", "Web3"],
    isPublic: false,
    features: [
      "Multi-chain wallet integration",
      "Transaction history & balance management",
      "Token swap functionality",
      "Account security settings",
    ],
  },
  {
    id: "0xC3D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8A9B0C1",
    title: "AIOZ Global Map",
    company: "AIOZ Network",
    description:
      "Global map monitoring app with interactive geospatial visualization for real-time data monitoring and workflows.",
    tags: ["Next.js", "Mapbox", "REST API"],
    isPublic: false,
    features: [
      "Interactive world map",
      "Geospatial data visualization",
      "Real-time monitoring",
      "Country filtering",
      "Bookmark functionality",
    ],
  },
  // YRISM
  {
    id: "0xD4E5F6A7B8C9D0E1F2A3B4C5D6E7F8A9B0C1D2",
    title: "6ixgo",
    company: "YRISM",
    description:
      "Social marketplace module enabling users to share classifieds, services, products, restaurants, and jobs.",
    tags: ["React", "Next.js", "TypeScript", "Redux Toolkit", "RTK Query"],
    isPublic: true,
    link: "https://6ixgo.com/",
    features: [
      "Post creation with images",
      "Social reactions and comments",
      "Category-based filtering",
      "User profile pages",
      "Search functionality",
    ],
  },
  // PAYME
  {
    id: "0xE5F6A7B8C9D0E1F2A3B4C5D6E7F8A9B0C1D2E3",
    title: "Payme Dashboard",
    company: "PAYME",
    description:
      "Internal management dashboard for merchant management, fee configuration, payment methods, and KYC processing.",
    tags: ["React", "Next.js", "TypeScript", "Ant Design", "GraphQL"],
    isPublic: false,
    features: [
      "Merchant management",
      "Fee configuration",
      "Payment method setup",
      "KYC workflow processing",
      "Transaction monitoring",
    ],
  },
  {
    id: "0xF6A7B8C9D0E1F2A3B4C5D6E7F8A9B0C1D2E3F4",
    title: "Payme Merchant Dashboard",
    company: "PAYME",
    description:
      "Merchant-facing dashboard for managing payin, payout, and B2C settings.",
    tags: ["React", "Next.js", "TypeScript", "Ant Design", "GraphQL"],
    isPublic: false,
    features: [
      "Payin management",
      "Payout processing",
      "B2C settings configuration",
      "Payment analytics",
      "Settlement reports",
    ],
  },
  {
    id: "0xA7B8C9D0E1F2A3B4C5D6E7F8A9B0C1D2E3F4A5",
    title: "Payme B2C Sites",
    company: "PAYME",
    description:
      "Mini-checkout pages allowing merchants to accept multiple payment methods.",
    tags: ["React", "Next.js", "TypeScript", "Ant Design", "REST API"],
    isPublic: false,
    features: [
      "Multiple payment method support",
      "Checkout form optimization",
      "Payment gateway integration",
      "Transaction confirmation",
      "Receipt generation",
    ],
  },
  // Pet Projects
  {
    id: "0xB8C9D0E1F2A3B4C5D6E7F8A9B0C1D2E3F4A5B6",
    title: "Building Project Management",
    company: "Pet Project",
    description:
      "Graduate project for managing tasks, subtasks, proposals, employees, projects, and supplies.",
    tags: ["React Native", "React", "TypeScript", "Zustand", "Firebase"],
    isPublic: true,
    githubLink: "https://github.com/ginn1111/project-management-docker",
    features: [
      "Task and subtask management",
      "Employee profiles",
      "Project progress tracking",
      "Supply inventory",
      "Proposal system",
    ],
  },
  {
    id: "0xC9D0E1F2A3B4C5D6E7F8A9B0C1D2E3F4A5B6C7",
    title: "Freelancer Mobile App",
    company: "Pet Project",
    description:
      "Loyalty app for Canalis Club with point accumulation, discounts, and event notifications.",
    tags: ["React Native", "Firebase", "Google Sign-In", "Apple Sign-In"],
    isPublic: true,
    link: "https://apps.apple.com/vn/app/cnl/id6478867928?l=vi",
    features: [
      "Loyalty point system",
      "Discount redemption",
      "Push notifications",
      "Club location map",
      "Multi-language support",
    ],
  },
];
