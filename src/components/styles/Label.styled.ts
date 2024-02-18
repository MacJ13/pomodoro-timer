import styled from "styled-components";

export const Label = styled.label<{ $width?: string }>`
  color: ${({ theme }) => theme.colors.black0375};
  font-weight: 600;
  font-size: 0.9rem;
  width: ${(props) => props.$width || "auto"};
`;
