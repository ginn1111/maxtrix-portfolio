"use client";

import { ProjectArchiveSection } from "@/components/sections/project-archive-section";
import { PROJECTS } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="relative w-full">
      <div className="max-w-container-max mx-auto w-full">
        {/* Header */}
        <div className="mb-6 border-b border-primary-fixed-dim pb-4 px-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-primary-fixed-dim font-bold animate-flicker">
                PROJECTS.DAT
              </span>
              <p className="text-on-surface-variant font-mono text-code-sm mt-2">
                FETCHING ACTIVE_REPOSITORY... [ OK ] | NODES_DETECTED:{" "}
                {PROJECTS.length.toString().padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>

        <ProjectArchiveSection projects={PROJECTS} />
      </div>
    </div>
  );
}
