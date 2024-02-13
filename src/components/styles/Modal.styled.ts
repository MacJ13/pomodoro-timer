import styled from "styled-components";
import { Flex } from "./Flex.styled";

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
  padding: 1rem 1.5rem;
  margin: auto;
  overflow: hidden;
`;
