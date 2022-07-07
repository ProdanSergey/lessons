import React, { FunctionComponent, useContext } from "react";
import { UserContext } from "../context/user";
import {
  StyledSection,
  StyledContainer,
} from "../shared/elements/layout.styled";
import { UserForm } from "../templates/login/form/form";

export const LoginPage: FunctionComponent = () => {
  const { setUser } = useContext(UserContext);

  return (
    <StyledContainer>
      <StyledSection>
        <UserForm
          onSubmit={({ fullName, email }) => setUser({ fullName, email })}
        />
      </StyledSection>
    </StyledContainer>
  );
};
