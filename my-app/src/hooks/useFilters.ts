import { useEffect } from "react";

function useFilters(searchParams: string, userList: any, setFilterUsers: any) {
  useEffect(() => {
    const filterArray = userList.filter((el: any) => {
      const str = el.name.first.toLowerCase() + el.name.last.toLowerCase(); //
      return str.startsWith(searchParams.toLowerCase());
    });
    setFilterUsers(filterArray);
  }, [searchParams]);
}

export default useFilters;
