"use client";

import { useEffect, useRef } from "react";
import { TerminalButton } from "@/components/terminal/terminal-button";
import Link from "next/link";

export function TerminalLandingSection() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroBodyRef = useRef<HTMLParagraphElement>(null);
  const nodesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

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
          },
        );
      }

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
          },
        );
      }

      if (heroBodyRef.current) {
        gsap.fromTo(
          heroBodyRef.current,
          { opacity: 0, y: 10 },
          { duration: 1, opacity: 1, y: 0, delay: 0.3, ease: "power2.out" },
        );
      }

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
            },
          );
        }
      });
    };

    loadGSAP();
  }, []);

  return (
    <div className="my-auto">
      {/* Hero Terminal Section */}
      <div className="max-w-4xl w-full relative mb-12">
        <div className="absolute -top-12 -left-12 w-32 h-32 border border-outline-variant/30 hidden lg:block" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 border border-outline-variant/30 hidden lg:block" />

        <div className="crosshair corner-tl" />
        <div className="crosshair corner-br" />
        <div
          ref={terminalRef}
          className="relative bg-background border border-primary-fixed-dim glow-md p-8 md:p-12 z-10"
        >
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

          <div className="space-y-6">
            <h1
              ref={heroTitleRef}
              className="font-heading text-headline-xl text-primary-fixed-dim text-glow uppercase leading-tight animate-flicker"
            >
              INITIALIZING SYSTEM...
              <br />
              <span className="text-primary-container">ACCESS GRANTED.</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <p
                  ref={heroBodyRef}
                  className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed"
                >
                  Welcome, Operator. You have successfully bypassed the
                  perimeter security protocols. The Subterranean GIN_OS is now
                  at your disposal. Navigate through the encrypted nodes to
                  review current projects and system specifications.
                </p>
                <div className="space-y-1 font-mono text-on-surface-variant opacity-80 mt-8">
                  <p>IP_SOURCE........127.0.0.1</p>
                  <p>PROTOCOL.........DEEP_ENCRYPT_V4</p>
                  <p>THREAT_LEVEL.....[ LOW ]</p>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-4">
                <Link href="/specs" className="block">
                  <TerminalButton className="group w-full text-headline-md gap-0 h-min py-3">
                    COMMAND: USER_SPECS
                    <div className="absolute bottom-0 left-0 h-1 bg-primary-container w-0 group-hover:w-full transition-all duration-300" />
                  </TerminalButton>
                </Link>
                <div className="p-4 border border-outline-variant bg-surface-container-lowest">
                  <p className="font-mono text-label-sm text-on-surface-variant mb-2">
                    [ SYSTEM_ALERTS ]
                  </p>
                  <ul className="font-mono text-primary-fixed-dim space-y-1">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary-fixed-dim" />{" "}
                      NODE_04_STABLE
                    </li>
                    <li className="flex items-center gap-2 text-secondary-container">
                      <span className="w-1 h-1 bg-secondary-container" />{" "}
                      MEMORY_LEAK_DETECTED
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary-fixed-dim" />{" "}
                      SYNC_COMPLETE_100%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-end">
            <span className="font-mono text-label-sm text-on-surface-variant opacity-40">
              ENCRYPTION_HASH: 0x8F2A...91C
            </span>
          </div>
        </div>
      </div>

      {/* Bento Grid Elements */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div
          ref={(el) => {
            if (el !== null) {
              nodesRef.current[0] = el;
            }
          }}
          className="border border-outline-variant p-4 bg-background/60 backdrop-blur-md"
        >
          <p className="font-mono text-label-sm text-primary-fixed-dim mb-1">
            [ DATA_STREAM_01 ]
          </p>
          <div className="h-1 bg-outline-variant w-full overflow-hidden">
            <div className="h-full bg-primary-fixed-dim w-3/4 animate-pulse" />
          </div>
        </div>
        <div
          ref={(el) => {
            if (el !== null) {
              nodesRef.current[1] = el;
            }
          }}
          className="border border-outline-variant p-4 bg-background/60 backdrop-blur-md"
        >
          <p className="font-mono text-label-sm text-primary-fixed-dim mb-1">
            [ UPLINK_STATUS ]
          </p>
          <p className="font-mono text-on-surface-variant">
            CONNECTED_TO_ORBITAL_7
          </p>
        </div>
        <div
          ref={(el) => {
            if (el !== null) {
              nodesRef.current[2] = el;
            }
          }}
          className="border border-outline-variant p-4 bg-background/60 backdrop-blur-md flex items-center justify-between"
        >
          <p className="font-mono text-label-sm text-primary-fixed-dim">
            [ SECURITY ]
          </p>
          <span
            className="material-symbols-outlined text-primary-fixed-dim"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            lock
          </span>
        </div>
      </div>
    </div>
  );
}
