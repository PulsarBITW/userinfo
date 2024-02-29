import { useEffect, useState } from "react";
import Service from "../service";
import { userListType } from "../Types/types";

const useUserList = (url = "https://randomuser.me/api/?results=15") => {
  const [userList, setUserList] = useState<userListType[]>([]);
  const [isLoading, setLoading] = useState(true);
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

export default useUserList;
