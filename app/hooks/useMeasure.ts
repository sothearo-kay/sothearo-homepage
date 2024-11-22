import { useRef, useState, useEffect } from "react";
interface dimensions {
  width: number;
  height: number;
}

export function useMeasure() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState<dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return [ref, dimensions] as const;
}
