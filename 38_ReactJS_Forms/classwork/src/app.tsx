import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { LocationForm } from "./templates/location-form";
import { UserForm } from "./templates/user-form";

const StyledContainer = styled.div`
  padding: 0 16px;
`;

export const App: FunctionComponent = () => {
  return (
    <StyledContainer>
      <header>
        <h1>React Forms</h1>
      </header>
      <main>
        <LocationForm />
        <UserForm />
      </main>
    </StyledContainer>
  );
};
