"use client";

import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const projects = [
  {
    id: "0x92F1",
    title: "NEURAL_INTERFACE_V2",
    description: "Deploying subconscious API integration for low-latency cerebral communication. Protocol verified.",
    tags: ["REACT", "THREE.JS", "WEBSOCKET"],
    status: "OPERATIONAL",
    lastUpdate: "2026-04-15",
    stats: {
      languages: [
        { name: "TypeScript", percentage: 65 },
        { name: "JavaScript", percentage: 25 },
        { name: "GLSL", percentage: 10 },
      ],
      loc: 12847,
      commits: 342,
      contributors: 4,
      activity: 78,
      lastCommit: "2026-05-09",
      repo: "https://github.com/ginn1111/neural-interface-v2",
    },
  },
  {
    id: "0x44B2",
    title: "CRYPT_SENTINEL",
    description: "Real-time traffic monitoring of subterranean data highways. Automated threat suppression active.",
    tags: ["RUST", "KAFKA", "CUDA"],
    status: "MONITORING",
    lastUpdate: "2026-05-02",
    stats: {
      languages: [
        { name: "Rust", percentage: 70 },
        { name: "C++", percentage: 20 },
        { name: "Python", percentage: 10 },
      ],
      loc: 24891,
      commits: 567,
      contributors: 3,
      activity: 92,
      lastCommit: "2026-05-10",
      repo: "https://github.com/ginn1111/crypt-sentinel",
    },
  },
  {
    id: "0xFD01",
    title: "VOID_OS_KERNEL",
    description: "Rewriting the base reality layer. Kernel modules optimizing for 0ms latency in virtualized instances.",
    tags: ["C++", "ASSEMBLY", "POSIX"],
    status: "OPTIMIZING",
    lastUpdate: "2026-03-28",
    stats: {
      languages: [
        { name: "C++", percentage: 55 },
        { name: "Assembly", percentage: 30 },
        { name: "C", percentage: 15 },
      ],
      loc: 45230,
      commits: 1024,
      contributors: 2,
      activity: 45,
      lastCommit: "2026-04-20",
      repo: "https://github.com/ginn1111/void-os-kernel",
    },
  },
  {
    id: "0x21A3",
    title: "GHOST_TRAFFIC",
    description: "Masking system footprints across global networks. Invisible routing established via dark-mesh nodes.",
    tags: ["GO", "TOR", "PROXY_V6"],
    status: "STEALTH_MODE",
    lastUpdate: "2026-05-08",
    stats: {
      languages: [
        { name: "Go", percentage: 80 },
        { name: "C", percentage: 15 },
        { name: "Shell", percentage: 5 },
      ],
      loc: 8934,
      commits: 189,
      contributors: 1,
      activity: 67,
      lastCommit: "2026-05-08",
      repo: "https://github.com/ginn1111/ghost-traffic",
    },
  },
  {
    id: "0xEE44",
    title: "CHAIN_REACTOR",
    description: "Smart contract execution in a sandbox environment. Validating high-value transactions on the ledger.",
    tags: ["SOLIDITY", "ETH", "WEB3.JS"],
    status: "VALIDATING",
    lastUpdate: "2026-04-22",
    stats: {
      languages: [
        { name: "Solidity", percentage: 50 },
        { name: "JavaScript", percentage: 35 },
        { name: "TypeScript", percentage: 15 },
      ],
      loc: 6721,
      commits: 98,
      contributors: 5,
      activity: 55,
      lastCommit: "2026-05-01",
      repo: "https://github.com/ginn1111/chain-reactor",
    },
  },
  {
    id: "0xBB12",
    title: "SYNTH_CORE",
    description: "Emulating biometric logic gates. Synthesis of artificial decision pathways successful. Core temp stable.",
    tags: ["PYTHON", "PYTORCH", "ONNX"],
    status: "RUNNING",
    lastUpdate: "2026-05-07",
    stats: {
      languages: [
        { name: "Python", percentage: 85 },
        { name: "C++", percentage: 10 },
        { name: "CUDA", percentage: 5 },
      ],
      loc: 15432,
      commits: 276,
      contributors: 2,
      activity: 83,
      lastCommit: "2026-05-09",
      repo: "https://github.com/ginn1111/synth-core",
    },
  },
];

