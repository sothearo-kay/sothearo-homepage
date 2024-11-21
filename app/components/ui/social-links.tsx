import Link from "next/link";
import * as Icons from "@/components/icons";

export const SocialLinks: React.FC = () => {
  return (
    <ul className="flex items-center gap-6">
      {socialLinks.map((link, idx) => (
        <li key={idx}>
          <Link href={link.url} target="_blank" rel="noreferrer">
            <span className="block rounded-full border border-dashed border-transparent p-2 transition-[border-color] duration-150 hover:border-foreground">
              {link.icon}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const socialLinks = [
  {
    url: "https://github.com/sothearo-kay",
    icon: <Icons.Github />,
  },
  {
    url: "https://www.linkedin.com/in/kaysothearo19",
    icon: <Icons.Linkedin />,
  },
  {
    url: "https://www.facebook.com/profile.php?id=61561412133265",
    icon: <Icons.Facebook />,
  },
];
