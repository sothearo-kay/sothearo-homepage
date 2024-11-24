import Link from "next/link";
import * as Icons from "@/components/icons";
import { Paragraph } from "@/components/ui/paragraph";
import { ResumeLink } from "@/components/ui/resume-link";
import { SocialLinks } from "@/components/ui/social-links";
import { ExperienceTabs } from "@/components/ui/experience-tabs";
import { Avatar } from "@/components/ui/avatar";
import { Heading } from "@/components/ui/heading";
import { RepoCard } from "@/components/ui/repo-card";
import { fetchRepository } from "@/utils/fetch";

export default async function Home() {
  const repositories = await Promise.all(
    featureProjects.map((project) => fetchRepository(project)),
  );

  return (
    <div className="space-y-16">
      {/* about me */}
      <div className="flex items-center gap-16 max-sm:flex-col">
        <div className="flex-1 max-sm:order-1">
          <h1 className="mb-5 font-mplus text-4xl font-bold capitalize">
            {bio.title}
          </h1>
          <p>{bio.subtitle}</p>
          <Paragraph className="mt-2.5">{bio.description}</Paragraph>

          <div className="mt-5 flex items-center gap-6">
            {/* resume */}
            <ResumeLink />

            {/* social links */}
            <SocialLinks />
          </div>
        </div>

        <Avatar src="/avatar.jpg" alt="Sothearo's avatar" />
      </div>

      {/* work / education */}
      <ExperienceTabs />

      {/* projects -> see more */}
      <div className="grid space-y-6">
        <Heading>Feature projects</Heading>
        <div className="grid grid-cols-2 gap-6">
          {repositories.map((repository, idx) => (
            <RepoCard key={idx} repository={repository} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/projects"
            className="text-link-text inline-flex items-center gap-4 rounded bg-link-background px-3 py-2 transition-colors duration-150 hover:bg-link-hover"
          >
            <span className="font-mplus font-medium">See more</span>
            <Icons.ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

const bio = {
  title: "kay sothearo",
  subtitle: "A frontend developer based in Phnom Penh 🇰🇭",
  description: `I am passionate about reading, especially graphic novels such as manga and manhwa. I find great joy in coding, embracing the challenge of creating intricate user interfaces, and I thrive on learning through insightful articles.`,
};

const featureProjects = [
  { key: "netflix-clone", title: "Netflix Clone" },
  { key: "checkout-cart", title: "Checkout Cart" },
];
