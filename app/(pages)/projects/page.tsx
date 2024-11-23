import type { Metadata } from "next";
import { Heading } from "@/components/ui/heading";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  return (
    <div>
      <Heading>Projects</Heading>
    </div>
  );
}

const projectList = [
  {
    title: "Netflix Clone",
    cover: "/images/projects/netflix-clone.jpg",
    link: "https://github.com/hotaroo-dev/netflix-clone",
  },
  {
    title: "Tolv",
    cover: "/images/projects/tolv.jpg",
    link: "https://github.com/hotaroo-dev/tolv",
  },
];
