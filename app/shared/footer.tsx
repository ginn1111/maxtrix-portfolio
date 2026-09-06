"use client";

import { DigitalFlicker } from "@/components/ui/glitch-text";
import Link from "next/link";

const AI_COLLABORATORS = [
  {
    name: "OpenDesign",
    href: "https://open-design.ai/",
    icon: (
      <svg viewBox="0 0 256 256" className="size-4" fill="currentColor" aria-hidden="true">
        <path d="M128 41.51c47.77 0 86.49 38.72 86.49 86.49S175.77 214.48 128 214.48H53.02c-6.37 0-11.51-5.14-11.51-11.5V128c0-47.77 38.72-86.49 86.49-86.49Zm0 17.3c-38.21 0-69.19 30.97-69.19 69.19 0 38.21 30.98 69.19 69.19 69.19s69.19-30.98 69.19-69.19c0-38.22-30.98-69.19-69.19-69.19Z" />
        <path d="m122.61 168.6-26.37-69.39c-.85-2.25 1.34-4.45 3.57-3.59l69.43 26.86c2.85 1.1 2.06 5.37-1 5.37h-40.29v39.75c0 3.09-4.25 3.87-5.34 1Z" />
      </svg>
    ),
  },
  {
    name: "Codex",
    href: "https://github.com/openai/codex",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
        <path d="M9.06 3.34a4.6 4.6 0 0 1 2.29-.31c1 .12 1.89.54 2.67 1.28a.1.1 0 0 0 .08.02 4.55 4.55 0 0 1 3.05.27l.16.08a4.58 4.58 0 0 1 2.19 2.4c.21.51.31 1.04.31 1.6 0 .4-.04.81-.13 1.22a.12.12 0 0 0 .03.11c.59.61.99 1.33 1.18 2.17.29 1.43-.01 2.71-.89 3.86l-.13.16a4.55 4.55 0 0 1-2.2 1.39.12.12 0 0 0-.08.08c-.2.55-.39 1.02-.74 1.49-.9 1.19-2.23 1.85-3.72 1.84a4.57 4.57 0 0 1-3.15-1.3.11.11 0 0 0-.11-.02c-.38.12-.78.14-1.2.14a4.44 4.44 0 0 1-1.95-.46 4.54 4.54 0 0 1-1.61-1.34c-.15-.2-.3-.39-.41-.62a6 6 0 0 1-.37-.96 4.6 4.6 0 0 1-.01-2.3.1.1 0 0 0-.02-.1 4.5 4.5 0 0 1-1.04-1.65 3.9 3.9 0 0 1-.25-1.19c-.04-.54 0-1.07.14-1.6.36-1.08 1.01-1.94 1.97-2.58.21-.14.41-.25.6-.33.21-.09.43-.16.65-.23a.1.1 0 0 0 .06-.07 4.5 4.5 0 0 1 .83-1.61 4.54 4.54 0 0 1 1.84-1.39Zm3.49 10.57a.64.64 0 0 0 0 1.27h3.63a.64.64 0 1 0 0-1.27H12.55ZM8.46 9.23a.64.64 0 0 0-1.1.63l1.27 2.23-1.27 2.13a.64.64 0 1 0 1.1.65l1.45-2.45a.64.64 0 0 0 .01-.64L8.46 9.23Z" />
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
