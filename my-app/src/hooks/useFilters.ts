import { useEffect, useState } from "react";
import { resultUser } from "../Types/types";
import filterFunction from "../utils/filterFunction";

type filterInfo = {
  filterUsers: resultUser[];
  notFoundUsers: boolean;
};

const useFilters = (searchParams: string, userList: resultUser[]) => {
  const initialState: filterInfo = {
    filterUsers: userList,
    notFoundUsers: false,
  };
  const [filterInfo, setFilterInfo] = useState<filterInfo>(initialState);

  // clone userList to filterUsers in first Render and setFilterUsers if searchParams.length equal 0
  useEffect(() => {
    if (searchParams.length === 0)
      setFilterInfo({ filterUsers: userList, notFoundUsers: false });
    else {
      const filterArray = userList.filter((el: resultUser) =>
        filterFunction(searchParams, el)
      );
      if (!filterArray.length)
        setFilterInfo((prev) => ({ ...prev, notFoundUsers: true }));
      else {
        setFilterInfo({ filterUsers: filterArray, notFoundUsers: false });
      }
    }
  }, [searchParams, userList]);

  return [filterInfo.filterUsers, filterInfo.notFoundUsers] as const;
};

export default useFilters;
