import styled from "styled-components";

export const Button = styled.button`
  border-radius: 0.375rem;

  background-color: transparent;
  color: inherit;
  letter-spacing: 1px;

  transition: background-color 0.25s;

  &:active {
    transform: translateY(2px);
  }
`;
