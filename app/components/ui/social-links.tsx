"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "@/app/components/icons";
import { ExternalLink } from "./external-link";

export const SocialLinks: React.FC = () => {
  const [focused, setFocused] = useState<number | null>(null);

  return (
    <ul
      className="flex items-center gap-6"
      onMouseLeave={() => setFocused(null)}
    >
      {socialLinks.map((link, idx) => (
        <li key={idx} className="relative" onMouseEnter={() => setFocused(idx)}>
          <ExternalLink href={link.url} aria-label={link.label}>
            <span className="h-11 w-11 rounded-full border border-dashed border-transparent transition-[border-color] duration-150 flex-center hover:border-foreground">
              {link.icon}
            </span>
          </ExternalLink>

          {focused === idx && (
            <motion.span
              layoutId="tooltip"
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              className="absolute -bottom-8 rounded-md bg-common-bg px-2 py-1 text-sm"
              style={{ left: `${(idx * 4 + 8) * -1}px` }} // calculate the `left` position for each item based on its index
            >
              {link.label}
            </motion.span>
          )}
        </li>
      ))}
    </ul>
  );
};

const socialLinks = [
  {
    url: "https://github.com/sothearo-kay",
    icon: <Icons.Github />,
    label: "GitHub",
  },
  {
    url: "https://www.linkedin.com/in/kaysothearo19",
    icon: <Icons.Linkedin />,
    label: "LinkedIn",
  },
  {
    url: "https://www.facebook.com/profile.php?id=61561412133265",
    icon: <Icons.Facebook />,
    label: "Facebook",
  },
];
