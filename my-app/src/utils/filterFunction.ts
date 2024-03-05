import { resultUser } from "../Types/types";

const prepareString = (str: string) => {
  return str.toLowerCase().replaceAll(" ", "");
};

const filterFunction = (searchParams: string, item: resultUser) => {
  const firstName = prepareString(item.name.first);
  const lastName = prepareString(item.name.last);
  const searchParamsForСomparison = prepareString(searchParams);

  // filter by name order
  const res1 = (firstName + lastName).startsWith(searchParamsForСomparison);

  // filter by one of the names
  let res2 = false;
  if (
    firstName.startsWith(searchParamsForСomparison) ||
    lastName.startsWith(searchParamsForСomparison)
  )
    res2 = true;

  // result
  return res1 || res2;
};

export default filterFunction;
