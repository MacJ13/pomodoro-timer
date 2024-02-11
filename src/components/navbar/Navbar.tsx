import { useDispatch } from "react-redux";
import Settings from "../../assets/icons/settings.svg?react";
import { toggleSettings } from "../../redux/settingsSlice";
import { Flex } from "../styles/Flex.styled";
import { Icon } from "../styles/Icon.styled";
import { ButtonNav, FlexNav, Nav } from "../styles/Nav.styled";

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

export default Navbar;
