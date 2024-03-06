import { Dispatch, SetStateAction, forwardRef } from "react";
import useDebounce from "../../hooks/useDebounce";

import classes from "./SearchInput.module.css";

type SearchInputProps = {
  setSearchParams: Dispatch<SetStateAction<string>>;
};

const SerchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ setSearchParams }, ref) => {
    const debounce = useDebounce(setSearchParams, 500);

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      debounce(e.target.value);
    };

    return (
      <input
        className={classes.searchInput}
        ref={ref}
        onChange={onChange}
        placeholder="something"
      />
    );
  }
);

export default SerchInput;
