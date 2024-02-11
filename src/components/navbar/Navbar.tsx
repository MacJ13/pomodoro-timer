import { useDispatch } from "react-redux";
import Settings from "../../assets/icons/settings.svg?react";
import styled from "styled-components";
import { toggleSettings } from "../../redux/settingsSlice";
import { Button } from "../styles/Button.styled";
import { Flex } from "../styles/Flex.styled";
import { Icon } from "../styles/Icon.styled";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <Nav>
      <FlexNav>
        <h2>Pomodoro timer</h2>
        <ButtonNav onClick={() => dispatch(toggleSettings())}>
          <Flex>
            <Icon $size="1rem">
              <Settings />
            </Icon>
            Settings
          </Flex>
        </ButtonNav>
      </FlexNav>
    </Nav>
  );
};

const Nav = styled.nav`
  margin: 0 auto;
  max-width: 30rem;
  padding: 0 1rem;
  width: 100%;
`;

const FlexNav = styled(Flex)`
  justify-content: space-between;
`;

const ButtonNav = styled(Button)`
  // border: ${({ theme }) => theme.borders.slimTranslucent};
  padding: 0.5rem 1.125rem;
  font-size: 0.8rem;
  border: none;

  & > div {
    gap: 0.5rem;
  }
`;

export default Navbar;
