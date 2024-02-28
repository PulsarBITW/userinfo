import { useEffect } from "react";
import { userListType } from "../Types/types";

// interface useFiltersProps {
//   searchParams: string;
//   userList: userListType;
//   setFilterUsers: React.Dispatch<React.SetStateAction<string>>;
// }

const useFilters = (
  searchParams: string,
  userList: any,
  setFilterUsers: any
) => {
  useEffect(() => {
    const filterArray = userList.filter((el: any) => {
      const str = el.name.first.toLowerCase() + el.name.last.toLowerCase(); //
      return str.startsWith(searchParams.toLowerCase());
    });
    setFilterUsers(filterArray);
  }, [searchParams]);
};

export default useFilters;
