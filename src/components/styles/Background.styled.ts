import styled, { keyframes } from "styled-components";

const colorize = (previous: string, next: string) => keyframes`
  0%{
    background-color: ${previous};
  }

  100% {
    background-color: ${next}
  }
`;

export const Background = styled.div<{
  $previous: string;
  $next: string;
  $hidden: boolean;
}>`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.$previous};
  animation: ${(props) => colorize(props.$previous, props.$next)} 0.5s linear
    forwards;

  ${(props) => (props.$hidden ? "animation-play-state: paused" : "")}
`;
