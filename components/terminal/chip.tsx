import { cn } from "@/lib/utils";

interface ChipProps {
  children: React.ReactNode;
  variant?: "primary" | "warning" | "error";
  className?: string;
}

export function Chip({ children, variant = "primary", className }: ChipProps) {
  const variantStyles = {
    primary: "text-primary",
    warning: "text-secondary",
    error: "text-red-500",
  };

  return (
    <span
      className={cn(
        "font-mono text-xs tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      [ {children} ]
    </span>
  );
}
