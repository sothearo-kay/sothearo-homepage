import type { Metadata } from "next";
import { Heading } from "@/app/components/ui/heading";
import { MangaCard } from "@/app/components/ui/manga-card";
import { mangaList } from "@/app/d/manga";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Manga",
  description: `Dive into the world of manga that inspires my creativity. This page showcases the manga I’ve read and what I've learned from it.`,
  genre: "Manga",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://sothearo.dev/manga",
  },
};

export const metadata: Metadata = {
  title: "Manga",
  description: `Dive into the world of manga that inspires my creativity. This page showcases the manga I’ve read and what I've learned from it.`,
};

export default function Manga() {
  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Heading>Manga</Heading>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6">
        {mangaList.map((manga, idx) => (
          <MangaCard
            key={idx}
            title={manga.title}
            cover={`https://mangadex.org/covers/${manga.coverId}`}
          />
        ))}
      </div>
    </div>
  );
}
