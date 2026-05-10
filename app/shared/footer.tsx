"use client";

import { DigitalFlicker } from "@/components/ui/glitch-text";
import Link from "next/link";

const AI_COLLABORATORS = [
  {
    name: "MiniMax",
    href: "https://www.minimax.io/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <title>MiniMax</title>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "Google AI Studio",
    href: "https://aistudio.google.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <title>Google AI Studio</title>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full z-50  px-margin py-2 text-[10px] border-t border-outline-variant bg-background">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="font-mono text-label-sm font-bold text-primary-fixed-dim uppercase">
            © 2023-{new Date().getFullYear()} SUBTERRANEAN_GIN_OS.
            ALL_RIGHTS_RESERVED.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-primary-fixed-dim rounded-full animate-pulse" />
          <span className="font-mono text-label-sm text-primary-fixed-dim flex items-center gap-3">
            <DigitalFlicker>AI_COLLABORATOR:</DigitalFlicker>
            {AI_COLLABORATORS.map((ai) => (
              <Link
                key={ai.name}
                href={ai.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-fixed-dim hover:text-primary transition-colors"
                aria-label={ai.name}
                title={ai.name}
              >
                {ai.icon}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
