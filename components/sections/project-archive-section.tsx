import { ProjectCard } from "@/components/terminal/project-card";

const projects = [
  {
    id: "PRJ-001",
    title: "NEURAL_NET",
    description: "Deep learning framework for real-time data classification and pattern recognition in distributed systems.",
    status: "ACTIVE",
  },
  {
    id: "PRJ-002",
    title: "DATA_MATRIX",
    description: "High-performance data pipeline architecture enabling petabyte-scale ETL operations with sub-second latency.",
    status: "ACTIVE",
  },
  {
    id: "PRJ-003",
    title: "CRYPTEX",
    description: "Next-generation encryption protocol implementing quantum-resistant algorithms for secure communications.",
    status: "DEPLOYED",
  },
  {
    id: "PRJ-004",
    title: "QUANTUM_UI",
    description: "Experimental user interface framework leveraging WebGL and GPGPU for immersive data visualization.",
    status: "ACTIVE",
  },
  {
    id: "PRJ-005",
    title: "SYNAPSE",
    description: "Event-driven messaging system with deterministic delivery guarantees and zero-downtime failover.",
    status: "ACTIVE",
  },
  {
    id: "PRJ-006",
    title: "NEXUS",
    description: "Distributed consensus engine achieving Byzantine fault tolerance with minimal overhead.",
    status: "COMPLETED",
  },
];

export function ProjectArchiveSection() {
  return (
    <div className="min-h-screen bg-background py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="font-mono text-xs text-primary opacity-50 mb-2 tracking-wider">
            // PROJECT ARCHIVE
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary glow mb-4">
            PROJECT ARCHIVE
          </h1>
          <p className="font-mono text-sm text-on-surface-variant opacity-70">
            &gt; {projects.length} projects indexed in database
          </p>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              status={project.status}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-outline pt-8 text-center">
          <div className="font-mono text-xs text-primary opacity-30 animate-flicker">
            [ END OF ARCHIVE ] | TOTAL PROJECTS: {projects.length}
          </div>
        </div>
      </div>
    </div>
  );
}