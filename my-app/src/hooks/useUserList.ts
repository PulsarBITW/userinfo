import { useEffect, useState } from "react";
import Service from "../service";

export const useUserList = () => {
  const [userList, setUserList] = useState({});

  useEffect(() => {
    let flag = true;

    const getUser = async () => {
      const a = await Service.getUsers();
      const b = await a.json();
      if (flag) setUserList(b);
    };
    getUser();
    return () => {
      flag = false;
    };
  }, []);
};
