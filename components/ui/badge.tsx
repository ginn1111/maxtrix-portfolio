import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        primary: "border-transparent bg-primary text-primary-foreground",
        signal:
          "border-transparent bg-[var(--c-success)] text-[var(--on-action)]",
        live: "border-transparent bg-[var(--c-success)] text-[var(--on-action)]",
        warning:
          "border-transparent bg-[var(--c-warning)] text-[var(--on-action)]",
        warn: "border-transparent bg-[var(--c-warning)] text-[var(--on-action)]",
        note: "border border-outline-variant bg-surface-container text-on-surface-variant",
        outline: "border border-outline text-on-surface",
        tech: "font-mono text-code-sm px-4 py-2 border border-primary-dim bg-surface-container-low text-primary-fixed-dim hover:border-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <span
      data-od-id="badge"
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    >
      [{children}]
    </span>
  );
}

export { Badge, badgeVariants };
