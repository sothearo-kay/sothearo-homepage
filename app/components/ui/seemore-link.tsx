import Link from "next/link";
import * as Icons from "@/components/icons";

export const SeeMoreLink: React.FC = () => {
  return (
    <Link
      href="/projects"
      className="text-link-text inline-flex items-center gap-4 rounded bg-link-background px-3 py-2 transition-colors duration-150 hover:bg-link-hover"
    >
      <span className="font-mplus font-medium">See more</span>
      <Icons.ChevronRight className="h-4 w-4" />
    </Link>
  );
};
