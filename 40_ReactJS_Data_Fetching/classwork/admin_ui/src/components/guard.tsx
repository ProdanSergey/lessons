import React, { FunctionComponent, PropsWithChildren, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/user";

export const AuthorizedGuard: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{children}</>;
};

type DeAuthorizedGuardProps = PropsWithChildren<{
  to?: string;
}>;

export const DeAuthorizedGuard: FunctionComponent<DeAuthorizedGuardProps> = ({
  to = "/",
  children,
}) => {
  const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to={to} replace={true} />;
  }

  return <>{children}</>;
};
