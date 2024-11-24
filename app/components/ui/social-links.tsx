import * as Icons from "@/components/icons";
import { ExternalLink } from "./external-link";

export const SocialLinks: React.FC = () => {
  return (
    <ul className="flex items-center gap-6">
      {socialLinks.map((link, idx) => (
        <li key={idx}>
          <ExternalLink href={link.url}>
            <span className="block rounded-full border border-dashed border-transparent p-2 transition-[border-color] duration-150 hover:border-foreground">
              {link.icon}
            </span>
          </ExternalLink>
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
