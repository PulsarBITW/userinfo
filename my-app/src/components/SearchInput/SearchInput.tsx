import { useRef, FC, Dispatch, SetStateAction } from "react";
import useDebounce from "../../hooks/debounce";
import classes from "./SearchInput.module.css";

interface SearchInputProps {
  setSearchParams: Dispatch<SetStateAction<string>>;
}

const SerchInput: React.FC<SearchInputProps> = ({ setSearchParams }) => {
  const ref = useRef<HTMLInputElement>(null); // id for input

  const debounce = useDebounce(setSearchParams, 1000);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    debounce(e.target.value);
  };

  return (
    <input className={classes.searchInput} ref={ref} onChange={onChange} />
  );
};

export default SerchInput;
