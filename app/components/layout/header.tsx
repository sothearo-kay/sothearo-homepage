"use client";

import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  type MotionProps,
  type MotionValue,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { ToggleSwitch } from "../common/toggle-switch";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <header className="sticky top-0 z-10 font-mplus">
      <Mask opacity={opacity} />

      <div className="container relative z-[1] flex items-center py-4">
        <nav className="flex-1">
          <ul className="flex items-center gap-8">
            {links.map((link, idx) => (
              <li key={idx} className="relative overflow-hidden pb-0.5">
                <Link href={link.path}>{link.label}</Link>
                {pathname === link.path && <Underline layoutId="underline" />}
              </li>
            ))}
          </ul>
        </nav>

        <ToggleSwitch />
      </div>
    </header>
  );
};

const links = [
  { path: "/", label: "home" },
  { path: "/projects", label: "projects" },
  { path: "/manga", label: "manga" },
];

function Mask({ opacity }: { opacity: MotionValue<number> }) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 bg-transparent backdrop-blur-sm"
      style={{
        opacity,
        backgroundSize: "4px 4px",
        backgroundImage: `
          radial-gradient(transparent 1px, var(--background) 1px)
        `,
      }}
    ></motion.div>
  );
}

function Underline(props: React.ComponentProps<"span"> & MotionProps) {
  return (
    <motion.span
      className="absolute -inset-x-0.5 bottom-0 mx-auto h-0.5 bg-foreground"
      {...props}
    ></motion.span>
  );
}
