import styled from "styled-components";
import { ChildrenProps } from "../../types/types";
import Background from "../background/Background";

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
      <Background />
      {children}
    </Wrapper>
  );
};

export default Container;
