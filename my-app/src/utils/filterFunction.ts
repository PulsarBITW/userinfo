import { resultUser } from "../Types/types";

const prepareString = (str: string): string => {
  return str.toLowerCase().replaceAll(" ", "");
};

const filterFunction = (searchParams: string, item: resultUser): boolean => {
  const firstName = prepareString(item.name.first);
  const lastName = prepareString(item.name.last);
  const searchParamsForСomparison = prepareString(searchParams);

  // filter by name order
  const res1 = (firstName + lastName).startsWith(searchParamsForСomparison);

  //  filter by reverse name order
  const res2 = (lastName + firstName).startsWith(searchParamsForСomparison);

  // filter by one of the names
  let res3 = false;
  if (
    firstName.startsWith(searchParamsForСomparison) ||
    lastName.startsWith(searchParamsForСomparison)
  )
    res3 = true;

  return res1 || res2 || res3;
};

export default filterFunction;
