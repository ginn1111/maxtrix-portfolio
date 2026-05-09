"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { TerminalButton } from "@/components/terminal/terminal-button";

const projects = [
  {
    id: "0x92F1",
    title: "NEURAL_INTERFACE_V2",
    description: "Deploying subconscious API integration for low-latency cerebral communication. Protocol verified.",
    tags: ["REACT", "THREE.JS", "WEBSOCKET"],
  },
  {
    id: "0x44B2",
    title: "CRYPT_SENTINEL",
    description: "Real-time traffic monitoring of subterranean data highways. Automated threat suppression active.",
    tags: ["RUST", "KAFKA", "CUDA"],
  },
  {
    id: "0xFD01",
    title: "VOID_OS_KERNEL",
    description: "Rewriting the base reality layer. Kernel modules optimizing for 0ms latency in virtualized instances.",
    tags: ["C++", "ASSEMBLY", "POSIX"],
  },
  {
    id: "0x21A3",
    title: "GHOST_TRAFFIC",
    description: "Masking system footprints across global networks. Invisible routing established via dark-mesh nodes.",
    tags: ["GO", "TOR", "PROXY_V6"],
  },
  {
    id: "0xEE44",
    title: "CHAIN_REACTOR",
    description: "Smart contract execution in a sandbox environment. Validating high-value transactions on the ledger.",
    tags: ["SOLIDITY", "ETH", "WEB3.JS"],
  },
  {
    id: "0xBB12",
    title: "SYNTH_CORE",
    description: "Emulating biometric logic gates. Synthesis of artificial decision pathways successful. Core temp stable.",
    tags: ["PYTHON", "PYTORCH", "ONNX"],
  },
];

