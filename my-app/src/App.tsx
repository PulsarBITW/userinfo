import { useState } from "react";

import "./App.css";
import useUserList from "./hooks/useUserList";
import SearchInput from "./components/SearchInput/SearchInput";
import useFilters from "./hooks/useFilters";
import Table from "./components/Table/table";
import { userListType } from "./Types/types";
import ResetButton from "./components/ResetButton/ResetButton";
import SearchTools from "./components/SearchTools/SearchTools";

const App = () => {
  const [filterUsers, setFilterUsers] = useState<userListType[]>([]);
  const [userList, isLoading] = useUserList(setFilterUsers);
  const [searchParams, setSearchParams] = useState<string>("");

  useFilters(searchParams, userList, setFilterUsers); // синхронизация значения инпута с отображаемым контентом

  console.log("userList", userList, "filterList", filterUsers);
  return (
    <div className="App">
      <main>
        <SearchTools setSearchParams={setSearchParams} />
        {isLoading ? <h1>{"Loading..."}</h1> : <Table users={filterUsers} />}
      </main>
    </div>
  );
};

export default App;
