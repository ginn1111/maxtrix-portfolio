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
  {
    name: "Hermes Agent",
    href: "https://hermes-agent.nousresearch.com/",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M2.55 21.35c1.6-.73 2.62-2.01 2.98-3.65-1.2-.62-1.9-1.61-1.81-2.72.07-.86.58-1.42 1.38-1.8.55-.26.73-.64.73-1.35 0-5.55 3-9.39 7.26-9.56 4.62-.19 7.44 3.06 7.99 8.18.26 2.38.39 5.13 1.3 7.86.41 1.24.04 2.44-1.01 3.23-1.04.78-2.53.63-3.73.03-1.02.6-2.37.75-3.69.24-1.36-.53-2.18-1.48-2.63-2.54-.89 1.3-2.29 2.21-4.01 2.51-1.77.31-3.37.15-4.76-.43ZM7.26 8.11c-.16.89-.22 1.79-.18 2.68.03.7-.18 1.29-.73 1.74l-1.01.74c-.32.24-.46.57-.42.9.07.6.73.89 1.41.95.15 1.31.58 2.38 1.35 2.98.75.59 1.79.7 2.68.25 1.26-.63 2.01-1.88 2.29-3.41.26-1.45.23-3.24-.03-5.25-1.66-.14-3.5-.66-5.36-1.58Zm8.13-4.36c1.17.53 2.09 1.42 2.69 2.63l-.46.19c-.57-1.06-1.34-1.84-2.37-2.37l.14-.45Zm1.39.32c1.46.93 2.37 2.39 2.8 4.3l-.46.1c-.46-1.72-1.26-3.02-2.59-3.98l.25-.42Z"
        />
        <path d="M5.96 8.14c1.3-1.87 3.32-2.77 5.67-2.71 1.45.04 2.75.44 3.83 1.21-.52.41-1.07.75-1.67 1.01l-.4 1.56-.91-1.33-.66 1.57-.86-1.74-.97 1.44-.69-1.6c-1.16.19-2.27.39-3.34.59Zm.97 3.04c.8-.45 1.75-.47 2.55-.01-.87-.1-1.68.01-2.4.38l-.15-.37Zm4.55 5.97c.77 1.53 2.01 2.51 3.6 2.79-.76.38-1.61.39-2.38-.05-.9-.51-1.45-1.45-1.22-2.74Z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full z-50  px-margin py-2 text-[10px] border-t border-outline-variant bg-background px-5">
      <div className="container flex justify-between items-center flex-col sm:flex-row">
        <div className="flex items-center gap-4">
          <span className="font-mono text-label-sm font-bold text-primary-fixed-dim uppercase">
            © 2023-{new Date().getFullYear()} GIN. ALL_RIGHTS_RESERVED.
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
                className="text-primary-fixed-dim hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
