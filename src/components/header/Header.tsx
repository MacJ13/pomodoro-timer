import styled from "styled-components";
import { ChildrenProps } from "../../types/types";

const Header = ({ children }: ChildrenProps) => {
  return <StyledHeader>{children}</StyledHeader>;
};

const StyledHeader = styled.header`
  position: relative;
  padding: 0.75rem 0;
  width: 100%;
  border-bottom: 4px solid rgba(255, 255, 255, 0.25);
`;

export default Header;
