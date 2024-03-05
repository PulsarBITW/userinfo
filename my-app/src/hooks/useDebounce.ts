import { useCallback, useRef } from "react";

const useDebounce = (callback: (...args: any[]) => void, timer: number) => {
  const timerId = useRef<any>();

  const debounceFunction = useCallback(
    (...args: any) => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
      timerId.current = setTimeout(() => callback(...args), timer);
    },
    [callback, timer]
  );
  return debounceFunction;
};

export default useDebounce;
