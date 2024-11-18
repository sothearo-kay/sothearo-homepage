"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/theme-provider";

export const ToggleSwitch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="flex w-14 cursor-pointer items-center rounded-full bg-foreground p-1"
      style={{ justifyContent: theme === "dark" ? "flex-end" : "flex-start" }}
      onClick={toggleTheme}
    >
      <motion.span
        className="inline-block h-5 w-5 rounded-full bg-background"
        layout
      ></motion.span>
    </div>
  );
};
