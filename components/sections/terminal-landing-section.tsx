"use client";

import Link from "next/link";
import { TerminalButton } from "@/components/terminal/terminal-button";

export function TerminalLandingSection() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-primary" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-primary" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-primary" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-primary" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-primary" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        <div className="mb-4 font-mono text-xs text-primary opacity-50 tracking-[0.3em] animate-flicker">
          MATRIX_OS v2.4
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-heading text-primary glow mb-4 tracking-tight">
          TERMINAL
        </h1>
        <h2 className="text-3xl md:text-5xl font-heading text-primary/80 glow mb-8 tracking-tight">
          LANDING
        </h2>

        <p className="font-mono text-sm text-on-surface-variant mb-12 max-w-md mx-auto opacity-70">
          &gt; Secure access point initialized.<br />
          &gt; awaiting operator authentication...
        </p>

        <div className="mb-8">
          <TerminalButton
            size="lg"
            className="px-8 py-4 text-lg"
            onClick={() => alert("Boot sequence initiated...")}
          >
            [ INITIALIZE ]
          </TerminalButton>
        </div>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <Link href="/specs" className="font-mono text-sm text-primary/70 hover:text-primary transition-colors">
            &gt; SPECS
          </Link>
          <Link href="/projects" className="font-mono text-sm text-primary/70 hover:text-primary transition-colors">
            &gt; PROJECTS
          </Link>
          <Link href="/contact" className="font-mono text-sm text-primary/70 hover:text-primary transition-colors">
            &gt; CONTACT
          </Link>
        </div>

        <div className="font-mono text-xs text-primary opacity-30 animate-flicker mt-8">
          SCANLINES ACTIVE | CRT MODE
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 font-mono text-xs text-primary opacity-20">
        <div>x: 0000 y: 0000</div>
        <div>zoom: 100%</div>
      </div>
      <div className="absolute top-8 right-8 font-mono text-xs text-primary opacity-20 text-right">
        <div>status: ONLINE</div>
        <div>sync: OK</div>
      </div>
      <div className="absolute bottom-8 left-8 font-mono text-xs text-primary opacity-20">
        <div>mem: 64.2 GB</div>
        <div>cpu: 12%</div>
      </div>
      <div className="absolute bottom-8 right-8 font-mono text-xs text-primary opacity-20 text-right">
        <div>uptime: 847: 23:41</div>
        <div>threats: 0</div>
      </div>
    </div>
  );
}