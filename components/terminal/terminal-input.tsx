import * as React from "react";
import { cn } from "@/lib/utils";

export interface TerminalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TerminalInput = React.forwardRef<HTMLInputElement, TerminalInputProps>(
  ({ className, type, label, id, ...props }, ref) => {
    return (
      <div className="w-full group/item">
        {label && (
          <label
            htmlFor={id}
            className="block font-mono text-xs text-primary opacity-70 mb-1 uppercase tracking-wider"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center border-b border-outline group-focus-within/item:outline-none group-focus-within/item:border-primary! group-focus-within/item:shadow-[0_0_8px_var(--primary)]">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 text-primary opacity-70 font-mono">
            &gt;
          </span>
          <input
            id={id}
            type={type}
            data-od-id="input"
            className={cn(
              "flex h-11 w-full bg-transparent font-mono text-primary flex-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              "px-2 py-2 pl-6 text-sm",
              "placeholder:text-primary/40 placeholder:font-mono",
              "transition-all duration-150",
              className,
            )}
            ref={ref}
            {...props}
          />
          <div className="group-focus-within/item:blink-block animate-blink-block" />
        </div>
      </div>
    );
  },
);
TerminalInput.displayName = "TerminalInput";

export { TerminalInput };
