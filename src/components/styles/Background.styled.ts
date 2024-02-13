import styled from "styled-components";

export const Background = styled.div<{ $background: string; $hidden: boolean }>`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: ${(props) => props.$background};

  ${(props) => (!props.$hidden ? "transition: background 0.5s linear;" : "")}
`;
