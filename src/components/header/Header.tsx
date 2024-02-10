import styled from "styled-components";
import { ChildrenProps } from "../../types/types";

const Header = ({ children }: ChildrenProps) => {
  return <StyledHeader>{children}</StyledHeader>;
};

const StyledHeader = styled.header`
  position: relative;
  padding: 0.75rem 0;
  width: 100%;
  border-bottom: ${({ theme }) => theme.borders.slimTranslucent};
`;

export default Header;
