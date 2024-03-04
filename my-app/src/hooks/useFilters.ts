import { useEffect, useState } from "react";
import { userListType } from "../Types/types";

const useFilters = (searchParams: string, userList: any) => {
  const [filterUsers, setFilterUsers] = useState<userListType[]>([]);
  const [notFoundUsers, setNotFoundUsers] = useState<boolean>(false); //
  useEffect(() => {
    // clone userList to filterUsers in first Render and setFilterUsers if searchParams.length equal 0
    if (searchParams.length === 0) {
      setFilterUsers(userList);
      setNotFoundUsers(false);
    } else {
      const filterArray = userList.filter((el: any) => {
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
