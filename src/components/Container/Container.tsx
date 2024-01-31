import styled from "styled-components";
import { ChildrenProps } from "../../types/types";

const Wrapper = styled.div<{ $background?: string }>`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.$background};
`;

const Container = ({ children }: ChildrenProps) => {
  return <Wrapper $background="#eb3838">{children}</Wrapper>;
};

export default Container;
