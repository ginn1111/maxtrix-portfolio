"use client";

import { ScrambleText } from "@/components/ui/scramble-text";
import Link from "next/link";
import { NAV_ITEMS } from "./sidebar";
import { usePathname } from "next/navigation";
import { DigitalFlicker } from "@/components/ui/glitch-text";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 w-full z-50 px-margin py-unit border-b border-outline-variant bg-background/90 backdrop-blur-sm">
      <div className="container flex justify-center items-center">
        <nav className="flex md:hidden gap-gutter items-center justify-center min-h-12">
          <Link
            href="/"
            className={`font-heading uppercase tracking-tighter transition-colors duration-200 pl-0.5 pr-1 text-center text-primary-fixed-dim`}
          >
            <DigitalFlicker>GIN</DigitalFlicker>
          </Link>
          {NAV_ITEMS.map((nav) => (
            <Link
              key={nav.label}
              href={nav.href}
              className={`font-heading lowercase tracking-tighter transition-colors duration-200 px-0.5 md:px-4 md:min-w-25 min-w-18 text-center ${
                pathname === nav.href
                  ? "text-primary-fixed! border-b-primary-fixed border-b"
                  : "text-on-surface-variant hover:text-primary-fixed border-transparent"
              }`}
            >
              <ScrambleText
                text={nav.label}
                className="text-xs md:text-headline-md"
              />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
