"use client";

export const FILTERS = ["all", "schema", "audit", "css", "ops"] as const;

export type Filter = (typeof FILTERS)[number];

interface BlogFilterProps {
  activeFilter: Filter;
  onFilterChange: (filter: Filter) => void;
}

export function BlogFilter({
  activeFilter,
  onFilterChange,
}: BlogFilterProps) {
  return (
    <div className="mx-5 mb-3 flex flex-wrap items-center gap-2 border border-outline-variant bg-surface-container-low p-3 font-mono">
      <span className="mr-1 text-[10px] uppercase tracking-[0.08em] text-on-surface-variant">
        TECH_STACK:
      </span>
      {FILTERS.map((filter) => {
        const isActive = activeFilter === filter;
        return (
          <button
            key={filter}
            type="button"
            data-od-id="button"
            aria-pressed={isActive}
            onClick={() => onFilterChange(filter)}
            className={`cursor-pointer border px-2.5 py-1.5 text-[10px] uppercase tracking-[0.04em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-fixed-dim ${
              isActive
                ? "border-primary-dim text-primary-fixed-dim outline outline-1 outline-offset-2 outline-primary-fixed-dim"
                : "border-outline-variant bg-background text-on-surface-variant hover:border-primary-dim hover:bg-primary-container hover:text-on-primary-container"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
