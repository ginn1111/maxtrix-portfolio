import { cn } from "@/lib/utils";

interface DataRowProps {
  label: string;
  value: string | number | React.ReactNode;
  className?: string;
}

export function DataRow({ label, value, className }: DataRowProps) {
  return (
    <div className={cn("flex items-center font-mono text-sm text-primary", className)}>
      <span className="opacity-70 uppercase tracking-wider">{label}</span>
      <span className="flex-1 border-b border-dotted border-outline mx-2 opacity-50" />
      <span className="font-semibold">{value}</span>
    </div>
  );
}
