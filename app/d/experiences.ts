import type { StaticImageData } from "next/image";
import tscLogo from "@/public/logos/tsc.png";
import ruppLogo from "@/public/logos/rupp.png";
import spsLogo from "@/public/logos/sps.png";

interface ExperienceEntry {
  duration: string;
  organization: string;
  logo: string | StaticImageData;
  position?: string;
  description?: string;
  highlights?: string[];
  links?: { url: string; label: string }[]; // Optional link (e.g., final project, company website)
}

export const experiences = [
  {
    name: "Work",
    content: [
      {
        duration: "Sep 2024 - Present",
        organization: "Techo Startup Center",
        logo: tscLogo,
        position: "Frontend Developer",
      },
    ],
  },
  {
    name: "Education",
    content: [
      {
        duration: "Oct 2019 - June 2023",
        organization: "Royal University of Phnom Penh",
        logo: ruppLogo,
        position: "BS of Computer Science",
        links: [
          {
            url: "https://github.com/hotaroo-dev/netflix-clone",
            label: "Final Project",
          },
          {
            url: "https://github.com/hotaroo-dev/tolv",
            label: "2nd Final Project",
          },
        ],
      },
      {
        duration: "Aug 2016 - Sep 2019",
        organization: "Sovannaphumi School",
        logo: spsLogo,
        position: "High School Diploma",
        highlights: ["Enjoy solving hard problems in math"],
      },
    ],
  },
] satisfies { name: string; content: ExperienceEntry[] }[];
