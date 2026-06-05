"use client";

import { useEffect, useRef } from "react";
import { Badge } from "../ui/badge";
import { DigitalFlicker } from "../ui/glitch-text";

const EXPERIENCES = [
  {
    role: "FrontEnd Developer",
    type: "FULLTIME",
    period: "10/2025 - Present",
    startDate: new Date("2025-10-01"),
    endDate: new Date(),
    company: "AIOZ Network",
    domain: "web3, wallet, live-streaming",
    description:
      "Built Web3 live-streaming platform with Turborepo, Next.js, Shaka Player on Vercel/Cloudflare. Integrated multi-chain wallet (Keplr) for blockchain features. Developed global map monitoring app with geospatial visualization. Optimized Lighthouse metrics (INP, TBT -2s). Collaborated with designers on UI/UX, reviewed PRs, and contributed to technical sharing sessions.",
    tech: [
      "Claude/Codex",
      "Turbo repo",
      "Git submodule",
      "Next.js",
      "Shaka (media player for HLS, DASH)",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    role: "FrontEnd Developer",
    type: "FULLTIME",
    period: "08/2024 - 09/2025",
    startDate: new Date("2024-08-01"),
    endDate: new Date("2025-09-01"),
    company: "YRISM VN COMPANY LIMITED",
    domain: "marketplace, seo, e-commerce",
    description:
      "Built marketplace platform from scratch; developed responsive UI/UX across devices. Collaborated with backend to design APIs, worked with designers for usability, and built reusable components (post creation, comments, reactions). Applied SSR, streaming, lazy loading, and SEO optimization.",
    tech: [
      "ReactJS",
      "NextJS",
      "Redux Toolkit",
      "RTK Query",
      "TypeScript",
      "TailwindCSS",
      "SCSS",
      "Ant Design",
    ],
  },
  {
    role: "FrontEnd Developer",
    type: "FULLTIME",
    period: "03/2023 - 07/2024",
    startDate: new Date("2023-03-01"),
    endDate: new Date("2024-07-01"),
    company: "PAYME TECHNOLOGY CORPORATION",
    domain: "finance, enterprise",
    description:
      "Developed and maintained web apps for large-scale finance ecosystem across 5+ projects (3 existing, 2 new). Built complex dynamic forms for user management and data handling. Refactored legacy logic into reusable hooks, proposed GraphQL type definition solution reducing TS redundancy, and collaborated with backend for optimal API structures. Worked in agile teams using Jira, Git, and CI/CD.",
    tech: [
      "ReactJS",
      "NextJS",
      "Redux",
      "Redux Saga",
      "React Query",
      "TypeScript",
      "TailwindCSS",
      "Ant Design",
      "GraphQL",
    ],
  },
  {
    role: "Freelancer",
    type: "CONTRACT",
    period: "2022 - 2023",
    startDate: new Date("2022-01-01"),
    endDate: new Date("2023-12-31"),
    includeInYOE: false,
    company: "Canalis Club",
    domain: "mobile, loyalty, maps",
    description:
      "Developed cross-platform news and loyalty app for Canalis Club, allowing customers to accumulate points, access discounts, and receive event notifications. Implemented social login (Google, Apple) and customized authentication flow. Integrated Firebase Cloud Messaging for push notifications. Built custom map marker feature to display club locations. Implemented multi-language support (Vietnamese and English). Built web-based admin panel to manage users, promotions, and notifications.",
    tech: [
      "React Native",
      "ReactJS",
      "React Router DOM",
      "Zustand",
      "Redux",
      "TypeScript",
      "TailwindCSS",
      "Native Base",
      "Shadcn UI",
      "Firebase",
    ],
  },
];

// Calculate total years of experience
const calculateYOE = () => {
  const now = new Date();
  let totalMonths = 0;

  EXPERIENCES.forEach((exp) => {
    if (exp.includeInYOE === false) return; // Skip entries not included in YOE

    const start = exp.startDate ? exp.startDate : new Date();
    const end = exp.endDate ? exp.endDate : now;

    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());
    totalMonths += Math.max(0, months);
  });

  return (totalMonths / 12).toFixed(0);
};

export function ExperiencesSection() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    };
    loadGSAP();
  }, []);

  return (
    <div className="relative w-full">
      <div className="animate-page-scan page-scan-line-specs">
        <DigitalFlicker
          config={{
            xOffest: 100,
            yOffset: 50,
            delay: 0,
          }}
          className="size-full bg-primary"
        >
          {null}
        </DigitalFlicker>
      </div>
      <div className="w-full space-y-8">
        <div className="font-mono text-code-sm text-on-surface-variant flex gap-2 px-5 flex-col border-b border-b-primary-fixed-dim mb-6 pb-4">
          <span className="text-primary-fixed-dim font-bold animate-flicker">
            EXPERIENCES.DAT
          </span>
          <p className="text-on-surface-variant text-code-sm">
            [UPTIME: +{calculateYOE()}YOE]
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(500px,1fr))] gap-3 px-5 container">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={exp.role + i}
              ref={(el) => {
                if (el !== null) cardsRef.current[i] = el;
              }}
              className="relative p-6 border border-outline-variant bg-surface-container-low opacity-0 max-w-full"
            >
              <div className="crosshair crosshair-tl" />
              <div className="crosshair crosshair-tr" />
              <div className="crosshair crosshair-bl" />
              <div className="crosshair crosshair-br" />

              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2 py-1 font-mono text-[10px] text-background bg-primary-fixed-dim mb-2">
                    {exp.type}
                  </span>
                  <span className="font-mono text-code-sm text-primary-fixed-dim">
                    {exp.period}
                  </span>
                </div>
                <h3 className="font-heading text-headline-sm text-primary-fixed-dim uppercase">
                  {exp.role}
                </h3>
                <div>
                  <p className="font-mono text-label-sm text-on-surface-variant mt-1">
                    {exp.company}
                  </p>
                  <span className="text-sm text-primary-fixed-dim">
                    [{exp.domain}]
                  </span>
                </div>
              </div>

              <p className="font-body-lg text-body-sm text-on-surface-variant mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <Badge variant="tech" key={t}>
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
