import styled from "styled-components";

export const Icon = styled.div<{ $size: string }>`
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};

  & > svg {
    display: block;
  }
`;
