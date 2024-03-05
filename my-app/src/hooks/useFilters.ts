import { useEffect, useState } from "react";
import { resultUser } from "../Types/types";

const useFilters = (searchParams: string, userList: resultUser[]) => {
  const [filterUsers, setFilterUsers] = useState<resultUser[]>(userList);
  const [notFoundUsers, setNotFoundUsers] = useState<boolean>(false);

  useEffect(() => {
    // clone userList to filterUsers in first Render and setFilterUsers if searchParams.length equal 0
    if (searchParams.length === 0) {
      setFilterUsers(userList);
      setNotFoundUsers(false);
    } else {
      const filterArray = userList.filter((el: resultUser) => {
        const str = (
          el.name.first.toLowerCase() + el.name.last.toLowerCase()
        ).replaceAll(" ", "");
        return str.startsWith(searchParams.toLowerCase().replaceAll(" ", ""));
      });
      // speacial message if we have not user with name equal searchParams
      if (!filterArray.length) setNotFoundUsers(true);
      else {
        setFilterUsers(filterArray);
        setNotFoundUsers(false);
      }
    }
  }, [searchParams, userList]);

  return [filterUsers, notFoundUsers] as const;
};

export default useFilters;
