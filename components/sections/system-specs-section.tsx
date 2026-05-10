"use client";

import { useEffect, useRef } from "react";

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
      <div className="page-scan-line-specs animate-page-scan" />
      <div className="w-full">
        <div className="mb-8 font-mono text-code-sm text-on-surface-variant flex items-center gap-2">
          <span className="text-primary-fixed-dim font-bold animate-flicker">
            USERS_SPECS.DAT
          </span>
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
              <div className="absolute bottom-4 left-4 font-heading text-primary-fixed-dim">
                [ UNIT_01 ]
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between font-mono text-label-sm">
                <span className="text-on-surface-variant">DESIGNATION:</span>
                <span className="text-primary-fixed-dim">FULL_STACK_DEV</span>
              </div>
              <div className="flex justify-between font-mono text-label-sm">
                <span className="text-on-surface-variant">STACK:</span>
                <span className="text-primary-fixed-dim">REACT/NEXTJS</span>
              </div>
              <div className="flex justify-between font-mono text-label-sm">
                <span className="text-on-surface-variant">LANGUAGES:</span>
                <span className="text-primary-fixed-dim">TS/JS/PY</span>
              </div>
              <div className="flex justify-between font-mono text-label-sm">
                <span className="text-on-surface-variant">STATUS:</span>
                <span className="text-primary-fixed-dim">LEARNING</span>
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
                Hi, I'm <span className="text-primary-fixed-dim">Thuan</span> — a
                passionate web developer with a deep love for creating performant
                and impactful websites that users love. I follow best practices
                and conventions to keep projects clean and maintainable.
              </p>
              <p>
                My web development journey began with a thirst for knowledge and a
                determination to turn ideas into digital realities. With a solid
                foundation in HTML, CSS, JavaScript, TypeScript and frameworks
                like React and NextJS, I'm excited to be part of the
                ever-evolving world of web technologies.
              </p>
              <p>
                In this dynamic field, I believe in lifelong learning. I'm eager
                to take on challenges, learn from experiences, and collaborate
                with like-minded individuals to create innovative web solutions.
                My next goals: expand into <span className="text-primary-fixed-dim">back-end development</span> and{" "}
                <span className="text-primary-fixed-dim">mobile development</span>.
                <span className="blink-block" />
              </p>
            </div>
          </div>

          {/* Skill Diagnostics (Simple List) */}
          <div className="md:col-span-12 lg:col-span-7 relative p-8 border border-outline-variant bg-surface-container-lowest">
            <div className="crosshair crosshair-tl" />
            <div className="crosshair crosshair-tr" />
            <div className="crosshair crosshair-bl" />
            <div className="crosshair crosshair-br" />

            <h3 className="font-heading text-headline-md text-primary-fixed-dim mb-8 flex items-center gap-3 uppercase">
              <span className="material-symbols-outlined">code</span>
              TECH_STACK
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-code-sm px-4 py-2 border border-primary-fixed-dim bg-surface-container-low text-primary-fixed-dim hover:bg-primary-fixed-dim hover:text-black transition-all duration-200 hover:shadow-[0_0_12px_rgba(0,230,57,0.4)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* System Load / Extra Data */}
          <div className="md:col-span-12 lg:col-span-5 relative p-8 border border-outline-variant bg-surface-container-low overflow-hidden">
            <div className="crosshair crosshair-tl" />
            <div className="crosshair crosshair-tr" />
            <div className="crosshair crosshair-bl" />
            <div className="crosshair crosshair-br" />

            <h3 className="font-heading text-headline-md text-primary-fixed-dim mb-6 uppercase">
              SESSION_METRICS
            </h3>

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
                <span className="font-mono text-label-sm text-primary-fixed-dim">
                  LIVE_DATA_STREAM
                </span>
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-primary-fixed-dim animate-pulse" />
                  <div
                    className="w-1 h-5 bg-primary-fixed-dim animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="w-1 h-2 bg-primary-fixed-dim animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  />
                  <div
                    className="w-1 h-4 bg-primary-fixed-dim animate-pulse"
                    style={{ animationDelay: "0.1s" }}
                  />
                </div>
              </div>
              <div className="text-[10px] text-on-surface-variant font-mono opacity-50 break-all leading-tight">
                0x4F 0x61 0x74 0x68 0x20 0x53 0x75 0x63 0x63 0x65 0x73 0x73 0x21
                0x20 0x4B 0x65 0x72 0x6E 0x65 0x6C 0x20 0x4C 0x6F 0x61 0x64 0x65
                0x64 0x2E 0x20 0x4D 0x61 0x69 0x6E 0x66 0x72 0x61 0x6D 0x65 0x20
                0x41 0x63 0x74 0x69 0x76 0x65 0x2E
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
