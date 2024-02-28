import { useEffect, useState } from "react";

function useFilters(searchParams: string, userList: Array<any>) {
  const [filterUsers, setFilterUsers] = useState(userList);
  useEffect(() => {
    filterUsers.filter((el: any) => el.name + el.last === searchParams);
    console.log(filterUsers);
  }, [searchParams]);

  return filterUsers;
}

export default useFilters;
