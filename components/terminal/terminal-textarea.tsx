import * as React from "react";
import { cn } from "@/lib/utils";

export interface TerminalTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TerminalTextarea = React.forwardRef<HTMLTextAreaElement, TerminalTextareaProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block font-mono text-xs text-primary opacity-70 mb-1 uppercase tracking-wider">
            {label}
          </label>
        )}
        <div className="relative">
          <span className="absolute left-0 top-3 text-primary opacity-70 font-mono">
            &gt;
          </span>
          <textarea
            id={id}
            className={cn(
              "flex min-h-[120px] w-full bg-transparent border-b border-outline font-mono text-primary",
              "px-2 py-2 pl-6 text-sm resize-none",
              "focus:outline-none focus:border-primary focus:shadow-[0_0_8px_var(--primary)]",
              "placeholder:text-primary/40 placeholder:font-mono",
              "transition-all duration-150",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  }
);
TerminalTextarea.displayName = "TerminalTextarea";

export { TerminalTextarea };
