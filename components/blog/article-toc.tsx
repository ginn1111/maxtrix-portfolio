"use client";

import { useEffect, useState } from "react";
import { ScrambleText } from "../ui/scramble-text";

type TocItem = { id: string; label: string };

export function ArticleToc({
  items,
  mobile = false,
}: {
  items: TocItem[];
  mobile?: boolean;
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];
    const onScroll = () => {
      const current = headings.reduce((selected, heading) => {
        return heading.getBoundingClientRect().top <= 140
          ? heading.id
          : selected;
      }, items[0]?.id ?? "");
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const links = (
    <ul className="border-l border-outline-variant">
      {items.map((item) => (
        <li key={`${item.id}-${item.label}`}>
          <a
            href={`#${item.id}`}
            className={`block border-l px-3 py-1.5 font-mono text-xs uppercase transition-colors ${active === item.id ? "-ml-px border-primary-fixed-dim bg-primary-muted/10 text-primary-fixed-dim" : "border-transparent text-on-surface-variant hover:border-primary-dim hover:text-on-surface"}`}
          >
            <ScrambleText text={item.label} />
          </a>
        </li>
      ))}
    </ul>
  );

  if (mobile) {
    return (
      <details className="my-6 lg:hidden">
        <summary className="cursor-pointer border border-outline-variant bg-surface-container-low p-3 font-mono text-xs uppercase text-on-surface">
          ON_THIS_PAGE
        </summary>
        {links}
      </details>
    );
  }

  return (
    <aside
      className="hidden lg:sticky lg:top-24 lg:block lg:self-start"
      aria-label="Table of contents"
    >
      <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-primary-fixed-dim">
        ON_THIS_PAGE
      </h2>
      {links}
    </aside>
  );
}
