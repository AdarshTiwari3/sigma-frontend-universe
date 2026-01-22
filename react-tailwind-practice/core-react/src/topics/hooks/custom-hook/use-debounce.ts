import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [value, delay]);
  return debounceValue;
}
