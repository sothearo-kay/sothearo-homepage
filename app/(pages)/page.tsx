import { ResumeLink } from "@/components/ui/resume-link";
import { SocialLinks } from "@/components/ui/social-links";
import { ExperienceTabs } from "@/components/ui/experience-tabs";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* about me */}
      <div className="flex items-center">
        <div className="flex-1">
          <h1></h1>
          <p></p>
          <div className="flex items-center gap-6">
            {/* resume */}
            <ResumeLink />

            {/* social links */}
            <SocialLinks />
          </div>
        </div>

        <div className="h-28 w-28 rounded-lg bg-gray-200 dark:bg-gray-800"></div>
      </div>

      {/* work / education */}
      <ExperienceTabs />

      {/* projects -> see more */}
      <div className="h-[200px] bg-gray-200 dark:bg-gray-800"></div>
    </div>
  );
}
