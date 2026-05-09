"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { TerminalButton } from "@/components/terminal/terminal-button";

const skills = [
  { name: "JAVASCRIPT_CORE", level: 94 },
  { name: "UI_SYSTEM_ARCH", level: 98 },
  { name: "BACKEND_LOGIC", level: 82 },
  { name: "NEURAL_INTERFACING", level: 75 },
];

export function SystemSpecsSection() {
  const bioRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      // Fade-in for Decrypted Profile Data
      if (bioRef.current) {
        gsap.to(bioRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bioRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // Animate System Spec Bars
      barsRef.current.forEach((bar) => {
        if (bar) {
          const targetWidth = bar.getAttribute("data-width") || "0%";
          gsap.to(bar, {
            width: targetWidth,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        }
      });
    };

    loadGSAP();
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-background relative overflow-x-hidden">
      {/* Scanline */}
      <div className="scanline" />

      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin py-unit border-b border-outline-variant bg-background">
        <div className="font-heading text-headline-lg font-bold text-primary-fixed-dim drop-shadow-[0_0_8px_rgba(0,230,57,0.8)] uppercase tracking-tighter">
          GIN_OS_v1.0.4
        </div>
        <nav className="hidden md:flex gap-8">
          <Link
            href="/"
            className="font-heading text-headline-md uppercase tracking-tighter text-on-surface-variant hover:text-primary-fixed transition-colors duration-200"
          >
            TERMINAL
          </Link>
          <Link
            href="/projects"
            className="font-heading text-headline-md uppercase tracking-tighter text-on-surface-variant hover:text-primary-fixed transition-colors duration-200"
          >
            PROJECTS
          </Link>
          <Link
            href="/specs"
            className="font-heading text-headline-md uppercase tracking-tighter text-primary-fixed border-b border-primary-fixed pb-1"
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
          <span className="material-symbols-outlined text-primary-fixed-dim">settings_input_component</span>
          <span className="material-symbols-outlined text-primary-fixed-dim">terminal</span>
          <span className="material-symbols-outlined text-primary-fixed-dim">power_settings_new</span>
        </div>
      </header>

      {/* Side Nav Bar */}
      <aside className="fixed left-0 top-0 h-full z-40 pt-20 flex flex-col border-r border-outline-variant bg-background w-64 hidden lg:flex">
        <div className="px-6 py-8 border-b border-outline-variant mb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 border border-primary-fixed-dim flex items-center justify-center">
              <div className="w-full h-full bg-primary-fixed-dim/20" />
            </div>
            <div>
              <div className="font-mono text-code-sm text-primary-fixed-dim font-bold">OPERATOR_01</div>
              <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">SECURE_SESSION_ACTIVE</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 flex flex-col">
          <Link
            href="/"
            className="text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container px-6 py-4 transition-all font-mono text-code-sm uppercase flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            ROOT_ACCESS
          </Link>
          <Link
            href="/projects"
            className="text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container px-6 py-4 transition-all font-mono text-code-sm uppercase flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-[18px]">account_tree</span>
            DATA_NODES
          </Link>
          <Link
            href="/specs"
            className="bg-primary-container text-on-primary-container border-l-4 border-primary-fixed-dim px-6 py-4 font-mono text-code-sm uppercase flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-[18px]">memory</span>
            SYS_DIAGNOSTICS
          </Link>
          <Link
            href="/contact"
            className="text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container px-6 py-4 transition-all font-mono text-code-sm uppercase flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-[18px]">lock</span>
            ENCRYPT_MSG
          </Link>
        </nav>
        <div className="p-6">
          <TerminalButton className="w-full text-sm py-2">[INITIATE_PING]</TerminalButton>
        </div>
        <div className="mt-auto border-t border-outline-variant p-4">
          <div className="flex items-center gap-4 text-on-surface-variant px-2">
            <span className="material-symbols-outlined text-[18px] cursor-pointer hover:text-primary-fixed transition-colors">logout</span>
            <span className="material-symbols-outlined text-[18px] cursor-pointer hover:text-primary-fixed transition-colors">help</span>
          </div>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="pt-24 lg:pl-64 pb-20 px-margin min-h-screen">
        <div className="max-w-container-max mx-auto">
          {/* Breadcrumbs */}
          <div className="mb-8 font-mono text-code-sm text-on-surface-variant flex items-center gap-2">
            <span>ROOT</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span>SYSTEM</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary-fixed-dim font-bold animate-flicker">OPERATOR_SPECS.DAT</span>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Profile Avatar & Identity */}
            <div className="md:col-span-4 relative p-6 border border-outline-variant bg-surface-container-lowest">
              <div className="crosshair crosshair-tl" />
              <div className="crosshair crosshair-tr" />
              <div className="crosshair crosshair-bl" />
              <div className="crosshair crosshair-br" />

              <div className="aspect-square w-full mb-6 border border-primary-fixed-dim p-2 relative overflow-hidden group">
                <div className="w-full h-full bg-gradient-to-br from-primary-fixed-dim/30 to-surface-container-low" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 font-heading text-primary-fixed-dim">[ UNIT_01 ]</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between font-mono text-label-sm">
                  <span className="text-on-surface-variant">DESIGNATION:</span>
                  <span className="text-primary-fixed-dim">K_NEURAL_OPERATOR</span>
                </div>
                <div className="flex justify-between font-mono text-label-sm">
                  <span className="text-on-surface-variant">CLEARANCE:</span>
                  <span className="text-primary-fixed-dim">LEVEL_09_ADMIN</span>
                </div>
                <div className="flex justify-between font-mono text-label-sm">
                  <span className="text-on-surface-variant">ORIGIN:</span>
                  <span className="text-primary-fixed-dim">SECTOR_B4_GRID</span>
                </div>
                <div className="flex justify-between font-mono text-label-sm">
                  <span className="text-on-surface-variant">UPTIME:</span>
                  <span className="text-primary-fixed-dim">12,482_CYCLES</span>
                </div>
              </div>
            </div>

            {/* Decrypted Biography */}
            <div ref={bioRef} className="md:col-span-8 relative p-8 border border-outline-variant bg-surface-container-low opacity-0">
              <div className="crosshair crosshair-tl" />
              <div className="crosshair crosshair-tr" />
              <div className="crosshair crosshair-bl" />
              <div className="crosshair crosshair-br" />

              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>
                  lock_open
                </span>
                <h2 className="font-heading text-headline-lg text-primary-fixed-dim uppercase tracking-tighter">
                  DECRYPTED_PROFILE_DATA
                </h2>
              </div>

              <div className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed space-y-6">
                <p className="border-l-2 border-primary-fixed-dim pl-4">
                  &gt; ACCESSING BIOGRAPHICAL RECORD... SUCCESS.
                </p>
                <p>
                  Operator 01, formerly identified as <span className="text-primary-fixed-dim">[REDACTED]</span>, is a high-level systems architect specialized in the construction of modular digital infrastructures. Originating from the decentralized grids of the Subterranean Mainframe, they have spent over a decade refining the balance between aesthetic brutalism and functional computational efficiency.
                </p>
                <p>
                  Their methodology prioritizes the "raw-data-first" philosophy, stripping away the superfluous layers of modern web design to expose the core logic beneath. Every line of code is treated as a critical component in a larger simulation, ensuring high-frequency throughput and maximum security across all deployed nodes.
                </p>
                <p>
                  Current mission parameters focus on the evolution of user interfaces into immersive terminal environments, bridging the gap between human intuition and machine precision
                  <span className="blink-block" />
                </p>
              </div>
            </div>

            {/* Skill Diagnostics (Progress Bars) */}
            <div className="md:col-span-12 lg:col-span-7 relative p-8 border border-outline-variant bg-surface-container-lowest">
              <div className="crosshair crosshair-tl" />
              <div className="crosshair crosshair-tr" />
              <div className="crosshair crosshair-bl" />
              <div className="crosshair crosshair-br" />

              <h3 className="font-heading text-headline-md text-primary-fixed-dim mb-8 flex items-center gap-3 uppercase">
                <span className="material-symbols-outlined">analytics</span>
                SKILL_DIAGNOSTICS
              </h3>

              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2 font-mono text-label-sm uppercase tracking-widest">
                      <span>{skill.name}</span>
                      <span className="text-primary-fixed-dim">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-outline-variant">
                      <div
                        ref={(el) => { if (el !== null) { barsRef.current[index] = el; } }}
                        className="h-full bg-primary-fixed-dim glow-sm spec-bar animate-flicker"
                        data-width={`${skill.level}%`}
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Load / Extra Data */}
            <div className="md:col-span-12 lg:col-span-5 relative p-8 border border-outline-variant bg-surface-container-low overflow-hidden">
              <div className="crosshair crosshair-tl" />
              <div className="crosshair crosshair-tr" />
              <div className="crosshair crosshair-bl" />
              <div className="crosshair crosshair-br" />

              <h3 className="font-heading text-headline-md text-primary-fixed-dim mb-6 uppercase">SESSION_METRICS</h3>

              <div className="space-y-4 font-mono text-code-sm">
                <div className="flex items-center gap-2">
                  <span className="text-on-surface-variant">CPU_LATENCY</span>
                  <span className="flex-1 border-b border-dotted border-outline-variant mb-1" />
                  <span className="text-primary-fixed-dim">1.2ms</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-on-surface-variant">MEMORY_ALLOC</span>
                  <span className="flex-1 border-b border-dotted border-outline-variant mb-1" />
                  <span className="text-primary-fixed-dim">64GB_ECC</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-on-surface-variant">ENCRYPTION</span>
                  <span className="flex-1 border-b border-dotted border-outline-variant mb-1" />
                  <span className="text-primary-fixed-dim">AES_X_4096</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-on-surface-variant">PACKET_LOSS</span>
                  <span className="flex-1 border-b border-dotted border-outline-variant mb-1" />
                  <span className="text-primary-fixed-dim">0.000%</span>
                </div>
              </div>

              <div className="mt-10 p-4 border border-outline-variant bg-background">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-label-sm text-primary-fixed-dim">LIVE_DATA_STREAM</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-3 bg-primary-fixed-dim animate-pulse" />
                    <div className="w-1 h-5 bg-primary-fixed-dim animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <div className="w-1 h-2 bg-primary-fixed-dim animate-pulse" style={{ animationDelay: "0.4s" }} />
                    <div className="w-1 h-4 bg-primary-fixed-dim animate-pulse" style={{ animationDelay: "0.1s" }} />
                  </div>
                </div>
                <div className="text-[10px] text-on-surface-variant font-mono opacity-50 break-all leading-tight">
                  0x4F 0x61 0x74 0x68 0x20 0x53 0x75 0x63 0x63 0x65 0x73 0x73 0x21 0x20 0x4B 0x65 0x72 0x6E 0x65 0x6C 0x20 0x4C 0x6F 0x61 0x64 0x65 0x64 0x2E 0x20 0x4D 0x61 0x69 0x6E 0x66 0x72 0x61 0x6D 0x65 0x20 0x41 0x63 0x74 0x69 0x76 0x65 0x2E
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-margin py-2 text-[10px] border-t border-outline-variant bg-background">
        <div className="font-mono text-label-sm font-bold text-primary-fixed-dim">© 1999-2024 GIN_OS_MAINFRAME. ALL_RIGHTS_RESERVED.</div>
        <div className="hidden md:flex gap-6 font-mono text-label-sm tracking-widest text-on-surface-variant">
          © 1999-2024 GIN_OS_MAINFRAME. ALL_RIGHTS_RESERVED.
        </div>
        <div className="text-primary-fixed-dim font-bold flex items-center gap-2">
          <span className="w-2 h-2 bg-primary-fixed-dim rounded-full animate-pulse" />
          SYS_ONLINE_SECURE
        </div>
      </footer>

      <style jsx>{`
        .scanline {
          width: 100%;
          height: 100px;
          z-index: 100;
          background: linear-gradient(0deg, rgba(0, 230, 57, 0) 0%, rgba(0, 230, 57, 0.05) 50%, rgba(0, 230, 57, 0) 100%);
          position: fixed;
          top: -100px;
          left: 0;
          pointer-events: none;
          animation: scan 8s linear infinite;
        }
        @keyframes scan {
          0% { top: -100px; }
          100% { top: 100vh; }
        }
        .blink-block {
          display: inline-block;
          width: 8px;
          height: 1.2em;
          background-color: #00e639;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .glow-sm {
          box-shadow: 0 0 10px rgba(0, 230, 57, 0.3);
        }
        .crosshair::before,
        .crosshair::after {
          content: "";
          position: absolute;
          width: 8px;
          height: 8px;
          border-color: #3b4b37;
        }
        .crosshair-tl::before {
          top: -4px;
          left: -4px;
          border-top: 1px solid;
          border-left: 1px solid;
        }
        .crosshair-tr::before {
          top: -4px;
          right: -4px;
          border-top: 1px solid;
          border-right: 1px solid;
        }
        .crosshair-bl::before {
          bottom: -4px;
          left: -4px;
          border-bottom: 1px solid;
          border-left: 1px solid;
        }
        .crosshair-br::before {
          bottom: -4px;
          right: -4px;
          border-bottom: 1px solid;
          border-right: 1px solid;
        }
        @keyframes flicker {
          0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 1; }
          20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.4; }
        }
        .animate-flicker {
          animation: flicker 3s linear infinite;
        }
      `}</style>
    </div>
  );
}