"use client";

import { useState, Fragment } from "react";
import { AnimatePresence, motion, type MotionProps } from "framer-motion";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import { useMeasure } from "@/app/hooks/useMeasure";
import { usePreviousState } from "@/app/hooks/usePreviousState";

interface TabItem<T> {
  name: string;
  content: T;
}

interface TabsProps<T> {
  tabItems: TabItem<T>[];
  children: (content: T) => React.ReactNode;
}

export const BaseTabs = <T,>({ tabItems, children }: TabsProps<T>) => {
  const [tabPanelRef, { height }] = useMeasure();
  const [selectedIndex, setSelectedIndex] = useState(1);
  const prevIndex = usePreviousState(selectedIndex) || -1;
  const direction = selectedIndex > prevIndex ? 1 : -1;
  const selectedTab = tabItems[selectedIndex];

  return (
    <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <TabList className="flex gap-1 rounded-lg bg-common-bg p-1 transition-[background-color] duration-500 [&>*]:flex-1">
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

      <TabPanels
        as={motion.div}
        animate={{ height: height || "auto" }}
        transition={{ type: "tween", duration: 0.25 }}
        className="relative mt-2.5 overflow-hidden"
      >
        <div ref={tabPanelRef}>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <TabPanel
              key={selectedIndex}
              as={motion.div}
              variants={tabPanelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={direction}
              transition={{ type: "tween", duration: 0.5 }}
              className="max-h-min w-full"
              static // tells headless ui to delegate mount/unmount to us
            >
              {children(selectedTab.content)}
            </TabPanel>
          </AnimatePresence>
        </div>
      </TabPanels>
    </TabGroup>
  );
};

function Background(props: React.ComponentProps<"div"> & MotionProps) {
  return (
    <motion.div
      className="absolute inset-0 rounded-md bg-common-border transition-[background-color] duration-500"
      {...props}
    ></motion.div>
  );
}

const tabPanelVariants = {
  hidden: (direction: number) => ({ x: direction * 100 + "%", opacity: 0 }),
  visible: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction * -100 + "%", opacity: 0 }),
};
