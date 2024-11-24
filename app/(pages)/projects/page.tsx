import type { Metadata } from "next";
import { Heading } from "@/components/ui/heading";
import { ProjectCard } from "@/components/ui/project-card";

const COVER_BASE_PATH = "/images/projects/";
const GITHUB_BASE_URL = "https://github.com/hotaroo-dev/";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <div className="space-y-12">
      <Heading>Projects</Heading>
      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
        {projectList.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            cover={`${COVER_BASE_PATH}${project.repoId}.jpg`}
            link={`${GITHUB_BASE_URL}${project.repoId}`}
          />
        ))}
      </div>
    </div>
  );
}

const projectList = [
  {
    title: "Netflix Clone",
    repoId: "netflix-clone",
  },
  {
    title: "Tolv",
    repoId: "tolv",
  },
  {
    title: "Checkout Cart",
    repoId: "checkout-cart",
  },
  {
    title: "Markdown Editor",
    repoId: "markdown-editor",
  },
];
