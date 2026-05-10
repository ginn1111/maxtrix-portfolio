"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { TerminalButton } from "@/components/terminal/terminal-button";

const projects = [
  {
    id: "0x92F1",
    title: "NEURAL_INTERFACE_V2",
    description:
      "Deploying subconscious API integration for low-latency cerebral communication. Protocol verified.",
    tags: ["REACT", "THREE.JS", "WEBSOCKET"],
  },
  {
    id: "0x44B2",
    title: "CRYPT_SENTINEL",
    description:
      "Real-time traffic monitoring of subterranean data highways. Automated threat suppression active.",
    tags: ["RUST", "KAFKA", "CUDA"],
  },
  {
    id: "0xFD01",
    title: "VOID_OS_KERNEL",
    description:
      "Rewriting the base reality layer. Kernel modules optimizing for 0ms latency in virtualized instances.",
    tags: ["C++", "ASSEMBLY", "POSIX"],
  },
  {
    id: "0x21A3",
    title: "GHOST_TRAFFIC",
    description:
      "Masking system footprints across global networks. Invisible routing established via dark-mesh nodes.",
    tags: ["GO", "TOR", "PROXY_V6"],
  },
  {
    id: "0xEE44",
    title: "CHAIN_REACTOR",
    description:
      "Smart contract execution in a sandbox environment. Validating high-value transactions on the ledger.",
    tags: ["SOLIDITY", "ETH", "WEB3.JS"],
  },
  {
    id: "0xBB12",
    title: "SYNTH_CORE",
    description:
      "Emulating biometric logic gates. Synthesis of artificial decision pathways successful. Core temp stable.",
    tags: ["PYTHON", "PYTORCH", "ONNX"],
  },
];

export function ProjectArchiveSection() {
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
      <div className="max-w-container-max mx-auto w-full">
        {/* Header */}
        <div className="mb-12 border-b border-primary-fixed-dim pb-4 px-5">
          <h1 className="font-heading text-headline-xl text-primary-fixed-dim uppercase tracking-tighter animate-flicker">
            PROJECT_GALLERY.sys
          </h1>
          <p className="text-on-surface-variant font-mono text-code-sm mt-2">
            FETCHING ACTIVE_REPOSITORY... [ OK ] | NODES_DETECTED: 06
          </p>
        </div>

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
                NODE_ID: {project.id}
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
            <div>[ 12:44:01 ] NODE_0x92F1: HANDSHAKE_PROTOCOL_INITIALIZED</div>
            <div>[ 12:44:03 ] NODE_0x44B2: ENCRYPTING_DATA_PACKETS... DONE</div>
            <div>
              [ 12:44:05 ] SYS: ALL_SYSTEMS_OPERATIONAL. READY_FOR_COMMAND.
            </div>
            <div className="flex items-center">
              <span className="text-primary-fixed-dim mr-2">&gt;</span>
              <span className="w-2 h-4 bg-primary-fixed-dim animate-pulse animate-flicker" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

