# Project Detail Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a project detail page at `/projects/[id]` with glitch page transitions and full project info including contribution metrics.

**Architecture:** A dynamic Next.js route that renders project details from static data. GSAP-powered glitch transition overlay wraps page navigation. The detail page follows existing terminal aesthetic with scanlines, crosshairs, and neon green styling.

**Tech Stack:** Next.js 16 (App Router), GSAP, Tailwind CSS v4, Lucide React

---

## File Structure

```
app/projects/[id]/page.tsx          # New dynamic route
components/sections/project-detail-section.tsx  # New section component
components/ui/glitch-transition.tsx   # New transition overlay component
app/projects/page.tsx               # Modify: add click handlers
```

---

## Task 1: Create Glitch Transition Component

**Files:**
- Create: `components/ui/glitch-transition.tsx`
- Test: Manual verification in browser

- [ ] **Step 1: Write glitch-transition component**

```tsx
"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface GlitchTransitionProps {
  children: React.ReactNode;
}

export function GlitchTransition({ children }: GlitchTransitionProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const runGlitch = async () => {
      const gsap = (await import("gsap")).default;

      // Phase 1: Glitch out (150ms)
      await gsap.to(overlay, {
        opacity: 1,
        duration: 0.15,
        ease: "power4.in",
        onStart: () => {
          document.body.style.overflow = "hidden";
        },
      });

      // Phase 2: Glitch in (150ms)
      await gsap.to(overlay, {
        opacity: 0,
        duration: 0.15,
        ease: "power4.out",
        onComplete: () => {
          document.body.style overflow = "";
        },
      });
    };

    runGlitch();
  }, [pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9999] pointer-events-none opacity-0"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.15) 0px,
              rgba(0, 0, 0, 0.15) 1px,
              transparent 1px,
              transparent 2px
            )
          `,
          boxShadow: `inset 0 0 100px rgba(0, 230, 57, 0.3)`,
        }}
      />
      {children}
    </>
  );
}
```

- [ ] **Step 2: Test component exists**

Run: `ls -la components/ui/glitch-transition.tsx`
Expected: File exists

- [ ] **Step 3: Commit**

```bash
git add components/ui/glitch-transition.tsx
git commit -m "feat: add glitch transition overlay component"
```

---

## Task 2: Create Project Detail Section Component

**Files:**
- Create: `components/sections/project-detail-section.tsx`
- Test: Manual verification in browser

- [ ] **Step 1: Write project-detail-section component**

```tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const projectsData = [
  {
    id: "0x92F1",
    title: "NEURAL_INTERFACE_V2",
    description: "Deploying subconscious API integration for low-latency cerebral communication. Protocol verified.",
    tags: ["REACT", "THREE.JS", "WEBSOCKET"],
    status: "ACTIVE",
    lastUpdate: "2026-05-10",
    stats: {
      languages: { TypeScript: 67, GLSL: 23, Python: 10 },
      loc: 12847,
      commits: 143,
      contributors: 3,
      activity: 78,
      lastCommit: "2026-05-08",
      repo: "github.com/gin/neural-interface-v2",
    },
  },
  {
    id: "0x44B2",
    title: "CRYPT_SENTINEL",
    description: "Real-time traffic monitoring of subterranean data highways. Automated threat suppression active.",
    tags: ["RUST", "KAFKA", "CUDA"],
    status: "ACTIVE",
    lastUpdate: "2026-05-09",
    stats: {
      languages: { Rust: 85, C: 15 },
      loc: 8934,
      commits: 89,
      contributors: 2,
      activity: 65,
      lastCommit: "2026-05-06",
      repo: "github.com/gin/crypt-sentinel",
    },
  },
  {
    id: "0xFD01",
    title: "VOID_OS_KERNEL",
    description: "Rewriting the base reality layer. Kernel modules optimizing for 0ms latency in virtualized instances.",
    tags: ["C++", "ASSEMBLY", "POSIX"],
    status: "MAINTENANCE",
    lastUpdate: "2026-04-28",
    stats: {
      languages: { C: 72, Assembly: 28 },
      loc: 45231,
      commits: 312,
      contributors: 1,
      activity: 23,
      lastCommit: "2026-04-25",
      repo: "github.com/gin/void-os-kernel",
    },
  },
  {
    id: "0x21A3",
    title: "GHOST_TRAFFIC",
    description: "Masking system footprints across global networks. Invisible routing established via dark-mesh nodes.",
    tags: ["GO", "TOR", "PROXY_V6"],
    status: "ACTIVE",
    lastUpdate: "2026-05-07",
    stats: {
      languages: { Go: 90, Shell: 10 },
      loc: 5621,
      commits: 67,
      contributors: 4,
      activity: 91,
      lastCommit: "2026-05-07",
      repo: "github.com/gin/ghost-traffic",
    },
  },
  {
    id: "0xEE44",
    title: "CHAIN_REACTOR",
    description: "Smart contract execution in a sandbox environment. Validating high-value transactions on the ledger.",
    tags: ["SOLIDITY", "ETH", "WEB3.JS"],
    status: "ACTIVE",
    lastUpdate: "2026-05-05",
    stats: {
      languages: { Solidity: 68, JavaScript: 32 },
      loc: 7823,
      commits: 156,
      contributors: 5,
      activity: 84,
      lastCommit: "2026-05-04",
      repo: "github.com/gin/chain-reactor",
    },
  },
  {
    id: "0xBB12",
    title: "SYNTH_CORE",
    description: "Emulating biometric logic gates. Synthesis of artificial decision pathways successful. Core temp stable.",
    tags: ["PYTHON", "PYTORCH", "ONNX"],
    status: "ACTIVE",
    lastUpdate: "2026-05-01",
    stats: {
      languages: { Python: 95, C++: 5 },
      loc: 15678,
      commits: 201,
      contributors: 3,
      activity: 72,
      lastCommit: "2026-04-30",
      repo: "github.com/gin/synth-core",
    },
  },
];

