import styled from "styled-components";
import { Flex } from "./Flex.styled";
import { Button } from "./Button.styled";

export const StyledModal = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black025};
  overflow: hidden scroll;
  padding: 3rem 0;
  z-index: 5;
`;

export const ModalContent = styled.div`
  display: block;
  position: relative;
  background-color: white;
  border-radius: 0.75rem;
  color: grey;
  width: 100%;
  max-width: 30rem;
  margin: auto;
  overflow: hidden;
`;

export const ModalWrapper = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  padding: 0.75rem 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;

  background-color: ${({ theme }) => theme.colors.black05};
`;
