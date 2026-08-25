import { cn } from "@/lib/utils";

interface ChipProps {
  children: React.ReactNode;
  variant?: "primary" | "warning" | "error" | "public" | "internal";
  className?: string;
}

export function Chip({ children, variant = "primary", className }: ChipProps) {
  const variantStyles = {
    primary: "text-primary",
    warning: "text-secondary",
    error: "text-red-500",
    public:
      "inline-flex items-center gap-1 border border-[var(--public-border)] bg-[var(--public-bg)] px-1.5 py-0.5 text-[8px] font-mono uppercase text-[var(--public-fg)]",
    internal:
      "inline-flex items-center gap-1 border border-[var(--internal-border)] bg-[var(--internal-bg)] px-1.5 py-0.5 text-[8px] font-mono uppercase text-[var(--internal-fg)]",
  };

  const isVisibility = variant === "public" || variant === "internal";

  return (
    <span
      className={cn(
        isVisibility ? "" : "font-mono text-xs tracking-wider",
        variantStyles[variant],
        className,
      )}
    >
      {isVisibility ? (
        <>
          {variant === "public" ? "●" : "◼"} {children}
        </>
      ) : (
        `[${children}]`
      )}
    </span>
  );
}
