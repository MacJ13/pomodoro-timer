import styled from "styled-components";

type HeaderProps = {
  children: React.ReactElement;
};

const Header = ({ children }: HeaderProps) => {
  return <StyledHeader>{children}</StyledHeader>;
};

const StyledHeader = styled.header`
  position: relative;
  padding: 0.75rem 0;
  width: 100%;
  border-bottom: 4px solid rgba(255, 255, 255, 0.25);
`;

export default Header;
