import Link from "next/link";
import * as Icons from "@/components/icons";

export const ResumeLink: React.FC = () => {
  return (
    <Link
      href="/resume.pdf"
      target="_blank"
      className="hover:bg-common-bg border-common-border gap-2 rounded border px-3 py-2 transition-[background-color] duration-150 flex-center"
      download
    >
      <span className="font-mplus font-medium">Resume</span>
      <Icons.Download className="h-6 w-6" />
    </Link>
  );
};
