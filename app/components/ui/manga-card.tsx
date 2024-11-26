import Image from "next/image";
import { CardTitle } from "./card-title";

interface MangaCardProps {
  title: string;
  cover: string;
}

export const MangaCard: React.FC<MangaCardProps> = ({ title, cover }) => {
  return (
    <div className="flex flex-col gap-1">
      <Image
        src={cover}
        alt={title}
        width={170}
        height={255}
        loading="eager"
        className="aspect-[2/3] w-full rounded-md object-cover shadow-card"
      />
      <CardTitle>{title}</CardTitle>
    </div>
  );
};
