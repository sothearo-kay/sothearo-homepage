"use client";

import Image, { ImageLoaderProps } from "next/image";

interface MangaCardProps {
  title: string;
  cover: string;
}

const mangaDexImageLoader = ({ src }: ImageLoaderProps) => {
  return `https://mangadex.org/covers/${src}`;
};

export const MangaCard: React.FC<MangaCardProps> = ({ title, cover }) => {
  return (
    <div className="flex flex-col gap-1 odd:ml-auto even:mr-auto">
      <Image
        loader={mangaDexImageLoader}
        src={cover}
        alt={title}
        width={200}
        height={300}
        priority
        className="aspect-[2/3] rounded-md"
        style={{
          boxShadow: `rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px`,
        }}
      />
      <h3 className="font-mplus font-semibold capitalize">{title}</h3>
    </div>
  );
};
