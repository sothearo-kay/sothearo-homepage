import type { Metadata } from "next";
import { Heading } from "@/components/ui/heading";

export const metadata: Metadata = {
  title: "Manga",
};

export default function Manga() {
  return (
    <div>
      <Heading>Manga</Heading>
    </div>
  );
}
