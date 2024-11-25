import Image, { StaticImageData } from "next/image";
import * as Icons from "@/app/components/icons";
import { ExternalLink } from "./external-link";
import { CardTitle } from "./card-title";

interface ProjectCardProps {
  title: string;
  cover: string | StaticImageData;
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  cover,
  link,
}) => {
  return (
    <ExternalLink href={link} className="flex">
      <div className="group flex-1 space-y-2 rounded-lg border border-common-border p-4">
        <Image
          src={cover}
          alt={title}
          placeholder="blur"
          className="aspect-video w-full rounded shadow-card"
        />
        <div className="transition-colors duration-150 flex-between group-hover:text-card-link-hover">
          <CardTitle>{title}</CardTitle>
          <Icons.ArrowRightUp className="mr-2.5 h-4 w-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
        </div>
      </div>
    </ExternalLink>
  );
};
