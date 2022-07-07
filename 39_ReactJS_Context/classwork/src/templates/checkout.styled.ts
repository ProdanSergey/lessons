import styled from "styled-components";

export const StyledContainer = styled.div`
  padding: 12px;
  border: 1px solid lightgray;
  border-radius: 6px;
  background-color: #f0eeee;
`;

export const StyledList = styled.ul`
  margin-top: 12px;
  border-bottom: 1px dashed lightgray;
`;

export const StyledItem = styled.li`
  display: flex;
  margin-bottom: 6px;
`;

export const StyledItemOrder = styled.span`
  margin-right: 4px;

  ::after {
    content: ".";
  }
`;

export const StyledItemCounter = styled.strong`
  margin-left: auto;
`;

export const StyledTotal = styled.span`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 18px;
  margin-top: 6px;
`;
