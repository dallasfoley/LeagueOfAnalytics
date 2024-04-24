import { createContext } from "react";

export type UserType = {
  email: string;
  id: string;
};

export interface UserContextType {
  user: UserType;
  setUser: (user: UserType) => void;
}

export const userContext = createContext({
  user: {},
  setUser: () => {},
});
