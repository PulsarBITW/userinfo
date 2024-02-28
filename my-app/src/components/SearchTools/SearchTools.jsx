import ResetButton from "../ResetButton/ResetButton";
import SearchInput from "../SearchInput/SearchInput";
import classes from "./SearchTools.module.css";
const SearchTools = ({ setSearchParams }) => {
  const reset = () => setSearchParams(""); // поменять
  return (
    <div className={classes.SearchTools}>
      <SearchInput setSearchParams={setSearchParams} />
      <ResetButton handle={reset}>{"Reset"}</ResetButton>
    </div>
  );
};

export default SearchTools;
