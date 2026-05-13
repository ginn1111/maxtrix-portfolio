"use client";

import { ScrambleText } from "@/components/ui/scramble-text";
import type { Project } from "@/data/projects";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface ProjectArchiveSectionProps {
  projects: Project[];
}

export function ProjectArchiveSection({
  projects,
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
        className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-3 container px-5"
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
            className="card-node block relative border border-outline-variant p-6 bg-surface-container-lowest group cursor-pointer group/project"
          >
            <div className="crosshair crosshair-tl" />
            <div className="crosshair crosshair-br" />

            <div className="scanline-effect group-hover/project:animate-page-scan-specs" />
            <div className="absolute top-0 right-4 p-2 text-[10px] text-end text-primary-fixed-dim font-mono">
              NODE_ID:{" "}
              <span className="inline-block">{project.id.slice(20)}</span>
            </div>

            {/* Placeholder image area */}
            <div className="mb-6 h-40 w-full overflow-hidden border border-outline-variant bg-surface-container-low">
              <div className="w-full h-full bg-gradient-to-br from-primary-fixed-dim/10 to-transparent" />
            </div>

            <h3 className="font-heading text-headline-md text-primary-fixed-dim uppercase mb-2">
              {project.title}
            </h3>
            <div className="text-[10px] font-mono text-primary-fixed-dim mb-2">
              [{project.company}]
              <span
                className={`ml-2 inline-flex items-center gap-1 px-1.5 py-0.5 text-[8px] font-mono uppercase ${
                  project.isPublic
                    ? "bg-green-900/30 text-green-400 border border-green-700/50"
                    : "bg-red-900/30 text-red-400 border border-red-700/50"
                }`}
              >
                {project.isPublic ? "● PUBLIC" : "◼ INTERNAL"}
              </span>
            </div>
            <div className="text-on-surface-variant text-code-sm mb-4">
              SYSTEM_LOG: {project.description}
            </div>
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
          <div>
            [ 12:44:03 ] SYS: ALL_SYSTEMS_OPERATIONAL. READY_FOR_COMMAND.
          </div>
          <div className="flex items-center">
            <span className="text-primary-fixed-dim mr-2">&gt;</span>
            <span className="w-2 h-4 bg-primary-fixed-dim animate-pulse animate-flicker" />
          </div>
        </div>
      </section>
    </div>
  );
}
