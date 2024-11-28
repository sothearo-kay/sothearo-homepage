import type { Metadata } from "next";
import { Heading } from "@/app/components/ui/heading";
import { ProjectCard } from "@/app/components/ui/project-card";
import { projectList } from "@/app/d/project-list";

const GITHUB_BASE_URL = "https://github.com/hotaroo-dev/";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Project",
  name: "My Projects",
  description: `Take a peek at my exciting range of projects where creativity meets functionality! Whether it's web applications or design concepts, each project reflects my passion for quality and innovation.`,
  url: "https://sothearo.dev/projects",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://sothearo.dev/projects",
  },
};

export const metadata: Metadata = {
  title: "Projects",
  description: `Take a peek at my exciting range of projects where creativity meets functionality! Whether it's web applications or design concepts, each project reflects my passion for quality and innovation. I hope you find it informative.`,
};

export default function Projects() {
  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Heading>Projects</Heading>

      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
        {projectList.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            cover={project.cover}
            link={`${GITHUB_BASE_URL}${project.repoId}`}
          />
        ))}
      </div>
    </div>
  );
}
