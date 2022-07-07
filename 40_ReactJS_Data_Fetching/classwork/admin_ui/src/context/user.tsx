import React, {
  createContext,
  FunctionComponent,
  PropsWithChildren,
} from "react";

export const UserContext = createContext<UserContextValue>({});

export const UserProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {};
