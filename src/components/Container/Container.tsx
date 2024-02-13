import styled from "styled-components";
import { ChildrenProps } from "../../types/types";
import ChangeTheme from "src/features/stages/ChangeTheme";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = ({ children }: ChildrenProps) => {
  return (
    <Wrapper>
      <ChangeTheme />
      {children}
    </Wrapper>
  );
};

export default Container;
