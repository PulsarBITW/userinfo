import { useEffect, useState } from "react";

import { resultRequest, resultUser } from "../Types/types";

const useFetchUsers = (
  url: string = "https://randomuser.me/api/?results=15"
) => {
  const [data, setData] = useState<resultUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let flag = true; // Профилактика от гонки запросов
    setIsLoading(true);
    const getUser = async () => {
      try {
        const response = await fetch(url);
        const res: resultRequest = await response.json();
        if (flag) {
          setData(res.results);
          setError(false);
        }
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getUser();
    return () => {
      flag = false;
    };
  }, [url]);

  return [data, isLoading, error] as const;
};

export default useFetchUsers;
