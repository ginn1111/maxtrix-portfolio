"use client";

import { DigitalFlicker } from "@/components/ui/glitch-text";
import { ScrambleText } from "@/components/ui/scramble-text";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
  icon: string;
  scrambleText: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    href: "/specs",
    label: "ABOUT_ME",
    icon: "terminal",
    scrambleText: "ROOT_ACCESS",
  },
  {
    href: "/experiences",
    label: "EXPERIENCES",
    icon: "work_history",
    scrambleText: "CAREER_LOG",
  },
  {
    href: "/projects",
    label: "PROJECTS",
    icon: "account_tree",
    scrambleText: "DATA_NODES",
  },
  {
    href: "/testimonials",
    label: "TESTIMONIALS",
    icon: "format_quote",
    scrambleText: "FEEDBACK_DATA",
  },
  {
    href: "/contact",
    label: "CONTACT",
    icon: "lock",
    scrambleText: "ENCRYPT_MSG",
  },
];

function NavItem({ href, label, icon, scrambleText }: NavItem) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-3 flex items-center gap-3 font-mono text-code-sm uppercase transition-all ${
        isActive
          ? "bg-primary-container text-on-primary-container border-l-4 border-primary-fixed-dim"
          : "text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container"
      }`}
    >
      <span className="material-symbols-outlined">{icon}</span>
      <ScrambleText text={label} scrambleText={scrambleText} />
    </Link>
  );
}

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full z-40 flex flex-col border-r border-outline-variant bg-background w-64 hidden md:flex">
      <div className="px-6 py-8 border-b border-outline-variant mb-4">
        <div className="flex items-center gap-3 mb-2">
          <div>
            <Link
              href="/"
              className="font-heading text-headline-lg font-bold text-primary-fixed-dim drop-shadow-[0_0_8px_rgba(0,230,57,0.8)]"
            >
              <DigitalFlicker>
                <ScrambleText text="GIN_OS_v3.0.2026" isHover={false} />
              </DigitalFlicker>
            </Link>
            <p className="text-[10px] text-primary-fixed-dim opacity-70 animate-pulse">
              SECURE_SESSION_ACTIVE
            </p>
          </div>
        </div>
      </div>
      <nav className="flex-1 flex flex-col">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </nav>
    </aside>
  );
}
