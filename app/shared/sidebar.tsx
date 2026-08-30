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

export const NAV_ITEMS: NavItem[] = [
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
    href: "/hub",
    label: "HUB",
    icon: "menu_book",
    scrambleText: "DATA_LOGS",
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
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`px-4 py-3 flex items-center gap-3 font-mono text-code-sm uppercase transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
        isActive
          ? "bg-primary-container text-on-primary-container border-l-4 border-primary-fixed-dim"
          : "text-on-surface-variant hover:text-primary-fixed hover:bg-surface-container"
      }`}
    >
      <span className="hidden">{icon}</span>
      <svg
        className="size-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        aria-hidden="true"
      >
        {icon === "terminal" && (
          <path d="M4 17l6-5-6-5M12 19h8" />
        )}
        {icon === "work_history" && (
          <path d="M3 5h18v14H3zM3 9h18M7 13h4" />
        )}
        {icon === "account_tree" && (
          <path d="M6 3h12v6H6zM4 15h16v6H4zM12 9v6" />
        )}
        {icon === "format_quote" && (
          <path d="M10 7H6v6h4v4M18 7h-4v6h4v4" />
        )}
        {icon === "menu_book" && (
          <path d="M4 4h7v16H4zM13 4h7v16h-7zM4 8h7M4 12h7M13 8h7M13 12h7" />
        )}
        {icon === "lock" && (
          <path d="M7 11V7a5 5 0 0 1 10 0v4h-2V7a3 3 0 0 0-6 0v4zM5 11h14v9H5z" />
        )}
      </svg>
      <ScrambleText
        className="hidden lg:inline"
        text={label}
        scrambleText={scrambleText}
      />
    </Link>
  );
}

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full z-40 flex-col border-r border-outline-variant bg-background w-[var(--rail)] hidden md:flex rounded-none">
      <div className="lg:px-6 lg:py-7 border-b border-outline-variant mb-4">
        <div className="flex items-center gap-3 justify-center lg:py-0 py-3">
          <div>
            <Link
              href="/"
              className="font-heading text-headline-lg font-bold text-primary-fixed-dim drop-shadow-[0_0_8px_var(--c-success)]"
            >
              <DigitalFlicker>
                <ScrambleText
                  className="hidden lg:inline"
                  text="matrGINx.v2026"
                  isHover={false}
                />
                <ScrambleText
                  className="lg:hidden"
                  text="GIN"
                  isHover={false}
                />
              </DigitalFlicker>
            </Link>
            <p className="text-[10px] text-primary-fixed-dim opacity-70 animate-pulse hidden lg:inline">
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
