import styled from "styled-components";

type FlexProps = {
  $align?: string;
  $justify?: string;
  $direction?: string;
  $gap?: string;
  $mg_bottom?: string;
};

export const Flex = styled.div<FlexProps>`
  align-items: ${({ $align }) => $align || "center"};
  display: flex;
  flex-direction: ${({ $direction }) => $direction || "row"};
  gap: ${({ $gap }) => $gap || "0"};
  justify-content: ${({ $justify }) => $justify || "center"};
  ${({ $mg_bottom }) => ($mg_bottom ? `margin-bottom: ${$mg_bottom};` : "")};
`;
