"use client";

import { ScrambleText } from "@/components/ui/scramble-text";
import Link from "next/link";

interface HeaderProps {
  currentPath?: string;
}

export function Header({ currentPath = "/" }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full z-50 px-margin py-unit border-b border-outline-variant bg-background/90 backdrop-blur-sm">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-4 min-w-25">
          <Link
            href="/"
            className="font-heading text-headline-lg font-bold text-primary-fixed-dim drop-shadow-[0_0_8px_rgba(0,230,57,0.8)] animate-flicker-logo"
          >
            <ScrambleText text="GIN_OS_v3.0.2026" isHover={false} />
          </Link>
        </div>
        <nav className="hidden md:flex gap-gutter items-center">
          <Link
            href="/"
            className={`font-heading text-headline-md uppercase tracking-tighter transition-colors duration-200 px-4 min-w-25 ${
              currentPath === "/specs"
                ? "text-primary-fixed border-b border-primary-fixed pb-1"
                : "text-on-surface-variant hover:text-primary-fixed"
            }`}
          >
            <ScrambleText text="ABOUT_ME" />
          </Link>
          <Link
            href="/projects"
            className={`font-heading text-headline-md uppercase tracking-tighter transition-colors duration-200 px-4 min-w-25 ${
              currentPath === "/projects"
                ? "text-primary-fixed border-b border-primary-fixed pb-1"
                : "text-on-surface-variant hover:text-primary-fixed"
            }`}
          >
            <ScrambleText text="PROJECTS" />
          </Link>
          <Link
            href="/contact"
            className={`font-heading text-headline-md uppercase tracking-tighter transition-colors duration-200 px-4 min-w-25 text-center${
              currentPath === "/contact"
                ? "text-primary-fixed border-b border-primary-fixed pb-1"
                : "text-on-surface-variant hover:text-primary-fixed"
            }`}
          >
            <ScrambleText text="CONTRACT" />
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
      </div>
    </header>
  );
}
