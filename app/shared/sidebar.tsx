"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TerminalButton } from "@/components/terminal/terminal-button";

type NavItem = {
  href: string;
  label: string;
  icon: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "ROOT_ACCESS", icon: "terminal" },
  { href: "/projects", label: "DATA_NODES", icon: "account_tree" },
  { href: "/specs", label: "SYS_DIAGNOSTICS", icon: "memory" },
  { href: "/contact", label: "ENCRYPT_MSG", icon: "lock" },
];

const FOOTER_LINKS: NavItem[] = [
  { href: "/", label: "LOGOUT", icon: "logout" },
  { href: "/", label: "HELP", icon: "help" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full z-40 pt-20 flex flex-col border-r border-outline-variant bg-background w-64 hidden md:flex">
      <div className="px-6 py-8 border-b border-outline-variant mb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 border border-primary-fixed-dim p-0.5">
            <div className="w-full h-full bg-primary-fixed-dim/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary-fixed-dim text-sm">
                person
              </span>
            </div>
          </div>
          <div>
            <p className="font-mono text-code-sm uppercase text-primary-fixed-dim">
              OPERATOR_01
            </p>
            <p className="text-[10px] text-primary-fixed-dim opacity-70 animate-pulse">
              SECURE_SESSION_ACTIVE
            </p>
          </div>
        </div>
      </div>
      <nav className="flex-1 flex flex-col">
        <Link
          href="/"
          className={`px-4 py-3 flex items-center gap-3 font-mono text-code-sm uppercase transition-all ${
            pathname === "/"
              ? "bg-primary-container text-on-primary-container border-l-4 border-primary-fixed-dim"
              : "text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container"
          }`}
        >
          <span className="material-symbols-outlined">terminal</span>
          ROOT_ACCESS
        </Link>
        <Link
          href="/projects"
          className={`px-4 py-3 flex items-center gap-3 font-mono text-code-sm uppercase transition-all ${
            pathname === "/projects"
              ? "bg-primary-container text-on-primary-container border-l-4 border-primary-fixed-dim"
              : "text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container"
          }`}
        >
          <span className="material-symbols-outlined">account_tree</span>
          DATA_NODES
        </Link>
        <Link
          href="/specs"
          className={`px-4 py-3 flex items-center gap-3 font-mono text-code-sm uppercase transition-all ${
            pathname === "/specs"
              ? "bg-primary-container text-on-primary-container border-l-4 border-primary-fixed-dim"
              : "text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container"
          }`}
        >
          <span className="material-symbols-outlined">memory</span>
          SYS_DIAGNOSTICS
        </Link>
        <Link
          href="/contact"
          className={`px-4 py-3 flex items-center gap-3 font-mono text-code-sm uppercase transition-all ${
            pathname === "/contact"
              ? "bg-primary-container text-on-primary-container border-l-4 border-primary-fixed-dim"
              : "text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container"
          }`}
        >
          <span className="material-symbols-outlined">lock</span>
          ENCRYPT_MSG
        </Link>
      </nav>
      <div className="p-4">
        <TerminalButton className="w-full text-sm py-3">
          [INITIATE_PING]_
        </TerminalButton>
      </div>
      <div className="mt-auto border-t border-outline-variant p-4 flex flex-col gap-2">
        <Link
          href="/"
          className="flex items-center gap-3 text-on-surface-variant hover:text-primary-fixed font-mono text-code-sm uppercase"
        >
          <span className="material-symbols-outlined text-[18px]">logout</span>
          LOGOUT
        </Link>
        <Link
          href="/"
          className="flex items-center gap-3 text-on-surface-variant hover:text-primary-fixed font-mono text-code-sm uppercase"
        >
          <span className="material-symbols-outlined text-[18px]">help</span>
          HELP
        </Link>
      </div>
    </aside>
  );
}

