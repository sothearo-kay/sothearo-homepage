import type { Metadata } from "next";
import { Heading } from "@/components/ui/heading";
import { MangaCard } from "@/components/ui/manga-card";

export const metadata: Metadata = {
  title: "Manga",
};

export default function Manga() {
  return (
    <div className="space-y-12">
      <Heading>Manga</Heading>

      <div className="grid grid-cols-2 gap-12">
        {mangaList.map((manga, idx) => (
          <MangaCard key={idx} title={manga.title} cover={manga.cover} />
        ))}
      </div>
    </div>
  );
}

const mangaList = [
  {
    title: "sakamoto days",
    cover: `c3a410f3-6c1c-454c-93eb-8b995fd4cf56/189e1687-f404-47e8-9a10-6982cf41d5b8.png.512.jpg`,
  },
  {
    title: "killer peter",
    cover: `a3db9212-7e87-44ea-8264-23f914671444/f7d20894-993f-4d8c-97b5-ca896203dae2.jpg.512.jpg`,
  },
  {
    title: "wind breaker",
    cover: `c1c408f6-3dec-4d62-b6b3-b57e615d933c/8b279428-fa32-49b2-bd51-4f8d4db7d420.jpg.512.jpg`,
  },
  {
    title: "blue lock",
    cover: `4141c5dc-c525-4df5-afd7-cc7d192a832f/75d972e8-6033-4c11-82c2-06610c21643e.jpg.512.jpg`,
  },
];
