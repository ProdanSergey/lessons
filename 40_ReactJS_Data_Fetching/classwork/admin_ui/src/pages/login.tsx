import React, { FunctionComponent } from "react";
import {
  StyledSection,
  StyledContainer,
} from "../shared/elements/layout.styled";
import { UserForm } from "../templates/login/form/form";

export const LoginPage: FunctionComponent = () => {
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
