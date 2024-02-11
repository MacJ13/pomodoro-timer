import styled from "styled-components";
import { Flex } from "./Flex.styled";
import { Button } from "./Button.styled";

export const Nav = styled.nav`
  margin: 0 auto;
  max-width: 30rem;
  padding: 0 1rem;
  width: 100%;
`;

export const FlexNav = styled(Flex)`
  justify-content: space-between;
`;

export const ButtonNav = styled(Button)`
  // border: ${({ theme }) => theme.borders.slimTranslucent};
  padding: 0.5rem 1.125rem;
  font-size: 0.8rem;
  border: none;

  & > div {
    gap: 0.5rem;
  }
`;
