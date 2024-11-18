"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export const ToggleSwitch: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="flex w-14 cursor-pointer items-center rounded-full bg-foreground p-1"
      style={{ justifyContent: theme === "dark" ? "flex-end" : "flex-start" }}
      onClick={toggleTheme}
    >
      <motion.span
        layout
        className="inline-block h-5 w-5 rounded-full bg-background"
      ></motion.span>
    </div>
  );
};
