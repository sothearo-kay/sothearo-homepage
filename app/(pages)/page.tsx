import { ResumeLink } from "@/components/ui/resume-link";
import { SocialLinks } from "@/components/ui/social-links";
import { ExperienceTabs } from "@/components/ui/experience-tabs";
import { Avatar } from "@/components/ui/avatar";
import { Heading } from "@/components/ui/heading";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* about me */}
      <div className="flex items-center gap-16 max-sm:flex-col">
        <div className="flex-1 max-sm:order-1">
          <h1 className="mb-5 font-mplus text-4xl font-bold">Kay Sothearo</h1>
          <p>A frontend developer based in Phnom Penh 🇰🇭</p>
          <p className="mt-2.5 text-balance">
            I am passionate about reading, especially graphic novels such as
            manga and manhwa. I find great joy in coding, embracing the
            challenge of creating intricate user interfaces, and I thrive on
            learning through insightful articles.
          </p>
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
      <div className="">
        <Heading>Feature projects</Heading>
      </div>
    </div>
  );
}
