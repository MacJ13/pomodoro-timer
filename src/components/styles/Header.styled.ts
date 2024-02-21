import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  padding: 0.8rem 0;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.white025};
  box-shadow: 0px 2px 1px 0px rgba(255, 255, 255, 0.15);
`;
