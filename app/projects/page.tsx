"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ProjectArchiveSection } from "@/components/sections/project-archive-section";
import { TerminalButton } from "@/components/terminal/terminal-button";
import { PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
  const [isHashing, setIsHashing] = useState(false);

  return (
    <div className="relative w-full">
      <div className="max-w-container-max mx-auto w-full">
        {/* Header */}
        <div className="mb-12 border-b border-primary-fixed-dim pb-4 px-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-heading text-headline-xl text-primary-fixed-dim uppercase tracking-tighter animate-flicker">
                PROJECT_GALLERY.sys
              </h1>
              <p className="text-on-surface-variant font-mono text-code-sm mt-2">
                FETCHING ACTIVE_REPOSITORY... [ OK ] | NODES_DETECTED:{" "}
                {PROJECTS.length.toString().padStart(2, "0")}
              </p>
            </div>
            <TerminalButton
              onClick={() => setIsHashing(!isHashing)}
              className={isHashing ? "!bg-primary !text-black" : ""}
            >
              {isHashing ? "HASHING: ON" : "HASHING: OFF"}
            </TerminalButton>
          </div>
        </div>

        <ProjectArchiveSection projects={PROJECTS} isHashing={isHashing} />
      </div>
    </div>
  );
}
