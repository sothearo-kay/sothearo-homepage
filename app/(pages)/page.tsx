import { Avatar } from "@/app/components/ui/avatar";
import { ResumeLink } from "@/app/components/ui/resume-link";
import { SocialLinks } from "@/app/components/ui/social-links";
import { ExperienceTabs } from "@/app/components/ui/experience-tabs";
import { Heading } from "../components/ui/heading";
import { RepoCard } from "../components/ui/repo-card";
import { SeeMoreLink } from "../components/ui/seemore-link";
import { fetchRepository } from "../utils/fetch";

import avatarImage from "@/public/images/animate-avatar.jpg";

export default async function Home() {
  const repositories = await Promise.all(
    featureProjects.map((project) => fetchRepository(project)),
  );

  return (
    <div className="space-y-12">
      {/* about me */}
      <div className="flex items-center gap-x-16 max-sm:block">
        <Avatar src={avatarImage} alt="Sothearo's avatar" />

        <div className="-order-1 flex-1">
          <h1 className="mb-5 font-mplus text-4xl font-bold capitalize">
            {bio.title}
          </h1>
          <p>{bio.subtitle}</p>
          <div className="mt-2.5 max-w-prose">
            <p>{bio.description}</p>
          </div>

          <div className="mt-5 flex items-center gap-6">
            {/* resume */}
            <ResumeLink />

            {/* social links */}
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* work / education */}
      <ExperienceTabs />

      {/* feature projects -> see more */}
      <div className="grid space-y-6">
        <Heading>Feature projects</Heading>
        <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
          {repositories.map((repository, idx) => (
            <RepoCard key={idx} repository={repository} />
          ))}
        </div>
        <div className="text-center">
          <SeeMoreLink />
        </div>
      </div>
    </div>
  );
}

const bio = {
  title: "kay sothearo",
  subtitle: "A frontend developer based in Phnom Penh",
  description: `I am passionate about reading, especially graphic novels such as manga and manhwa. I find great joy in coding, embracing the challenge of creating intricate user interfaces, and I thrive on learning through insightful articles.`,
};

const featureProjects = [
  { title: "Netflix Clone", repoId: "netflix-clone" },
  { title: "Checkout Cart", repoId: "checkout-cart" },
];
