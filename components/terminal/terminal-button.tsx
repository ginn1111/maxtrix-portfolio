import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TerminalButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
}

export function TerminalButton({ className, children, ...props }: TerminalButtonProps) {
  return (
    <Button
      className={cn(
        "font-mono uppercase tracking-wider text-primary border border-primary bg-transparent",
        "hover:bg-primary hover:text-black hover:shadow-[0_0_8px_var(--primary)]",
        "active:bg-primary/80 active:text-black",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "transition-all duration-150",
        className
      )}
      {...props}
    >
      {children}
      <span className="animate-pulse ml-1">_</span>
    </Button>
  );
}
