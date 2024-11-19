import { useRef, useEffect } from "react";

export default function usePreviousValue<T>(value: T): T | undefined {
  const prevValue = useRef<T>(undefined);

  useEffect(() => {
    prevValue.current = value;

    return () => {
      prevValue.current = undefined;
    };
  });

  return prevValue.current;
}
