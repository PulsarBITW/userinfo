import ResetButton from "../ResetButton/ResetButton";
import SearchInput from "../SearchInput/SearchInput";

const SearchTools = ({ setSearchParams }) => {
  const reset = () => setSearchParams(""); // поменять
  return (
    <div>
      <SearchInput setSearchParams={setSearchParams} />
      <ResetButton handle={reset}>{"reset"}</ResetButton>
    </div>
  );
};

export default SearchTools;
