import { useDispatch } from "react-redux";
import Settings from "../../assets/icons/settings.svg?react";
import { toggleSettings } from "../../redux/settingsSlice";
import { Flex } from "../styles/Flex.styled";
import { Icon } from "../styles/Icon.styled";
import { ButtonNav, Nav } from "../styles/Nav.styled";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <Nav>
      <Flex $justify="space-between">
        <h2>Pomodoro timer</h2>
        <ButtonNav onClick={() => dispatch(toggleSettings())}>
          <Flex $gap="0.5rem">
            <Icon $size="1rem">
              <Settings />
            </Icon>
            Settings
          </Flex>
        </ButtonNav>
      </Flex>
    </Nav>
  );
};

export default Navbar;
