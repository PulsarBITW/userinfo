import { useState } from "react";

import "./App.css";
import { useUserList } from "./hooks/useUserList";
import SearchInput from "./components/SearchInput/SearchInput";
import useFilters from "./hooks/useFilters";

function App() {
  const [userList, isLoading] = useUserList();
  const [searchParams, setSearchParams] = useState("");
  console.log("allUsers", userList);
  const reset = () => setSearchParams("");

  const filterUsers = useFilters(searchParams, userList);

  return (
    <div className="App">
      <SearchInput value={searchParams} setValue={setSearchParams} />
      <button onClick={reset}>{"reset"}</button>
      {isLoading ? <h1>{"Loading..."}</h1> : <div>{"Already"}</div>}
    </div>
  );
}

export default App;
