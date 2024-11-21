import Link from "next/link";
import * as Icons from "@/components/icons";

export const SocialLinks: React.FC = () => {
  return (
    <ul className="flex items-center gap-6">
      {socialLinks.map((link) => (
        <li key={link.name}>
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
    name: "github",
    url: "https://github.com/sothearo-kay",
    icon: <Icons.Github />,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/kaysothearo19",
    icon: <Icons.Linkedin />,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/profile.php?id=61561412133265",
    icon: <Icons.Facebook />,
  },
];
