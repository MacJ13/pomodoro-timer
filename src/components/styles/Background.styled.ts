import styled from "styled-components"; // ,{ keyframes }

// const colorize = (previous: string, next: string) => keyframes`
//   0%{
//     background-color: ${previous};
//   }

//   100% {
//     background-color: ${next}
//   }
// `;

export const Background = styled.div<{
  $theme: string;
  $hidden: boolean;
}>`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.$theme};

  ${(props) => (!props.$hidden ? "transition: background-color 0.5s;" : "")}
`;

// animation: ${(
//   props
// ) => colorize(props.$previous, props.$next)} 0.5s linear
//   forwards;

// ${(props) =>
// props.$hidden ? "animation-play-state: paused" : ""}
