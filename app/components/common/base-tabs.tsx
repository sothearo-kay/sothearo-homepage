"use client";

import { useState, Fragment, HtmlHTMLAttributes } from "react";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import usePreviousValue from "@/hooks/usePreviousValue";
import useMeasure from "@/hooks/useMeasure";

interface TabItem<T> {
  name: string;
  content: T;
}

interface TabsProps<T> {
  tabItems: TabItem<T>[];
  children: (content: T) => React.ReactNode;
}

export const BaseTabs = <T,>({ tabItems, children }: TabsProps<T>) => {
  const [ref, { height }] = useMeasure();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const prevIndex = usePreviousValue(selectedIndex) || 0;
  const direction = selectedIndex > prevIndex ? 1 : -1;

  return (
    <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <TabList className="flex rounded-lg bg-gray-200 p-1 dark:bg-gray-800 [&>*]:flex-1">
        {tabItems.map(({ name }) => (
          <Tab key={name} as={Fragment}>
            {({ selected }) => (
              <button className="relative rounded-md py-2 text-sm font-medium flex-center focus:outline-none">
                <span className="relative z-10">{name}</span>
                {selected && <Background layoutId="background" />}
              </button>
            )}
          </Tab>
        ))}
      </TabList>

      <TabPanels
        className="relative overflow-hidden"
        style={{ ...(height !== 0 && { height: `${height + 8}px` }) }}
      >
        <AnimatePresence initial={false} custom={direction}>
          {tabItems.map(
            ({ content }, idx) =>
              selectedIndex === idx && (
                <TabPanel
                  ref={ref}
                  key={idx}
                  as={motion.div}
                  variants={tabPanelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={direction}
                  transition={{ type: "tween", duration: 0.5 }}
                  className="absolute top-2 max-h-min w-full"
                  static // tells headless ui to delegate mount/unmount to us
                >
                  <div className="overflow-hidden">{children(content)}</div>
                </TabPanel>
              ),
          )}
        </AnimatePresence>
      </TabPanels>
    </TabGroup>
  );
};

function Background(props: HtmlHTMLAttributes<HTMLDivElement> & MotionProps) {
  return (
    <motion.div
      className="absolute inset-0 rounded-md bg-gray-300"
      {...props}
    ></motion.div>
  );
}

const tabPanelVariants = {
  hidden: (direction: number) => ({ x: direction * 100 + "%" }),
  visible: { x: 0 },
  exit: (direction: number) => ({ x: direction * -100 + "%" }),
};
