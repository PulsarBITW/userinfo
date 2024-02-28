import { time } from "console";
import { useEffect, useRef, useState } from "react";
import useDebounce from "../../hooks/debounce";

function SerchInput({ setSearchParams }: any) {
  const ref = useRef(null); // id for input

  const debounce = useDebounce(setSearchParams, 1000);

  const onChange = (e: any) => {
    console.log(e.target.value);
    debounce(e.target.value);
  };
  return <input ref={ref} onChange={onChange} />;
}

export default SerchInput;
