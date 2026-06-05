"use client";

import { cn } from "@/lib/utils";
import { Chip } from "./chip";

interface TerminalEntryProps {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
}

export function TerminalEntry({ id, title, date, tags, excerpt }: TerminalEntryProps) {
  return (
    <div className="group border border-outline-variant p-4 hover:border-primary-fixed transition-colors cursor-pointer">
      <div className="flex items-start gap-4">
        <span className="text-xs font-mono text-secondary shrink-0 pt-1">
          [{id}]
        </span>
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-heading text-on-surface group-hover:text-primary-fixed transition-colors">
              {title}
            </h3>
          </div>
          <p className="text-sm text-on-surface-variant font-mono">{excerpt}</p>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-outline">
              {date}
            </span>
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
          </div>
        </div>
        <span className="text-primary-fixed opacity-0 group-hover:opacity-100 transition-opacity">
          →
        </span>
      </div>
    </div>
  );
}