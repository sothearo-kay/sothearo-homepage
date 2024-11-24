"use client";

import Image, { ImageLoaderProps } from "next/image";
import { CardTitle } from "./card-title";

interface MangaCardProps {
  title: string;
  cover: string;
}

const mangaDexImageLoader = ({ src }: ImageLoaderProps) => {
  return `https://mangadex.org/covers/${src}`;
};

export const MangaCard: React.FC<MangaCardProps> = ({ title, cover }) => {
  return (
    <div className="flex flex-col gap-1">
      <Image
        loader={mangaDexImageLoader}
        src={cover}
        alt={title}
        width={180}
        height={270}
        priority
        className="shadow-card aspect-[2/3] w-full rounded-md object-cover"
      />
      <CardTitle>{title}</CardTitle>
    </div>
  );
};
