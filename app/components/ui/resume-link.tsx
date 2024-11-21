import Link from "next/link";
import * as Icons from "@/components/icons";

export const ResumeLink: React.FC = () => {
  return (
    <Link
      href="/resume.pdf"
      target="_blank"
      className="gap-2 rounded border border-gray-300 px-3 py-2 transition-[background-color] duration-150 flex-center hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
      download
    >
      <span>Resume</span>
      <Icons.Download className="h-6 w-6" />
    </Link>
  );
};
