type nameType = {
  first: string;
  last: string;
  title: string;
};

type id = {
  name: string;
  value: string;
};

type info = {
  page: number;
  results: number;
  seed: string;
  version: string;
};
// Добить типизацию мб
export interface resultUser {
  genger: string;
  name: nameType;
  location: Record<string, string>;
  email: string;
  login: Record<string, string>;
  nat: string;
  phone: string;
  picture: Record<string, string>;
  registered: Record<string, string>;
  dop: Record<string, string>;
  cell: string;
  id: id;
}

export interface resultRequest {
  info: info;
  results: resultUser[];
}

export interface responseProps {
  data: resultUser[];
  error: boolean;
  isLoading: boolean;
}
