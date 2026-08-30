import { ProjectCard } from "@/components/terminal/project-card";
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  ProjectCard,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
