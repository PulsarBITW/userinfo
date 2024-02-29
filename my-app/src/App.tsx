import { useState } from "react";

import "./App.css";
import useUserList from "./hooks/useUserList";
import useFilters from "./hooks/useFilters";
import Table from "./components/Table/table";
import SearchTools from "./components/SearchTools/SearchTools";
import Spinner from "./components/Spinner/Spinner";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  const [userList, isLoading, error] = useUserList();
  const [searchParams, setSearchParams] = useState<string>("");
  const [filterUsers, notFoundUsers] = useFilters(searchParams, userList);

  return (
    <div className="App">
      <main>
        <SearchTools setSearchParams={setSearchParams} />

        {isLoading ? (
          <Spinner />
        ) : error ? (
          <h1>{"Error - bad request"}</h1>
        ) : notFoundUsers ? (
          <NotFound />
        ) : (
          <Table users={filterUsers} />
        )}
      </main>
    </div>
  );
};

export default App;
