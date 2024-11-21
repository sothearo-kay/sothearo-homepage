import { ResumeLink } from "@/components/ui/resume-link";
import { SocialLinks } from "@/components/ui/social-links";
import { ExperienceTabs } from "@/components/ui/experience-tabs";

export default function Home() {
  return (
    <div>
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
      <div className="mt-12">
        <ExperienceTabs />
      </div>

      {/* projects -> see more */}
      <div></div>
    </div>
  );
}