export function ProjectDetailSection() {
  const params = useParams();
  const projectId = params.id as string;
  const sectionRef = useRef<HTMLDivElement>(null);

  const project = projectsData.find((p) => p.id === projectId);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;

      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0, y: 30 },
          { duration: 0.8, opacity: 1, y: 0, ease: "power2.out" }
        );
      }
    };

    loadGSAP();
  }, [projectId]);

  if (!project) {
    return (
      <div className="max-w-container-max mx-auto w-full">
        <div className="border border-primary p-8 text-center">
          <p className="font-mono text-primary animate-pulse">ERROR: PROJECT_NOT_FOUND</p>
          <p className="font-mono text-on-surface-variant mt-2">NODE_ID: {projectId}</p>
        </div>
      </div>
    );
  }

  const languageBars = Object.entries(project.stats.languages).map(([lang, pct]) => (
    <div key={lang} className="flex items-center gap-2">
      <span className="font-mono text-label-sm text-primary-fixed-dim w-24">{lang}</span>
      <div className="flex-1 h-2 bg-surface-container-low border border-outline-variant overflow-hidden">
        <div className="h-full bg-primary-fixed-dim" style={{ width: `${pct}%` }} />
      </div>
      <span className="font-mono text-label-sm text-on-surface-variant w-12">{pct}%</span>
    </div>
  ));

  return (
    <div ref={sectionRef} className="relative w-full opacity-0">
      <div className="max-w-container-max mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b border-primary-fixed-dim pb-4">
          <Link
            href="/projects"
            className="font-mono text-primary-fixed-dim hover:text-primary transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            BACK
          </Link>
          <span className="font-mono text-label-sm text-on-surface-variant">
            NODE_ID: {project.id}
          </span>
        </div>

        {/* Project Visual */}
        <div className="mb-8 h-64 w-full overflow-hidden border border-outline-variant bg-surface-container-low relative">
          <div className="w-full h-full bg-gradient-to-br from-primary-fixed-dim/10 to-transparent" />
          <div className="scanline-effect" />
        </div>

        {/* Title */}
        <h1 className="font-heading text-headline-xl text-primary-fixed-dim uppercase tracking-tighter mb-4 animate-flicker">
          {project.title}
        </h1>
        <div className="h-px bg-primary-fixed-dim mb-8" />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Main Info */}
          <div className="space-y-6">
            <div>
              <p className="font-mono text-label-sm text-primary-fixed-dim mb-1">SYSTEM_LOG:</p>
              <p className="font-mono text-on-surface-variant">{project.description}</p>
            </div>

            <div>
              <p className="font-mono text-label-sm text-primary-fixed-dim mb-2">TECH_STACK:</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-label-sm text-primary-fixed-dim">
                    [ {tag} ]
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-mono text-label-sm text-primary-fixed-dim">STATUS:</p>
                <p className="font-mono text-on-surface-variant">{project.status}</p>
              </div>
              <div>
                <p className="font-mono text-label-sm text-primary-fixed-dim">LAST_UPDATE:</p>
                <p className="font-mono text-on-surface-variant">{project.lastUpdate}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contribution Metrics */}
          <div className="border border-outline-variant p-6 bg-surface-container-lowest">
            <p className="font-mono text-label-sm text-primary-fixed-dim mb-4">CONTRIBUTION_METRICS.sys</p>

            <div className="space-y-4">
              <div>
                <p className="font-mono text-code-xs text-on-surface-variant mb-2">LANGUAGES:</p>
                <div className="space-y-2">{languageBars}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-mono text-code-xs text-on-surface-variant">LINES_OF_CODE:</p>
                  <p className="font-mono text-primary-fixed-dim">{project.stats.loc.toLocaleString()}</p>
                </div>
                <div>
                  <p className="font-mono text-code-xs text-on-surface-variant">COMMITS:</p>
                  <p className="font-mono text-primary-fixed-dim">{project.stats.commits}</p>
                </div>
                <div>
                  <p className="font-mono text-code-xs text-on-surface-variant">CONTRIBUTORS:</p>
                  <p className="font-mono text-primary-fixed-dim">{project.stats.contributors}</p>
                </div>
                <div>
                  <p className="font-mono text-code-xs text-on-surface-variant">LAST_COMMIT:</p>
                  <p className="font-mono text-primary-fixed-dim">{project.stats.lastCommit}</p>
                </div>
              </div>

              <div>
                <p className="font-mono text-code-xs text-on-surface-variant mb-1">ACTIVITY:</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-surface-container-low border border-outline-variant overflow-hidden">
                    <div className="h-full bg-primary-fixed-dim" style={{ width: `${project.stats.activity}%` }} />
                  </div>
                  <span className="font-mono text-label-sm text-primary-fixed-dim">{project.stats.activity}%</span>
                </div>
              </div>

              <div>
                <p className="font-mono text-code-xs text-on-surface-variant">REPO:</p>
                <p className="font-mono text-primary-fixed-dim text-sm">{project.stats.repo}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Raw Data Dump */}
        <div className="mt-8 border border-outline-variant p-4 bg-surface-container-low">
          <p className="font-mono text-label-sm text-primary-fixed-dim mb-2">RAW_DATA_DUMP:</p>
          <pre className="font-mono text-code-xs text-on-surface-variant opacity-60 overflow-x-auto">
{JSON.stringify(project, null, 2)}
          </pre>
        </div>
      </div>

      <style jsx>{`
        .scanline-effect {
          position: absolute;
          top: -10%;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #00e639, #00ff55, #00e639, transparent);
          box-shadow:
            0 0 20px #00e639,
            0 0 40px #00e639,
            0 0 60px rgba(0, 230, 57, 0.5);
          z-index: 10;
          opacity: 0;
          animation: scanline-move 1.5s ease-out forwards;
        }
        @keyframes scanline-move {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
```

- [ ] **Step 2: Test component exists**

Run: `ls -la components/sections/project-detail-section.tsx`
Expected: File exists

- [ ] **Step 3: Commit**

```bash
git add components/sections/project-detail-section.tsx
git commit -m "feat: add project detail section component"
```

---

## Task 3: Create Dynamic Route Page

**Files:**
- Create: `app/projects/[id]/page.tsx`
- Test: `npm run build` to verify no errors

- [ ] **Step 1: Write the dynamic route page**

```tsx
import { AppLayout } from "@/app/shared";
import { ProjectDetailSection } from "@/components/sections/project-detail-section";

export default function ProjectDetailPage() {
  return (
    <AppLayout>
      <ProjectDetailSection />
    </AppLayout>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | head -50`
Expected: Build completes without errors

- [ ] **Step 3: Commit**

```bash
git add app/projects/[id]/page.tsx
git commit -m "feat: add dynamic project detail route /projects/[id]"
```

---

## Task 4: Add Navigation from Project Archive

**Files:**
- Modify: `app/projects/page.tsx` (line 106-108, the card click area)

- [ ] **Step 1: Read current file to verify structure**

Run: `cat -n app/projects/page.tsx | head -115`
Expected: Shows project cards structure with key={project.id}

- [ ] **Step 2: Add Link wrapper to project cards**

Find the project card div (around line 106-108) and wrap it with Next.js Link:

Change:
```tsx
<div
  key={project.id}
  ref={(el) => { if (el !== null) { cardsRef.current[index] = el; } }}
  className="card-node relative border border-outline-variant p-6 bg-surface-container-lowest overflow-hidden group"
>
```

To:
```tsx
<Link
  href={`/projects/${project.id}`}
  key={project.id}
  className="block card-node relative border border-outline-variant p-6 bg-surface-container-lowest overflow-hidden group cursor-pointer"
  ref={(el) => { if (el !== null) { cardsRef.current[index] = el; } }}
>
```

And close the Link tag after the card content (after line 136).

- [ ] **Step 3: Verify build**

Run: `npm run build 2>&1 | head -50`
Expected: Build completes without errors

- [ ] **Step 4: Commit**

```bash
git add app/projects/page.tsx
git commit -m "feat: add navigation to project detail from archive"
```

---

## Verification Steps

After all tasks complete:

1. Run `npm run dev`
2. Navigate to http://localhost:3000/projects
3. Click on any project card
4. Verify:
   - Glitch transition occurs
   - Detail page displays with all sections
   - Back button returns to archive
   - All content matches project data