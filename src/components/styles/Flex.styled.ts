import styled from "styled-components";

type FlexProps = {
  $align?: string;
  $justify?: string;
  $direction?: string;
  $gap?: string;
};

export const Flex = styled.div<FlexProps>`
  align-items: ${({ $align }) => $align || "center"};
  display: flex;
  flex-direction: ${({ $direction }) => $direction || "row"};
  gap: ${({ $gap }) => $gap || "0"};
  justify-content: ${({ $justify }) => $justify || "center"};
`;
