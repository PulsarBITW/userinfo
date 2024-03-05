import { useEffect, useState } from "react";
import { resultUser, resultRequest, responseProps } from "../Types/types";

const useFetchUsers = (url = "https://randomuser.me/api/?results=15") => {
  const [responseState, setResponseState] = useState<responseProps>({
    data: [],
    error: false,
    isLoading: true,
  });

  // типизирование этой части
  useEffect(() => {
    let flag = true; // Профилактика от гонки запросов
    setResponseState((prev) => ({ ...prev, isLoading: true }));
    const getUser = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (flag) {
          setResponseState((prev) => ({ ...prev, data: data.results }));
        }
      } catch (err) {
        setResponseState((prev) => ({ ...prev, error: true }));
      } finally {
        setResponseState((prev) => ({ ...prev, isLoading: false }));
      }
    };
    getUser();
    return () => {
      flag = false;
    };
  }, [url]);
  // До этой части
  return [
    responseState.data,
    responseState.isLoading,
    responseState.error,
  ] as const;
};

export default useFetchUsers;
