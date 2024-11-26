"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="relative grid grid-cols-3 grid-rows-12 gap-4 max-sm:grid-cols-2">
      {items.map(({ id, rowSpan, layoutId }) => (
        <motion.div
          key={id}
          layoutId={layoutId}
          className={`${rowSpan} size-full min-h-[200px] rounded bg-common-bg`}
          onClick={() => setSelectedIndex(id)}
        ></motion.div>
      ))}

      {selectedIndex > 0 ? (
        <motion.div
          key={`selected-${selectedIndex}`}
          layoutId={`layout-${selectedIndex}`}
          className="absolute inset-0 m-auto h-[400px] w-[600px] rounded-md !bg-white"
          onClick={() => setSelectedIndex(0)}
        ></motion.div>
      ) : null}
    </div>
  );
};

const items = [
  { id: 1, rowSpan: "row-span-4", layoutId: "layout-1" },
  { id: 2, rowSpan: "row-span-8", layoutId: "layout-2" },
  { id: 3, rowSpan: "row-span-4", layoutId: "layout-3" },
  { id: 4, rowSpan: "row-span-8", layoutId: "layout-4" },
  { id: 5, rowSpan: "row-span-8", layoutId: "layout-5" },
  { id: 6, rowSpan: "row-span-4 max-sm:col-span-2", layoutId: "layout-6" },
];
