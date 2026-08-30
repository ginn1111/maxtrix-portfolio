import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TerminalButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "variant"> {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}

export function TerminalButton({
  className,
  children,
  variant = "primary",
  ...props
}: TerminalButtonProps) {
  const styles = {
    primary:
      "font-mono uppercase tracking-wider text-on-action bg-primary border border-primary cursor-pointer rounded-none",
    ghost:
      "font-mono uppercase tracking-wider text-primary border border-primary bg-transparent cursor-pointer rounded-none",
  }[variant];

  return (
    <Button
      className={cn(
        styles,
        "hover:shadow-[0_0_8px_var(--c-action)] active:opacity-80",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "transition-all duration-150",
        className,
      )}
      {...props}
    >
      {children}
      <span className="animate-pulse ml-1">_</span>
    </Button>
  );
}
