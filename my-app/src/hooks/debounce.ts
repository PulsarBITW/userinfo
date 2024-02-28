import { useCallback, useRef } from "react";

export default function useDebounce(callback: any, timer: number) {
  const timerId = useRef<any>();

  const debouneFunction = useCallback(
    (...args: any) => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
      timerId.current = setTimeout(() => callback(...args), timer);
    },
    [callback]
  );
  return debouneFunction;
}
