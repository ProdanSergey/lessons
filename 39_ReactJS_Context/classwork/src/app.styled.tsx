import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-row-gap: 64px;
  grid-template-columns: 320px 1fr;
  grid-template-areas:
    "header header"
    "sidebar content";
`;

export const StyledHeader = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
  background: white;
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 84px;
`;

export const StyledToolbar = styled.div`
  display: flex;
`;

export const StyledContent = styled.main`
  grid-area: content;
  display: flex;
`;

export const StyledSidebar = styled.aside`
  grid-area: sidebar;
  position: sticky;
  top: 84px;
  background: white;
  align-self: flex-start;
`;
