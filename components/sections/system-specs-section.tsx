"use client";

import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";
import { DigitalFlicker } from "../ui/glitch-text";

const skills = [
  "JavaScript",
  "TypeScript",
  "Go",
  "CSS",
  "HTML",
  "Next.js",
  "React",
  "Express",
  "Redux",
  "Zustand",
  "React Native",
  "React Query",
  "TailwindCSS",
  "Ant Design",
  "Shadcn",
  "React Hook Form",
  "GraphQL",
  "Docker",
  "Prisma",
  "PostgresQL",
  "Vim",
  "Command line",
  "Git",
  "Webpack",
  "Vite",
  "Notion",
];

export function SystemSpecsSection() {
  const bioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

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
      <div className="mb-8 font-mono text-code-sm text-on-surface-variant flex items-center gap-2 px-5">
        <span className="text-primary-fixed-dim font-bold animate-flicker">
          ABOUT_ME.DAT
        </span>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 px-5">
        {/* Profile Avatar & Identity */}
        <div className="md:col-span-4 relative p-6 border border-outline-variant bg-surface-container-lowest">
          <div className="crosshair crosshair-tl" />
          <div className="crosshair crosshair-tr" />
          <div className="crosshair crosshair-bl" />
          <div className="crosshair crosshair-br" />

          <div className="aspect-square w-full mb-6 border border-primary-fixed-dim p-2 relative overflow-hidden group">
            <div className="w-full h-full bg-gradient-to-br from-primary-fixed-dim/30 to-surface-container-low" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4 font-heading text-primary-fixed-dim text-sm">
              <DigitalFlicker>[ +3YOE ]</DigitalFlicker>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between font-mono text-label-sm">
              <span className="text-on-surface-variant">DESIGNATION:</span>
              <span className="text-primary-fixed-dim">FULL_STACK_DEV</span>
            </div>
            <div className="flex justify-between font-mono text-label-sm">
              <span className="text-on-surface-variant">STACK:</span>
              <span className="text-primary-fixed-dim">
                <DigitalFlicker>AI </DigitalFlicker>
                /REACT/NEXTJS
              </span>
            </div>
            <div className="flex justify-between font-mono text-label-sm">
              <span className="text-on-surface-variant">LANGUAGES:</span>
              <span className="text-primary-fixed-dim">TS/JS/GO</span>
            </div>
            <div className="flex justify-between font-mono text-label-sm">
              <span className="text-on-surface-variant">SOCIALS:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/ginn1111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-fixed-dim hover:text-primary transition-colors cursor"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/thuanpv-frontenddev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-fixed-dim hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/vanthuan1309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-fixed-dim hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.227h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.126-5.864 10.126-11.854z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex justify-between font-mono text-label-sm">
              <span className="text-on-surface-variant">CONTACT:</span>
              <div className="flex flex-col items-end gap-1">
                <a
                  href="mailto:vanthuanjw@gmail.com"
                  className="text-primary-fixed-dim hover:text-primary transition-colors"
                >
                  vanthuanjw@gmail.com
                </a>

                <a
                  href="tel:0365338185"
                  className="text-primary-fixed-dim hover:text-primary transition-colors"
                >
                  0365338185
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decrypted Biography */}
        <div
          ref={bioRef}
          className="md:col-span-8 relative p-8 border border-outline-variant bg-surface-container-low opacity-0"
        >
          <div className="crosshair crosshair-tl" />
          <div className="crosshair crosshair-tr" />
          <div className="crosshair crosshair-bl" />
          <div className="crosshair crosshair-br" />

          <div className="flex items-center gap-3 mb-6">
            <span
              className="material-symbols-outlined text-primary-fixed-dim"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              lock_open
            </span>
            <h2 className="font-heading text-headline-lg text-primary-fixed-dim uppercase tracking-tighter">
              DECRYPTED_PROFILE_DATA
            </h2>
          </div>

          <div className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed space-y-6">
            <p className="border-l-2 border-primary-fixed-dim pl-4">
              &gt; SYSTEM_LOAD: SUCCESS. WELCOME_OPERATOR.
            </p>
            <p>
              Hi, I&apos;m{" "}
              <span className="text-primary-fixed-dim">
                Pham (<DigitalFlicker>Gin</DigitalFlicker>) Van Thuan
              </span>{" "}
              — a web developer crafting performant, user-centered digital
              experiences. I champion clean code and best practices to keep
              projects maintainable.
            </p>
            <p>
              My journey began with a drive to turn ideas into elegant,
              functional web solutions. Today, I work with HTML, CSS,
              JavaScript, TypeScript, React, and Next.js — always prioritizing
              code quality.
            </p>
            <p>
              In this ever-evolving field, I embrace continuous learning. I
              welcome challenges, collaborate with peers, and strive to build
              web solutions that matter.
            </p>
            <p>
              <span className="text-primary-fixed-dim">What&apos;s next:</span>{" "}
              Expanding into{" "}
              <span className="text-primary-fixed-dim">backend</span> and{" "}
              <span className="text-primary-fixed-dim">mobile development</span>
              .
              <span className="blink-block animate-blink-block ml-1" />
            </p>
          </div>
        </div>

        {/* Skill Diagnostics (Simple List) */}
        <div className="md:col-span-12 lg:col-span-6 relative p-8 border border-outline-variant bg-surface-container-lowest">
          <div className="crosshair crosshair-tl" />
          <div className="crosshair crosshair-tr" />
          <div className="crosshair crosshair-bl" />
          <div className="crosshair crosshair-br" />

          <h3 className="font-heading text-headline-md text-primary-fixed-dim mb-8 flex items-center gap-3 uppercase">
            <span className="material-symbols-outlined">code</span>
            TECH_STACK
          </h3>

          <div className="flex flex-wrap gap-3">
            <Badge variant="tech">
              <DigitalFlicker>Claude/Codex/Gemini</DigitalFlicker>
            </Badge>
            <Badge variant="tech">
              <DigitalFlicker>Hermes</DigitalFlicker>
            </Badge>
            {skills.map((skill) => (
              <Badge key={skill} variant="tech">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="md:col-span-12 lg:col-span-6 relative p-8 border border-outline-variant bg-surface-container-lowest">
          <div className="crosshair crosshair-tl" />
          <div className="crosshair crosshair-tr" />
          <div className="crosshair crosshair-bl" />
          <div className="crosshair crosshair-br" />

          <h3 className="font-heading text-headline-md text-primary-fixed-dim mb-6 flex items-center gap-3 uppercase">
            <span className="material-symbols-outlined">school</span>
            EDUCATION
          </h3>

          <div className="space-y-3 font-mono text-code-sm">
            <div className="flex items-center gap-2">
              <span className="text-on-surface-variant">DEGREE:</span>
              <span className="text-primary-fixed-dim">
                SOFTWARE_ENGINEERING
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-on-surface-variant">INSTITUTION:</span>
              <span className="text-primary-fixed-dim">
                Posts and Telecommunications Institute of Technology (PTIT)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-on-surface-variant">PERIOD:</span>
              <span className="text-primary-fixed-dim">08/2019 - 01/2024</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-on-surface-variant">GRADUATION:</span>
              <span className="text-primary-fixed-dim">
                <DigitalFlicker>VALEDICTORIAN</DigitalFlicker>
              </span>
            </div>
            <div className="mt-4 text-on-surface-variant text-label-sm leading-relaxed">
              4.5 years of studying software engineering — from designing
              software systems (using UML) to implementation. Achieved multiple
              scholarships throughout each term.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
