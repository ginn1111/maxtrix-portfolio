import { ProjectDetailSection } from "@/components/sections/project-detail-section";
import { GlitchTransition } from "@/components/ui/glitch-transition";

export default function ProjectDetailPage() {
  return (
    <GlitchTransition>
      <ProjectDetailSection />
    </GlitchTransition>
  );
}