"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { TerminalButton } from "@/components/terminal/terminal-button";

export function TerminalLandingSection() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroBodyRef = useRef<HTMLParagraphElement>(null);
  const nodesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Dynamically import GSAP to avoid SSR issues
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      // Terminal Window Entrance
      if (terminalRef.current) {
        gsap.fromTo(
          terminalRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
            filter: "brightness(0.5) blur(10px)",
          },
          {
            duration: 1.2,
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "brightness(1) blur(0px)",
            ease: "power4.out",
            scrollTrigger: {
              trigger: terminalRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Hero Title entrance
      if (heroTitleRef.current) {
        gsap.fromTo(
          heroTitleRef.current,
          { opacity: 0, x: -20 },
          {
            duration: 0.8,
            opacity: 1,
            x: 0,
            delay: 0.5,
            ease: "steps(12)",
          }
        );
      }

      // Hero body entrance
      if (heroBodyRef.current) {
        gsap.fromTo(
          heroBodyRef.current,
          { opacity: 0, y: 10 },
          { duration: 1, opacity: 1, y: 0, delay: 0.3, ease: "power2.out" }
        );
      }

      // Status nodes entrance
      nodesRef.current.forEach((node) => {
        if (node) {
          gsap.fromTo(
            node,
            { opacity: 0, y: 30 },
            {
              duration: 0.8,
              opacity: 1,
              y: 0,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: node,
                start: "top 95%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });
    };

    loadGSAP();
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-background relative overflow-hidden">
      {/* CRT Overlay */}
      <div className="crt-overlay" />
      {/* Digital Rain Background */}
      <div className="digital-rain-bg" />

      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin py-unit border-b border-outline-variant bg-background/90 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <span className="font-heading text-headline-lg font-bold text-primary-fixed-dim drop-shadow-[0_0_8px_rgba(0,230,57,0.8)] animate-flicker">
            GIN_OS_v1.0.4
          </span>
        </div>
        <nav className="hidden md:flex gap-gutter items-center">
          <Link
            href="/"
            className="font-heading text-headline-md uppercase tracking-tighter text-primary-fixed border-b border-primary-fixed pb-1"
          >
            TERMINAL
          </Link>
          <Link
            href="/projects"
            className="font-heading text-headline-md uppercase tracking-tighter text-on-surface-variant hover:text-primary-fixed transition-colors duration-200 px-4"
          >
            PROJECTS
          </Link>
          <Link
            href="/specs"
            className="font-heading text-headline-md uppercase tracking-tighter text-on-surface-variant hover:text-primary-fixed transition-colors duration-200 px-4"
          >
            SPECS
          </Link>
          <Link
            href="/contact"
            className="font-heading text-headline-md uppercase tracking-tighter text-on-surface-variant hover:text-primary-fixed transition-colors duration-200 px-4"
          >
            CONTACT
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary-fixed-dim cursor-pointer hover:bg-primary-container hover:text-on-primary-container p-2 animate-flicker">
            settings_input_component
          </span>
          <span className="material-symbols-outlined text-primary-fixed-dim cursor-pointer hover:bg-primary-container hover:text-on-primary-container p-2 animate-flicker">
            terminal
          </span>
          <span className="material-symbols-outlined text-primary-fixed-dim cursor-pointer hover:bg-primary-container hover:text-on-primary-container p-2 animate-flicker">
            power_settings_new
          </span>
        </div>
      </header>

      {/* Side Nav Bar */}
      <aside className="fixed left-0 top-0 h-full z-40 pt-20 flex flex-col border-r border-outline-variant bg-background w-64 hidden md:flex">
        <div className="px-6 py-8 border-b border-outline-variant mb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 border border-primary-fixed-dim p-0.5">
              <div className="w-full h-full bg-primary-fixed-dim/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-fixed-dim text-sm">person</span>
              </div>
            </div>
            <div>
              <p className="font-mono text-code-sm uppercase text-primary-fixed-dim">OPERATOR_01</p>
              <p className="text-[10px] text-primary-fixed-dim opacity-70 animate-pulse">SECURE_SESSION_ACTIVE</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 flex flex-col">
          <Link
            href="/"
            className="bg-primary-container text-on-primary-container border-l-4 border-primary-fixed-dim px-4 py-3 flex items-center gap-3 font-mono text-code-sm uppercase"
          >
            <span className="material-symbols-outlined">terminal</span>
            ROOT_ACCESS
          </Link>
          <Link
            href="/projects"
            className="text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container px-4 py-3 transition-all flex items-center gap-3 font-mono text-code-sm uppercase"
          >
            <span className="material-symbols-outlined">account_tree</span>
            DATA_NODES
          </Link>
          <Link
            href="/specs"
            className="text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container px-4 py-3 transition-all flex items-center gap-3 font-mono text-code-sm uppercase"
          >
            <span className="material-symbols-outlined">memory</span>
            SYS_DIAGNOSTICS
          </Link>
          <Link
            href="/contact"
            className="text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container px-4 py-3 transition-all flex items-center gap-3 font-mono text-code-sm uppercase"
          >
            <span className="material-symbols-outlined">lock</span>
            ENCRYPT_MSG
          </Link>
        </nav>
        <div className="p-4">
          <TerminalButton className="w-full text-sm py-3">[INITIATE_PING]_</TerminalButton>
        </div>
        <div className="mt-auto border-t border-outline-variant p-4 flex flex-col gap-2">
          <Link
            href="/"
            className="flex items-center gap-3 text-on-surface-variant hover:text-primary-fixed font-mono text-code-sm uppercase"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
            LOGOUT
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 text-on-surface-variant hover:text-primary-fixed font-mono text-code-sm uppercase"
          >
            <span className="material-symbols-outlined text-[18px]">help</span>
            HELP
          </Link>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="md:ml-64 pt-24 pb-24 px-margin min-h-screen flex flex-col items-center justify-center relative">
        {/* Hero Terminal Section */}
        <div className="max-w-4xl w-full relative mb-12">
          {/* Bento Decorative Background Elements */}
          <div className="absolute -top-12 -left-12 w-32 h-32 border border-outline-variant/30 hidden lg:block" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 border border-outline-variant/30 hidden lg:block" />

          {/* Main Terminal Box */}
          <div
            ref={terminalRef}
            className="relative bg-background border border-primary-fixed-dim glow-md p-8 md:p-12 z-10"
          >
            {/* Crosshair Corners */}
            <div className="crosshair corner-tl" />
            <div className="crosshair corner-br" />

            {/* Header Info */}
            <div className="flex justify-between items-center mb-8 border-b border-outline-variant pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-primary-fixed-dim rounded-full opacity-50" />
                <div className="w-3 h-3 bg-primary-fixed-dim rounded-full opacity-30" />
                <div className="w-3 h-3 bg-primary-fixed-dim rounded-full opacity-10" />
              </div>
              <p className="font-mono text-primary-fixed-dim tracking-widest text-[10px]">
                CPU_LOAD: 12% // UPTIME: 324:12:09
              </p>
            </div>

            {/* Hero Content */}
            <div className="space-y-6">
              <h1
                ref={heroTitleRef}
                className="font-heading text-headline-xl text-primary-fixed-dim text-glow uppercase leading-tight animate-flicker"
              >
                INITIALIZING SYSTEM...<br />
                <span className="text-primary-container">ACCESS GRANTED.</span>
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <p ref={heroBodyRef} className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    Welcome, Operator. You have successfully bypassed the perimeter security protocols. The Subterranean
                    GIN_OS is now at your disposal. Navigate through the encrypted nodes to review current projects and system
                    specifications.
                  </p>
                  <div className="space-y-1 font-mono text-on-surface-variant opacity-80 mt-8">
                    <p>IP_SOURCE........127.0.0.1</p>
                    <p>PROTOCOL.........DEEP_ENCRYPT_V4</p>
                    <p>THREAT_LEVEL.....[ LOW ]</p>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <TerminalButton className="group w-full p-6 text-headline-md">
                    COMMAND: VIEW_PROJECTS_
                    <div className="absolute bottom-0 left-0 h-1 bg-primary-container w-0 group-hover:w-full transition-all duration-300" />
                  </TerminalButton>
                  <div className="p-4 border border-outline-variant bg-surface-container-lowest">
                    <p className="font-mono text-label-sm text-on-surface-variant mb-2">[ SYSTEM_ALERTS ]</p>
                    <ul className="font-mono text-primary-fixed-dim space-y-1">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary-fixed-dim" /> NODE_04_STABLE
                      </li>
                      <li className="flex items-center gap-2 text-secondary-container">
                        <span className="w-1 h-1 bg-secondary-container" /> MEMORY_LEAK_DETECTED
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary-fixed-dim" /> SYNC_COMPLETE_100%
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Detail */}
            <div className="mt-12 flex justify-end">
              <span className="font-mono text-label-sm text-on-surface-variant opacity-40">ENCRYPTION_HASH: 0x8F2A...91C</span>
            </div>
          </div>
        </div>

        {/* Bento Grid Elements */}
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div
            ref={(el) => { if (el !== null) { nodesRef.current[0] = el; } }}
            className="border border-outline-variant p-4 bg-background/60 backdrop-blur-md"
          >
            <p className="font-mono text-label-sm text-primary-fixed-dim mb-1">[ DATA_STREAM_01 ]</p>
            <div className="h-1 bg-outline-variant w-full overflow-hidden">
              <div className="h-full bg-primary-fixed-dim w-3/4 animate-pulse" />
            </div>
          </div>
          <div
            ref={(el) => { if (el !== null) { nodesRef.current[1] = el; } }}
            className="border border-outline-variant p-4 bg-background/60 backdrop-blur-md"
          >
            <p className="font-mono text-label-sm text-primary-fixed-dim mb-1">[ UPLINK_STATUS ]</p>
            <p className="font-mono text-on-surface-variant">CONNECTED_TO_ORBITAL_7</p>
          </div>
          <div
            ref={(el) => { if (el !== null) { nodesRef.current[2] = el; } }}
            className="border border-outline-variant p-4 bg-background/60 backdrop-blur-md flex items-center justify-between"
          >
            <p className="font-mono text-label-sm text-primary-fixed-dim">[ SECURITY ]</p>
            <span className="material-symbols-outlined text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>
              lock
            </span>
          </div>
        </div>
      </main>

      {/* Footer Shell */}
      <footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-margin py-2 text-[10px] border-t border-outline-variant bg-background">
        <div className="flex items-center gap-4">
          <span className="font-mono text-label-sm font-bold text-primary-fixed-dim uppercase">
            © 1999-2024 SUBTERRANEAN_GIN_OS. ALL_RIGHTS_RESERVED.
          </span>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <Link
            href="/"
            className="font-mono text-label-sm tracking-widest text-on-surface-variant hover:text-primary-fixed cursor-pointer transition-all hover:underline decoration-dotted underline-offset-4 uppercase"
          >
            PRIVACY_PROTOCOL
          </Link>
          <Link
            href="/"
            className="font-mono text-label-sm tracking-widest text-on-surface-variant hover:text-primary-fixed cursor-pointer transition-all hover:underline decoration-dotted underline-offset-4 uppercase"
          >
            ENCRYPTION_STANDARDS
          </Link>
          <Link
            href="/"
            className="font-mono text-label-sm tracking-widest text-on-surface-variant hover:text-primary-fixed cursor-pointer transition-all hover:underline decoration-dotted underline-offset-4 uppercase"
          >
            CREDITS
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-primary-fixed-dim rounded-full animate-pulse" />
          <span className="font-mono text-label-sm text-primary-fixed-dim">SERVER_STABLE</span>
        </div>
      </footer>

      <style jsx>{`
        .crt-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
            linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%;
          pointer-events: none;
          z-index: 100;
        }
        .digital-rain-bg {
          background-image: linear-gradient(rgba(19, 19, 19, 0.9), rgba(19, 19, 19, 0.9));
          animation: digitalRain 20s linear infinite;
        }
        @keyframes digitalRain {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 0% 100%;
          }
        }
        .glow-sm {
          box-shadow: 0 0 10px rgba(0, 230, 57, 0.3);
        }
        .glow-md {
          box-shadow: 0 0 20px rgba(0, 230, 57, 0.5);
        }
        .text-glow {
          text-shadow: 0 0 8px rgba(0, 230, 57, 0.8);
        }
        .crosshair::before,
        .crosshair::after {
          content: "";
          position: absolute;
          background-color: #00e639;
        }
        .corner-tl::before {
          top: -4px;
          left: 0;
          width: 1px;
          height: 12px;
        }
        .corner-tl::after {
          top: 0;
          left: -4px;
          width: 12px;
          height: 1px;
        }
        .corner-br::before {
          bottom: -4px;
          right: 0;
          width: 1px;
          height: 12px;
        }
        .corner-br::after {
          bottom: 0;
          right: -4px;
          width: 12px;
          height: 1px;
        }
        @keyframes highFreqFlicker {
          0% {
            opacity: 1;
          }
          5% {
            opacity: 0.9;
          }
          10% {
            opacity: 1;
          }
          15% {
            opacity: 0.8;
          }
          20% {
            opacity: 1;
          }
          25% {
            opacity: 0.95;
          }
          30% {
            opacity: 1;
          }
          100% {
            opacity: 1;
          }
        }
        .crt-flicker-text {
          animation: highFreqFlicker 0.2s infinite;
        }
      `}</style>
    </div>
  );
}