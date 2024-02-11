import styled from "styled-components";

export const Icon = styled.div<{ $size?: string }>`
  width: ${(props) => props.$size || "1.75rem"};
  height: ${(props) => props.$size || "1.75rem"};

  & > svg {
    display: block;
  }
`;
