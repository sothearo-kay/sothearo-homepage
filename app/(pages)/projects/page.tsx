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
