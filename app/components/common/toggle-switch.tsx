import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

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
    <button
      aria-label="Toggle theme"
      className="relative h-10 w-10 rounded-md border border-common-border bg-background transition-[background-color,border-color] duration-[.15s,.5s] hover:bg-common-bg"
      onClick={toggleTheme}
    >
      <AnimatePresence initial={false}>
        {theme === "dark" ? <MoonIcon key="moon" /> : <SunIcon key="sun" />}
      </AnimatePresence>
    </button>
  );
};

const MoonIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute inset-0 m-auto"
    >
      <motion.path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z"
        variants={draw}
      />
    </motion.svg>
  );
};

const SunIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute inset-0 m-auto"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <motion.circle
          cx="12"
          cy="12"
          r="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          variants={draw}
        />
        <motion.path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          d="M12 2v2m0 16v2M4 12H2m20 0h-2m-.222-7.777l-2.222 2.031M4.222 4.223l2.222 2.031m0 11.302l-2.222 2.222m15.556-.001l-2.222-2.222"
          variants={draw}
        />
      </g>
    </motion.svg>
  );
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1.1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1, bounce: 0, delay: 0.25 },
      opacity: { duration: 0.5 },
    },
  },
  exit: {
    pathLength: 0,
    opacity: 0,
    transition: {
      pathLength: { type: "spring", duration: 1, bounce: 0 },
      opacity: { duration: 1 },
    },
  },
};
