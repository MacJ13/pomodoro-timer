import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  padding: 0.75rem 0;
  width: 100%;
  border-bottom: ${({ theme }) => theme.borders.slimTranslucent};
`;
