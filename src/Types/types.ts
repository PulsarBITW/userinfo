export type nameType = {
  first: string;
  last: string;
  title: string;
};

export type id = {
  name: string;
  value: string;
};

export type info = {
  page: number;
  results: number;
  seed: string;
  version: string;
};

export type location = {
  city: string;
  coordintates: Record<string, string>;
  country: string;
  postcode: number;
  state: string;
  street: Record<string, string | number>;
  timezone: Record<string, string>;
};

export interface resultUser {
  genger: string;
  name: nameType;
  location: location;
  email: string;
  login: Record<string, string>;
  nat: string;
  phone: string;
  picture: Record<string, string>;
  registered: Record<string, string | number>;
  dop: Record<string, string>;
  cell: string;
  id: id;
}

export interface resultRequest {
  info: info;
  results: resultUser[];
}
