"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ScrambleText } from "@/components/ui/scramble-text";
import type { Project } from "@/data/projects";

interface ProjectArchiveSectionProps {
  projects: Project[];
  isHashing: boolean;
}

export function ProjectArchiveSection({
  projects,
  isHashing,
}: ProjectArchiveSectionProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            },
          );
        }
      });

      gsap.to("body", {
        backgroundPositionY: "200px",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    };

    loadGSAP();
  }, []);

  return (
    <div className="relative w-full">
      {/* DATA_NODES Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-gutter container px-5"
      >
        {projects.map((project, index) => (
          <Link
            href={`/projects/${project.id}`}
            key={project.id}
            ref={(el) => {
              if (el !== null) {
                cardsRef.current[index] = el;
              }
            }}
            className="card-node block relative border border-outline-variant p-6 bg-surface-container-lowest overflow-hidden group cursor-pointer group/project"
          >
            <div className="scanline-effect group-hover/project:animate-page-scan-specs" />
            <div className="absolute top-0 right-0 p-2 text-[10px] text-primary-fixed-dim font-mono">
              NODE_ID:{" "}
              <span className="inline-block">
                {isHashing ? (
                  <ScrambleText
                    text={project.id}
                    scrambleText="!@#$%^&*()+-=[]{}|;:,.<>?0-9A-F"
                    duration={2}
                  />
                ) : (
                  project.id
                )}
              </span>
            </div>

            {/* Placeholder image area */}
            <div className="mb-6 h-40 w-full overflow-hidden border border-outline-variant bg-surface-container-low">
              <div className="w-full h-full bg-gradient-to-br from-primary-fixed-dim/10 to-transparent" />
            </div>

            <h3 className="font-heading text-headline-md text-primary-fixed-dim uppercase mb-2">
              {project.title}
            </h3>
            <div className="text-on-surface-variant text-code-sm mb-4">
              SYSTEM_LOG: {project.description}
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-label-sm text-primary-fixed-dim"
                >
                  [ {tag} ]
                </span>
              ))}
            </div>

            {/* Crosshair corners */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-primary-fixed-dim opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-primary-fixed-dim opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>

      {/* Terminal Footer Output */}
      <section className="mt-12 border border-outline-variant p-4 font-mono bg-surface-container-low">
        <div className="flex items-center gap-2 text-primary-fixed-dim">
          <span className="animate-pulse animate-flicker">●</span>
          LIVE_LOG_FEED:
        </div>
        <div className="text-[12px] mt-2 space-y-1 text-on-surface-variant opacity-70">
          <div>[ 12:44:01 ] NODE_CONNECTION: ESTABLISHED</div>
          <div>[ 12:44:03 ] SYS: ALL_SYSTEMS_OPERATIONAL. READY_FOR_COMMAND.</div>
          <div className="flex items-center">
            <span className="text-primary-fixed-dim mr-2">&gt;</span>
            <span className="w-2 h-4 bg-primary-fixed-dim animate-pulse animate-flicker" />
          </div>
        </div>
      </section>
    </div>
  );
}
