import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

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
      className="flex w-[60px] cursor-pointer items-center rounded-full border border-common-border bg-common-bg p-1 shadow-inner shadow-shadow-color"
      onClick={toggleTheme}
    >
      <span
        className={`${theme === "dark" ? "translate-x-[30px]" : ""} inline-block h-5 w-5 rounded-full bg-white transition-transform duration-300`}
      ></span>
    </div>
  );
};
