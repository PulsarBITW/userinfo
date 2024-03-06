import { memo, useRef } from "react";
import ResetButton from "../ResetButton/ResetButton";
import SearchInput from "../SearchInput/SearchInput";
import classes from "./SearchTools.module.css";

type searchToolsProps = {
  setSearchParams: React.Dispatch<React.SetStateAction<string>>;
};

const SearchTools = memo(({ setSearchParams }: searchToolsProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const reset = () => {
    if (ref.current) {
      setSearchParams("");
      ref.current.value = "";
    }
  };

  return (
    <div className={classes.SearchTools}>
      <SearchInput setSearchParams={setSearchParams} ref={ref} />
      <ResetButton handle={reset}>{"Reset"}</ResetButton>
    </div>
  );
});

export default SearchTools;
