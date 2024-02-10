import { useDispatch } from "react-redux";
import Settings from "../../assets/icons/settings.svg?react";
import styled from "styled-components";
import { toggleSettings } from "../../redux/settingsSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <Nav>
      <Title>Pomodoro timer</Title>
      <div>
        <Button onClick={() => dispatch(toggleSettings())}>
          <SvgWrapper>
            <Settings />
          </SvgWrapper>
          <ButtonText>Settings</ButtonText>
        </Button>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 30rem;
  padding: 0 1rem;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 1.25rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: ${({ theme }) => theme.borders.slimTranslucent};
  border-radius: 0.5rem;

  align-items: center;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;

  padding: 0.5rem 1.125rem;

  transition: background-color 0.25s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white025};
  }

  &:active {
    transform: translateY(2px);
  }
`;

const SvgWrapper = styled.div`
  width: 1rem;
  height: 1rem;

  & > svg {
    display: block;
  }
`;

const ButtonText = styled.span`
  color: #fff;
  font-size: 0.775rem;
  font-weight: 500;
  letter-spacing: 1px;
`;

export default Navbar;
