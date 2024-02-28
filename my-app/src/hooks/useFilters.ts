import { useEffect, useState } from "react";

function useFilters(searchParams: string, userList: any) {
  //console.log("@", userList.results);
  const [filterUsers, setFilterUsers] = useState(userList);
  useEffect(() => {
    if (Array.isArray(userList.results)) setFilterUsers(userList.results);
    // if (searchParams.length === 0) setFilterUsers(userList);
    // console.log(filterUsers);
    if (Array.isArray(filterUsers)) {
      const filterArray = filterUsers.filter((el: any) => {
        console.log(
          (el.name.first + el.name.last).toLowerCase() ===
            searchParams.toLowerCase()
        );
        return (el.name + el.last).toLowerCase() === searchParams.toLowerCase();
      });
      // setFilterUsers(filterArray);
      console.log(filterArray);
    }
    // console.log(filterUsers);
  }, [searchParams, userList]);

  //console.log("render filters", filterUsers);
  return filterUsers;
}

export default useFilters;
