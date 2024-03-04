import { useEffect, useState } from "react";
import { userListType, userProps } from "../Types/types";

interface responseProps {
  data: userProps | any[];
  error: boolean;
  isLoading: boolean;
}

const useUserList = (url = "https://randomuser.me/api/?results=15") => {
  const [response, setResponse] = useState<responseProps>({
    data: [],
    error: false,
    isLoading: true,
  });

  useEffect(() => {
    let flag = true; // Профилактика от гонки запросов
    setResponse((prev) => ({ ...prev, isLoading: true }));
    const getUser = async () => {
      try {
        const a = await fetch(url);
        const b = await a.json();
        console.log(b);
        if (flag) {
          setResponse((prev) => ({ ...prev, data: b.results }));
        }
      } catch (err) {
        setResponse((prev) => ({ ...prev, error: true }));
      } finally {
        setResponse((prev) => ({ ...prev, isLoading: false }));
      }
    };
    getUser();
    return () => {
      flag = false;
    };
  }, []);

  return [response.data, response.isLoading, response.error];
};

export default useUserList;
