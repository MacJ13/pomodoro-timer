import styled from "styled-components";

export const Background = styled.div<{ $background: string }>`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: ${(props) => props.$background};

  transition: background 1s;
`;
