"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@base-ui/react/separator";
import { PROJECTS } from "@/data/projects";
import { Badge } from "../ui/badge";
import { DigitalFlicker } from "../ui/glitch-text";
import dayjs from "dayjs";

const OPEN_LINK_TIMER_MS = 1500;

export function ProjectDetailSection() {
  const params = useParams();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [linkProgress, setLinkProgress] = useState(0);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const projectId = params?.id as string;
  const project = PROJECTS.find((p) => p.id === projectId);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import("gsap")).default;

      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
        );
      }
    };

    loadGSAP();
  }, []);

  useEffect(() => {
    if (isHoveringLink && project?.link) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLinkProgress(0);
      const step = 100 / (OPEN_LINK_TIMER_MS / 50);
      progressRef.current = setInterval(() => {
        setLinkProgress((prev) => {
          if (prev >= 100) {
            if (progressRef.current) clearInterval(progressRef.current);
            window.open(project.link, "_blank");
            return 100;
          }
          return prev + step;
        });
      }, 50);
    } else {
      if (progressRef.current) clearInterval(progressRef.current);
      setLinkProgress(0);
    }
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isHoveringLink, project?.link]);

  if (!project) {
    return (
      <div className="relative w-full">
        <div className="max-w-container-max mx-auto w-full">
          <div className="border border-outline-variant p-8 bg-surface-container-low text-center">
            <h2 className="font-heading text-headline-lg text-primary-fixed-dim animate-flicker">
              NODE_NOT_FOUND.sys
            </h2>
            <p className="text-on-surface-variant mt-4 font-mono">
              Project ID: {projectId} | STATUS: UNKNOWN
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 mt-6 text-primary-fixed-dim hover:text-primary transition-colors font-mono"
            >
              <ArrowLeft size={16} />
              RETURN_TO_GALLERY
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full px-5" ref={sectionRef}>
      <div className="max-w-container-max mx-auto w-full">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-primary-fixed-dim hover:text-primary transition-colors font-mono mb-4 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          BACK_TO_GALLERY
        </Link>

        {/* Project ID Header */}
        <div>
          <div className="text-[10px] text-primary-fixed-dim font-mono mb-2">
            PROJECT_ID: {project.id}
          </div>
          <h1 className="font-heading text-headline-xl text-primary-fixed-dim uppercase tracking-tighter animate-flicker">
            {project.title}
          </h1>
        </div>

        <Separator className="border border-primary-fixed-dim -mx-5 my-5!" />

        {/* Project Visual Placeholder */}
        <div className="relative mb-8 h-64 w-full overflow-hidden border border-outline-variant bg-surface-container-low crt-fallback crt-flicker">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed-dim/20 via-transparent to-primary-fixed-dim/5" />
          <div className="absolute inset-0 crt-noise" />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-primary-fixed-dim font-heading text-display-md uppercase tracking-widest crt-color-aberration opacity-40">
              VISUAL_OUTPUT
            </div>
          </div>
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary-fixed-dim opacity-50 z-10" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary-fixed-dim opacity-50 z-10" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary-fixed-dim opacity-50 z-10" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary-fixed-dim opacity-50 z-10" />
        </div>

        {/* Description / SYSTEM_LOG */}
        <section className="mb-8 border border-outline-variant p-6 bg-surface-container-low">
          <div className="flex items-center gap-2 text-primary-fixed-dim font-mono text-label-md mb-4">
            <span className="animate-pulse">●</span>
            SYSTEM_LOG:
          </div>
          <p className="text-on-surface-variant font-mono text-body-md">
            {project.description}
          </p>
        </section>

        {/* TECH_STACK */}
        <section className="mb-8">
          <div className="text-label-md font-mono text-primary-fixed-dim mb-4">
            TECH_STACK:
          </div>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <Badge variant="tech" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        </section>

        {/* MODULES/FEATURES */}
        <section className="mb-8 border border-outline-variant p-6 bg-surface-container-low">
          <div className="flex items-center gap-2 text-primary-fixed-dim font-mono text-label-md mb-6">
            <span className="animate-pulse">●</span>
            MODULES:
          </div>
          <ul className="space-y-3">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-on-surface-variant font-mono text-body-sm"
              >
                <span className="text-primary-fixed-dim mt-0.5">
                  [{index.toString().padStart(2, "0")}]
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* PROJECT_LINK */}
        <section className="mb-8 border border-outline-variant p-6 bg-surface-container-low">
          <div className="flex items-center gap-2 text-primary-fixed-dim font-mono text-label-md mb-4">
            <span className="animate-pulse">●</span>
            LINKS:
          </div>
          <div className="space-y-3">
            {/* Live Demo Link */}
            {project.isPublic && project.link && (
              <div
                className="border border-outline-variant p-4 bg-surface-container-lowest relative overflow-hidden cursor-pointer"
                onMouseEnter={() => setIsHoveringLink(true)}
                onMouseLeave={() => setIsHoveringLink(false)}
              >
                <div
                  className="absolute bottom-0 left-0 h-full bg-primary-fixed-dim transition-all duration-50"
                  style={{ width: `${linkProgress}%` }}
                />
                <div className="font-mono text-code-sm text-primary-fixed-dim text-center">
                  {linkProgress >= 100 ? (
                    <span className="animate-pulse">OPENING_LINK...</span>
                  ) : (
                    <Link
                      target="_blank"
                      href={project.link}
                      className="text-on-surface-variant hover:text-primary transition-colors flex items-center"
                    >
                      [
                      <DigitalFlicker className="truncate max-w-full">
                        {project.link}
                      </DigitalFlicker>
                      ]
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* GitHub Link */}
            {project.githubLink && (
              <div
                className="border border-outline-variant p-4 bg-surface-container-lowest relative overflow-hidden cursor-pointer"
                onMouseEnter={() => setIsHoveringLink(true)}
                onMouseLeave={() => setIsHoveringLink(false)}
              >
                <div
                  className="absolute bottom-0 left-0 h-full bg-primary-fixed-dim transition-all duration-50"
                  style={{ width: `${linkProgress}%` }}
                />
                <div className="font-mono text-code-sm text-primary-fixed-dim text-center flex items-center">
                  {linkProgress >= 100 ? (
                    <span className="animate-pulse">OPENING_LINK...</span>
                  ) : (
                    <Link
                      target="_blank"
                      href={project.githubLink}
                      className="text-on-surface-variant hover:text-primary transition-colors truncate min-w-0 flex"
                    >
                      [
                      <DigitalFlicker className="max-w-full truncate">
                        {project.githubLink}
                      </DigitalFlicker>
                      ]
                    </Link>
                  )}
                </div>
              </div>
            )}

            {/* Access Denied for internal without links */}
            {!project.link && !project.githubLink && !project.isPublic && (
              <div className="border border-outline-variant p-4 bg-surface-container-lowest relative overflow-hidden">
                <div className="absolute inset-0 bg-surface-container-low/50 z-10" />
                <div className="relative z-0 flex flex-col items-center gap-2">
                  <div className="text-primary-fixed-dim font-mono text-code-sm">
                    <DigitalFlicker>ACCESS_DENIED</DigitalFlicker>
                  </div>
                  <div className="text-[10px] font-mono text-primary-fixed-dim/70">
                    <DigitalFlicker>
                      INTERNAL_PROJECT // AUTHORIZATION_REQUIRED
                    </DigitalFlicker>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Footer Output */}
        <section className="mt-12 border border-outline-variant p-4 font-mono bg-surface-container-low">
          <div className="flex items-center gap-2 text-primary-fixed-dim">
            <span className="animate-pulse animate-flicker">●</span>
            NODE_LOG:
          </div>
          <div className="text-[12px] mt-2 space-y-1 text-on-surface-variant opacity-70">
            <div>
              [ {dayjs().format("HH:mm:ss")} ] NODE_{project.id}:
              DISPLAYING_PROJECT_DETAILS
            </div>
            <div>
              [ {dayjs().format("HH:mm:ss")} ] SYS: DATA_STREAM_COMPLETE.
              READY_FOR_INPUT.
            </div>
            <div className="flex items-center">
              <span className="text-primary-fixed-dim mr-2">&gt;</span>
              <span className="blink-block animate-blink-block" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
