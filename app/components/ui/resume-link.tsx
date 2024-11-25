import Link from "next/link";
import * as Icons from "@/app/components/icons";

export const ResumeLink: React.FC = () => {
  return (
    <Link
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download resume"
      className="gap-2 rounded border border-common-border px-3 py-2 transition-[background-color] duration-150 flex-center hover:bg-common-bg"
    >
      <span className="font-mplus font-medium">Resume</span>
      <Icons.Download className="h-6 w-6" />
    </Link>
  );
};