export function ProjectDetailSection() {
  const params = useParams();
  const sectionRef = useRef<HTMLDivElement>(null);

  const projectId = params?.id as string;
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;

      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          }
        );
      }
    };

    loadGSAP();
  }, [project]);

  if (!project) {
    return (
      <div className="relative w-full">
        <div className="max-w-container-max mx-auto w-full">
          <div className="border border-outline-variant p-8 bg-surface-container-low text-center">
            <h2 className="font-heading text-headline-lg text-primary-fixed-dim animate-flicker">
              NODE_NOT_FOUND.sys
            </h2>
            <p className="text-on-surface-variant mt-4 font-mono">
              Project ID: {projectId} | STATUS: UNKNOWN
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 mt-6 text-primary-fixed-dim hover:text-primary transition-colors font-mono"
            >
              <ArrowLeft size={16} />
              RETURN_TO_GALLERY
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full" ref={sectionRef}>
      <div className="max-w-container-max mx-auto w-full">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-primary-fixed-dim hover:text-primary transition-colors font-mono mb-8 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          BACK_TO_GALLERY
        </Link>

        {/* Project ID Header */}
        <div className="mb-6 border-b border-primary-fixed-dim pb-4">
          <div className="text-[10px] text-primary-fixed-dim font-mono mb-2">
            PROJECT_ID: {project.id}
          </div>
          <h1 className="font-heading text-headline-xl text-primary-fixed-dim uppercase tracking-tighter animate-flicker">
            {project.title}.sys
          </h1>
        </div>

        {/* Project Visual Placeholder */}
        <div className="relative mb-8 h-64 w-full overflow-hidden border border-outline-variant bg-surface-container-low scanline-effect">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed-dim/20 via-transparent to-primary-fixed-dim/5" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-primary-fixed-dim font-heading text-display-md opacity-30 uppercase tracking-widest">
              VISUAL_OUTPUT
            </div>
          </div>
          {/* Crosshair corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary-fixed-dim opacity-50" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary-fixed-dim opacity-50" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary-fixed-dim opacity-50" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary-fixed-dim opacity-50" />
        </div>

        {/* Description / SYSTEM_LOG */}
        <section className="mb-8 border border-outline-variant p-6 bg-surface-container-low">
          <div className="flex items-center gap-2 text-primary-fixed-dim font-mono text-label-md mb-4">
            <span className="animate-pulse">●</span>
            SYSTEM_LOG:
          </div>
          <p className="text-on-surface-variant font-mono text-body-md">
            {project.description}
          </p>
        </section>

        {/* TECH_STACK */}
        <section className="mb-8">
          <div className="text-label-md font-mono text-primary-fixed-dim mb-4">
            TECH_STACK:
          </div>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-code-sm px-3 py-1 border border-primary-fixed-dim/50 bg-surface-container-low text-primary-fixed-dim"
              >
                [ {tag} ]
              </span>
            ))}
          </div>
        </section>

        {/* STATUS and LAST_UPDATE */}
        <section className="mb-8 flex gap-8 border border-outline-variant p-4 bg-surface-container-low">
          <div>
            <div className="text-[10px] font-mono text-primary-fixed-dim/70 mb-1">
              STATUS:
            </div>
            <div className="font-mono text-body-md text-primary-fixed-dim">
              {project.status}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-primary-fixed-dim/70 mb-1">
              LAST_UPDATE:
            </div>
            <div className="font-mono text-body-md text-on-surface-variant">
              {project.lastUpdate}
            </div>
          </div>
        </section>

        {/* CONTRIBUTION_METRICS */}
        <section className="mb-8 border border-outline-variant p-6 bg-surface-container-low">
          <div className="flex items-center gap-2 text-primary-fixed-dim font-mono text-label-md mb-6">
            <span className="animate-pulse">●</span>
            CONTRIBUTION_METRICS:
          </div>

          {/* Language Breakdown */}
          <div className="mb-6">
            <div className="text-[10px] font-mono text-primary-fixed-dim/70 mb-3">
              LANGUAGE_BREAKDOWN:
            </div>
            <div className="space-y-3">
              {project.stats.languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-4">
                  <span className="font-mono text-code-sm text-on-surface-variant w-20">
                    {lang.name}
                  </span>
                  <div className="flex-1 h-2 bg-surface-container-lowest border border-outline-variant overflow-hidden">
                    <div
                      className="h-full bg-primary-fixed-dim/60 transition-all duration-500"
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                  <span className="font-mono text-code-sm text-primary-fixed-dim w-10 text-right">
                    {lang.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* LOC, Commits, Contributors */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="border border-outline-variant p-4 bg-surface-container-lowest">
              <div className="text-[10px] font-mono text-primary-fixed-dim/70 mb-1">
                LOC:
              </div>
              <div className="font-mono text-headline-sm text-primary-fixed-dim">
                {project.stats.loc.toLocaleString()}
              </div>
            </div>
            <div className="border border-outline-variant p-4 bg-surface-container-lowest">
              <div className="text-[10px] font-mono text-primary-fixed-dim/70 mb-1">
                COMMITS:
              </div>
              <div className="font-mono text-headline-sm text-primary-fixed-dim">
                {project.stats.commits}
              </div>
            </div>
            <div className="border border-outline-variant p-4 bg-surface-container-lowest">
              <div className="text-[10px] font-mono text-primary-fixed-dim/70 mb-1">
                CONTRIBUTORS:
              </div>
              <div className="font-mono text-headline-sm text-primary-fixed-dim">
                {project.stats.contributors}
              </div>
            </div>
          </div>

          {/* Activity Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-mono text-primary-fixed-dim/70">
                ACTIVITY_LEVEL:
              </span>
              <span className="font-mono text-code-sm text-primary-fixed-dim">
                {project.stats.activity}%
              </span>
            </div>
            <div className="h-3 bg-surface-container-lowest border border-outline-variant overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary-fixed-dim/40 to-primary-fixed-dim transition-all duration-500"
                style={{ width: `${project.stats.activity}%` }}
              />
            </div>
          </div>

          {/* Last Commit and Repo Link */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-primary-fixed-dim/70">
                LAST_COMMIT:
              </span>
              <span className="font-mono text-code-sm text-on-surface-variant ml-2">
                {project.stats.lastCommit}
              </span>
            </div>
            <a
              href={project.stats.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-code-sm text-primary-fixed-dim hover:text-primary transition-colors underline underline-offset-4"
            >
              REPO_LINK
            </a>
          </div>
        </section>

        {/* RAW_DATA_DUMP */}
        <section className="border border-outline-variant p-6 bg-surface-container-low">
          <div className="flex items-center gap-2 text-primary-fixed-dim font-mono text-label-md mb-4">
            <span className="animate-pulse">●</span>
            RAW_DATA_DUMP:
          </div>
          <pre className="font-mono text-code-xs text-on-surface-variant overflow-x-auto whitespace-pre-wrap">
            {JSON.stringify(project, null, 2)}
          </pre>
        </section>

        {/* Footer Output */}
        <section className="mt-12 border border-outline-variant p-4 font-mono bg-surface-container-low">
          <div className="flex items-center gap-2 text-primary-fixed-dim">
            <span className="animate-pulse animate-flicker">●</span>
            NODE_LOG:
          </div>
          <div className="text-[12px] mt-2 space-y-1 text-on-surface-variant opacity-70">
            <div>[ {new Date().toLocaleTimeString()} ] NODE_{project.id}: DISPLAYING_PROJECT_DETAILS</div>
            <div>[ {new Date().toLocaleTimeString()} ] SYS: DATA_STREAM_COMPLETE. READY_FOR_INPUT.</div>
            <div className="flex items-center">
              <span className="text-primary-fixed-dim mr-2">&gt;</span>
              <span className="w-2 h-4 bg-primary-fixed-dim animate-pulse animate-flicker" />
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .scanline-effect {
          position: relative;
        }
        .scanline-effect::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.1) 2px,
            rgba(0, 0, 0, 0.1) 4px
          );
          pointer-events: none;
          z-index: 1;
        }
      `}</style>
    </div>
  );
}