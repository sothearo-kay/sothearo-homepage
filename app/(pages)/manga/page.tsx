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
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6">
        {mangaList.map((manga, idx) => (
          <MangaCard key={idx} {...manga} />
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
  {
    title: "solo leveling",
    cover: `32d76d19-8a05-4db0-9fc2-e0b0648fe9d0/e90bdc47-c8b9-4df7-b2c0-17641b645ee1.jpg.512.jpg`,
  },
  {
    title: "mercenary enrollment",
    cover: `9ecd208c-c592-4462-9f57-4d7d4a9f956f/75e7fac6-c9f4-43ce-ae0e-cbf06f28f99b.jpg.512.jpg`,
  },
  {
    title: "the greatest estate developer",
    cover: `d7f56ace-cd30-48b9-8b64-afeca0077fca/c2613a1e-426f-4ee3-a6f7-caf003324dc7.jpg.512.jpg`,
  },
  {
    title: "the fragrant flower blooms with dignity",
    cover: `418791c0-35cf-4f87-936b-acd9cddf0989/d070482f-ba73-4f79-b42d-2c07119c5218.jpg.512.jpg`,
  },
];
