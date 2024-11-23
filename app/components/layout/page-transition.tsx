"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FrozenRouter } from "./frozen-router";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: React.ComponentProps<typeof motion.main>["className"];
  style?: React.ComponentProps<typeof motion.main>["style"];
  variants?: React.ComponentProps<typeof motion.main>["variants"];
  initial: React.ComponentProps<typeof motion.main>["initial"];
  animate: React.ComponentProps<typeof motion.main>["animate"];
  exit: React.ComponentProps<typeof motion.main>["exit"];
  transition: React.ComponentProps<typeof motion.main>["transition"];
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  ...pageProps
}) => {
  const pathname = usePathname();

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.main key={pathname} {...pageProps}>
        <FrozenRouter>{children}</FrozenRouter>
      </motion.main>
    </AnimatePresence>
  );
};
