import styled from "styled-components";

export const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  list-style: none;
  top: 100%;
  //   left: 0;
  border-radius: 0.33rem;

  width: 100%;
  padding: 0.5rem 0;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  z-index: 0;
`;
