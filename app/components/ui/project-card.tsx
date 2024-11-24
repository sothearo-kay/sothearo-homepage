import Image from "next/image";
import * as Icons from "@/components/icons";
import { ExternalLink } from "./external-link";
import { CardTitle } from "./card-title";

interface ProjectCardProps {
  title: string;
  cover: string;
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  cover,
  link,
}) => {
  return (
    <ExternalLink href={link} className="flex">
      <div className="border-common-border group flex-1 space-y-2 rounded-lg border p-4">
        <Image
          src={cover}
          alt={title}
          width={600}
          height={400}
          priority
          className="shadow-card aspect-video w-full rounded"
        />
        <div className="flex-between group-hover:text-card-link-hover transition-colors duration-150">
          <CardTitle>{title}</CardTitle>
          <Icons.ArrowRightUp className="mr-2.5 h-4 w-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
        </div>
      </div>
    </ExternalLink>
  );
};
