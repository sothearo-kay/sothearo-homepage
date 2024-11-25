import type { Metadata } from "next";
import { Heading } from "@/app/components/ui/heading";
import { ProjectCard } from "@/app/components/ui/project-card";

import netflixCover from "@/public/images/projects/netflix-clone.jpg";
import tolvCover from "@/public/images/projects/tolv.jpg";
import checkoutCartCover from "@/public/images/projects/checkout-cart.jpg";
import markdownEditorCover from "@/public/images/projects/markdown-editor.jpg";

const GITHUB_BASE_URL = "https://github.com/hotaroo-dev/";

export const metadata: Metadata = {
  title: "Projects",
  description: `Take a peek at my exciting range of projects where creativity meets functionality! Whether it's web applications or design concepts, each project reflects my passion for quality and innovation. I hope you find it informative.`,
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
            cover={project.cover}
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
    cover: netflixCover,
    repoId: "netflix-clone",
  },
  {
    title: "Tolv",
    cover: tolvCover,
    repoId: "tolv",
  },
  {
    title: "Checkout Cart",
    cover: checkoutCartCover,
    repoId: "checkout-cart",
  },
  {
    title: "Markdown Editor",
    cover: markdownEditorCover,
    repoId: "markdown-editor",
  },
];
