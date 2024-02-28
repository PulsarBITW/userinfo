import { useState } from "react";

import "./App.css";
import { useUserList } from "./hooks/useUserList";
import SearchInput from "./components/SearchInput/SearchInput";
import useFilters from "./hooks/useFilters";
import Table from "./components/Table/table";

function App() {
  const [filterUsers, setFilterUsers] = useState([]);
  const [userList, isLoading] = useUserList(setFilterUsers);
  const [searchParams, setSearchParams] = useState("");
  useFilters(searchParams, userList, setFilterUsers); // синхронизация значения инпута с отображаемым контентом
  const reset = () => setSearchParams(""); // поменять

  console.log("userList", userList, "filterList", filterUsers);
  return (
    <div className="App">
      <SearchInput
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <button onClick={reset}>{"reset"}</button>
      {isLoading ? <h1>{"Loading..."}</h1> : <Table users={filterUsers} />}
    </div>
  );
}

export default App;

// {isLoading ? (
//   <h1>{"Loading..."}</h1>
// ) : (
//   <div>
//     {filterUsers.map((el: any, i) => {
//       return (
//         <div key={el.login.uuid}>
//           <h1>{i + 1 + ". " + el.name.first + " " + el.name.last}</h1>
//         </div>
//       );
//     })}
//   </div>
// )}
