import { useState } from "react";

import "./App.css";

import useFetchUsers from "./hooks/useFetchUsers";
import useFilters from "./hooks/useFilters";
import Table from "./components/Table/table";
import SearchTools from "./components/SearchTools/SearchTools";
import Spinner from "./components/Spinner/Spinner";
import NotFound from "./components/NotFound/NotFound";

// Улучшить поиск по строке
// типизация useFetchUsers и useDebounce
// мб добить типы для объекта юзера

// we can use a ReactContext to avoid props drilling in SearchTools->SearchInput, but it only occurs once
//  we can create a separate component for <main/> to avoid rerenders in App, but App is <main/> in this task
const App = () => {
  const [userList, isLoading, error] = useFetchUsers();
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
