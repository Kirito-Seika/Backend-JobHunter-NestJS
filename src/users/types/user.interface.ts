export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: number;
  age: number;
  gender: string;
  address: string;
  role: {
    _id: string;
    name: string;
  };
  permissions?: {
    _id: string;
    name: string;
    apiPath: string;
    module: string;
  }[];
}
