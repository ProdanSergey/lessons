import styled from "styled-components";
import { Button } from "../shared/layout/button";

export const StyledButton = styled(Button)`
  position: relative;
`;

export const StyledIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  min-width: 24px;
  height: 24px;
  top: 0;
  right: 0;
  border-radius: 12px;
  background-color: #91dd91;
  padding: 4px;
`;
