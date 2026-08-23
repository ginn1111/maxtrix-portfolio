"use client";

import { useState } from "react";

export function CodeCopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={copyCode}
      className="ml-auto cursor-pointer border border-outline-variant bg-surface-container-low px-2.5 py-1 font-mono text-[11px] uppercase text-on-surface-variant transition-colors hover:border-primary hover:bg-primary-container hover:text-on-primary-container"
      aria-live="polite"
    >
      {copied ? "COPIED" : "COPY"}
    </button>
  );
}
