"use client";

import { useRef, useState, Fragment, HtmlHTMLAttributes } from "react";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import usePreviousValue from "@/hooks/usePreviousValue";

interface TabItem<T> {
  name: string;
  content: T;
}

interface TabsProps<T> {
  tabItems: TabItem<T>[];
  children: (content: T) => React.ReactNode;
}

export const BaseTabs = <T,>({ tabItems, children }: TabsProps<T>) => {
  const panelContainerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const prevIndex = usePreviousValue(selectedIndex) || 0;
  const direction = selectedIndex > prevIndex ? 1 : -1;

  const selectedTab = tabItems[selectedIndex];

  return (
    <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <TabList className="flex gap-1 rounded-lg bg-gray-200 p-1 dark:bg-gray-800 [&>*]:flex-1">
        {tabItems.map(({ name }) => (
          <Tab key={name} as={Fragment}>
            {({ selected }) => (
              <button
                className={`${!selected ? "hover:bg-[#fffa] dark:hover:bg-[#000a]" : ""} relative rounded-md py-2 font-medium transition-[background-color] duration-150 flex-center focus:outline-none`}
              >
                <span className="relative z-10 font-mplus font-medium">
                  {name}
                </span>
                {selected && <Background layoutId="background" />}
              </button>
            )}
          </Tab>
        ))}
      </TabList>

      <TabPanels ref={panelContainerRef} className="relative">
        <AnimatePresence initial={false} custom={direction}>
          <TabPanel
            key={selectedIndex}
            as={motion.div}
            variants={tabPanelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={direction}
            transition={{ type: "tween", duration: 0.5 }}
            className="absolute top-2.5 max-h-min w-full"
            static // tells headless ui to delegate mount/unmount to us
          >
            {children(selectedTab!.content)}
          </TabPanel>
        </AnimatePresence>
      </TabPanels>
    </TabGroup>
  );
};

function Background(props: HtmlHTMLAttributes<HTMLDivElement> & MotionProps) {
  return (
    <motion.div
      className="absolute inset-0 rounded-md bg-gray-300 dark:bg-gray-700"
      {...props}
    ></motion.div>
  );
}

const tabPanelVariants = {
  hidden: (direction: number) => ({ x: direction * 100 + "%" }),
  visible: { x: 0 },
  exit: (direction: number) => ({ x: direction * -100 + "%" }),
};
