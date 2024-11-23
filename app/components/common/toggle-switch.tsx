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
      className="flex w-[60px] cursor-pointer items-center rounded-full border border-gray-300 bg-gray-200 p-1 dark:border-gray-700 dark:bg-gray-800"
      style={{ justifyContent: theme === "dark" ? "flex-end" : "flex-start" }}
      onClick={toggleTheme}
    >
      <motion.span
        layout
        className="inline-block h-5 w-5 rounded-full bg-white"
      ></motion.span>
    </div>
  );
};
