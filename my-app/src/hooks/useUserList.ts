import { useEffect, useState } from "react";
import Service from "../service";

export const useUserList = (
  setFilterUsers: any,
  url = "https://randomuser.me/api/?results=15"
) => {
  const [userList, setUserList] = useState<Record<string, any> | Array<any>>(
    []
  );
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let flag = true; // Профилактика от гонки запросов
    setLoading(true);

    const getUser = async () => {
      try {
        const a = await Service.getUsers(url);
        const b = await a.json();
        if (flag) {
          setUserList(b.results);
          setFilterUsers(b.results);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getUser();
    return () => {
      flag = false;
    };
  }, []);

  return [userList, isLoading, error];
};
