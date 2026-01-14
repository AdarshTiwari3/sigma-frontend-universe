import { createContext, useContext } from "react";
import type { User } from "./use-context-demo";

export const AppContext = createContext<User | undefined>(undefined);

//create a custom hook to avoid undefined issue

export function useUserContext() {
  const user = useContext(AppContext); // this consumes the context

  if (user === undefined) {
    throw new Error("User is undefined");
  }
  return user;
}
