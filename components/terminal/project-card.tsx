import { Card, CardContent } from "@/components/ui/card";
import { Chip } from "./chip";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  status: string;
  className?: string;
}

export function ProjectCard({ id, title, description, status, className }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "bg-surface border-primary/50 border",
        "hover:bg-primary hover:border-primary",
        "hover:text-black transition-all duration-150 cursor-pointer",
        "relative",
        className
      )}
    >
      <CardContent className="p-4 font-mono">
        {/* Crosshair corners */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/50" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/50" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/50" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/50" />

        <div className="mb-2">
          <span className="text-xs opacity-70">ID: {id}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2 uppercase">{title}</h3>
        <p className="text-xs opacity-70 mb-3">{description}</p>
        <div>
          <Chip variant="primary">STATUS: {status}</Chip>
        </div>
      </CardContent>
    </Card>
  );
}
