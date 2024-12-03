export enum USER_TYPE {
  "SELLER" = "seller",
  "BUYER" = "buyer",
}
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  type: USER_TYPE;
  createdAt: string;
}
