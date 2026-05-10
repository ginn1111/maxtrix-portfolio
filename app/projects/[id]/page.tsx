import { AppLayout } from "@/app/shared";
import { ProjectDetailSection } from "@/components/sections/project-detail-section";
import { GlitchTransition } from "@/components/ui/glitch-transition";

export default function ProjectDetailPage() {
  return (
    <AppLayout>
      <GlitchTransition>
        <ProjectDetailSection />
      </GlitchTransition>
    </AppLayout>
  );
}