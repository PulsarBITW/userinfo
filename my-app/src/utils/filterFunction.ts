import { resultUser } from "../Types/types";

const prepareSearchParams = (searchParams: string) => {
  return searchParams.toLowerCase().replaceAll(" ", "");
};

const prepareName = (name: string) => {
  return name.toLowerCase().replaceAll(" ", "");
};

const filterFunction = (searchParams: string, item: resultUser) => {
  const firstName = prepareName(item.name.first);
  const lastName = prepareName(item.name.last);
  const searchParamsForСomparison = prepareSearchParams(searchParams);

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
