import { useEffect, useState } from "react";
import { resultUser } from "../Types/types";
import filterFunction from "../utils/filterFunction";

function useFilters(searchParams: string, userList: resultUser[]) {
  const [notFoundUsers, setNotFoundUsers] = useState<boolean>(false);
  const [filterUsers, setFilterUsers] = useState<resultUser[]>(userList);

  useEffect(() => {
    // If there are no searchParams then add the original array
    if (searchParams.length === 0) {
      setFilterUsers(userList);
      setNotFoundUsers(false);
    } else {
      const filterArray = userList.filter((el: resultUser) =>
        filterFunction(searchParams, el)
      );
      // If there are no suitable users, then we set an error, otherwise we set a filtered array
      if (!filterArray.length) setNotFoundUsers(true);
      else {
        setFilterUsers(filterArray);
        setNotFoundUsers(false);
      }
    }
  }, [searchParams, userList]);

  return [filterUsers, notFoundUsers] as const;
}

export default useFilters;