export function ProjectArchiveSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      // Scroll-triggered animations for project nodes
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
            }
          );
        }
      });

      // Background parallax
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
    <div className="min-h-screen bg-background text-on-surface relative overflow-x-hidden">
      {/* Scanline Overlay */}
      <div className="scanline-overlay" />

      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin py-unit border-b border-outline-variant bg-background">
        <div className="font-heading text-headline-lg font-bold text-primary-fixed-dim drop-shadow-[0_0_8px_rgba(0,230,57,0.8)]">
          GIN_OS_v1.0.4
        </div>
        <nav className="hidden md:flex items-center gap-gutter">
          <Link
            href="/"
            className="font-heading text-headline-md uppercase tracking-tighter text-primary-fixed border-b border-primary-fixed pb-1"
          >
            PROJECTS
          </Link>
          <Link
            href="/"
            className="font-heading text-headline-md uppercase tracking-tighter text-on-surface-variant hover:text-primary-fixed transition-colors duration-200"
          >
            TERMINAL
          </Link>
          <Link
            href="/specs"
            className="font-heading text-headline-md uppercase tracking-tighter text-on-surface-variant hover:text-primary-fixed transition-colors duration-200"
          >
            SPECS
          </Link>
          <Link
            href="/contact"
            className="font-heading text-headline-md uppercase tracking-tighter text-on-surface-variant hover:text-primary-fixed transition-colors duration-200"
          >
            CONTACT
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary-fixed-dim animate-flicker">settings_input_component</span>
          <span className="material-symbols-outlined text-primary-fixed-dim animate-flicker">terminal</span>
          <span className="material-symbols-outlined text-primary-fixed-dim animate-flicker">power_settings_new</span>
        </div>
      </header>

      {/* Side Nav Bar */}
      <aside className="fixed left-0 top-0 h-full z-40 pt-20 flex flex-col border-r border-outline-variant bg-background w-64 hidden lg:flex">
        <div className="px-6 py-4 border-b border-outline-variant mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-primary-fixed-dim flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-fixed-dim">person</span>
            </div>
            <div>
              <div className="font-mono text-code-sm uppercase text-primary-fixed-dim">OPERATOR_01</div>
              <div className="text-[10px] text-on-surface-variant">SECURE_SESSION_ACTIVE</div>
            </div>
          </div>
        </div>
        <nav className="flex-grow">
          <div className="font-mono text-code-sm uppercase bg-primary-container text-on-primary-container border-l-4 border-primary-fixed-dim px-4 py-3 flex items-center gap-3">
            <span className="material-symbols-outlined">account_tree</span>
            DATA_NODES
          </div>
          <Link
            href="/"
            className="font-mono text-code-sm uppercase text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container px-4 py-3 transition-all flex items-center gap-3"
          >
            <span className="material-symbols-outlined">terminal</span>
            ROOT_ACCESS
          </Link>
          <Link
            href="/specs"
            className="font-mono text-code-sm uppercase text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container px-4 py-3 transition-all flex items-center gap-3"
          >
            <span className="material-symbols-outlined">memory</span>
            SYS_DIAGNOSTICS
          </Link>
          <Link
            href="/contact"
            className="font-mono text-code-sm uppercase text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container px-4 py-3 transition-all flex items-center gap-3"
          >
            <span className="material-symbols-outlined">lock</span>
            ENCRYPT_MSG
          </Link>
        </nav>
        <div className="p-4">
          <TerminalButton className="w-full text-sm py-2">[INITIATE_PING]_</TerminalButton>
        </div>
        <div className="mt-auto border-t border-outline-variant p-4 space-y-2">
          <div className="flex items-center gap-3 text-on-surface-variant hover:text-primary-fixed font-mono text-code-sm">
            <span className="material-symbols-outlined">logout</span>
            LOGOUT
          </div>
          <div className="flex items-center gap-3 text-on-surface-variant hover:text-primary-fixed font-mono text-code-sm">
            <span className="material-symbols-outlined">help</span>
            HELP
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-24 pb-12 px-margin min-h-screen">
        <div className="max-w-container-max mx-auto">
          {/* Header */}
          <div className="mb-12 border-b border-primary-fixed-dim pb-4">
            <h1 className="font-heading text-headline-xl text-primary-fixed-dim uppercase tracking-tighter animate-flicker">
              PROJECT_GALLERY.sys
            </h1>
            <p className="text-on-surface-variant font-mono text-code-sm mt-2">
              FETCHING ACTIVE_REPOSITORY... [ OK ] | NODES_DETECTED: 06
            </p>
          </div>

          {/* DATA_NODES Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => { if (el !== null) { cardsRef.current[index] = el; } }}
                className="card-node relative border border-outline-variant p-6 bg-surface-container-lowest overflow-hidden group"
              >
                <div className="scanline-effect" />
                <div className="absolute top-0 right-0 p-2 text-[10px] text-primary-fixed-dim font-mono">
                  NODE_ID: {project.id}
                </div>

                {/* Placeholder image area */}
                <div className="mb-6 h-40 w-full overflow-hidden border border-outline-variant bg-surface-container-low">
                  <div className="w-full h-full bg-gradient-to-br from-primary-fixed-dim/10 to-transparent" />
                </div>

                <h3 className="font-heading text-headline-md text-primary-fixed-dim uppercase mb-2">{project.title}</h3>
                <div className="text-on-surface-variant text-code-sm mb-4">
                  SYSTEM_LOG: {project.description}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono text-label-sm text-primary-fixed-dim">
                      [ {tag} ]
                    </span>
                  ))}
                </div>

                {/* Crosshair corners */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-primary-fixed-dim opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-primary-fixed-dim opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
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
              <div>[ 12:44:05 ] SYS: ALL_SYSTEMS_OPERATIONAL. READY_FOR_COMMAND.</div>
              <div className="flex items-center">
                <span className="text-primary-fixed-dim mr-2">&gt;</span>
                <span className="w-2 h-4 bg-primary-fixed-dim animate-pulse animate-flicker" />
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-margin py-2 text-[10px] border-t border-outline-variant bg-background">
        <div className="font-mono text-label-sm font-bold text-primary-fixed-dim uppercase">
          © 1999-2024 GIN_OS. ALL_RIGHTS_RESERVED.
        </div>
        <div className="flex gap-6 uppercase">
          <Link
            className="text-on-surface-variant hover:text-primary-fixed hover:underline decoration-dotted underline-offset-4 transition-all"
            href="/"
          >
            PRIVACY_PROTOCOL
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary-fixed hover:underline decoration-dotted underline-offset-4 transition-all"
            href="/"
          >
            ENCRYPTION_STANDARDS
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary-fixed hover:underline decoration-dotted underline-offset-4 transition-all"
            href="/"
          >
            CREDITS
          </Link>
        </div>
      </footer>

      <style jsx>{`
        .scanline-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(19, 19, 19, 0) 50%, rgba(0, 0, 0, 0.25) 50%);
          background-size: 100% 4px;
          pointer-events: none;
          z-index: 100;
          will-change: transform;
        }
        .scanline-effect {
          position: absolute;
          top: -10%;
          left: 0;
          width: 100%;
          height: 2px;
          background: #00e639;
          box-shadow: 0 0 15px #00e639;
          z-index: 10;
        }
        .card-node {
          opacity: 0;
          transform: translateY(30px);
        }
        @keyframes flicker {
          0%,
          19.999%,
          22%,
          62.999%,
          64%,
          64.999%,
          70%,
          100% {
            opacity: 1;
          }
          20%,
          21.999%,
          63%,
          63.999%,
          65%,
          69.999% {
            opacity: 0.4;
          }
        }
        .animate-flicker {
          animation: flicker 3s linear infinite;
        }
      `}</style>
    </div>
  );
}