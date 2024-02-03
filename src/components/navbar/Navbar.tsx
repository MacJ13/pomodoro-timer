import { useDispatch } from "react-redux";
import Settings from "../../assets/icons/settings.svg?react";
import styled from "styled-components";
import { toggleSettings } from "../../redux/settingsSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <Nav>
      <NavHeading>Pomodoro timer</NavHeading>
      <div>
        <Button onClick={() => dispatch(toggleSettings())}>
          <ButtonWrapper>
            <Settings />
          </ButtonWrapper>
          <ButtonText className="font-normal text-sm">Settings</ButtonText>
        </Button>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;

  margin: 0 auto;
  max-width: 30rem;
  width: 100%;
`;

const NavHeading = styled.h2`
  font-size: 1.25rem;
`;

const Button = styled.button`
  position: relative;
  display: flex;
  padding: 0.45rem 0.75rem;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 0.5rem;

  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 1rem;
  height: 1rem;
`;

const ButtonText = styled.span`
  color: #fff;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export default Navbar;
