import { ModalContent, StyledModal } from "../styles/Modal.styled";

import { ChildrenProps } from "src/types/types";

type ModalProps = {
  handleClick: () => void;
} & ChildrenProps;

const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
};

const Modal = ({ handleClick, children }: ModalProps) => {
  return (
    <StyledModal onClick={handleClick}>
      <ModalContent onClick={stopPropagation}>{children}</ModalContent>
    </StyledModal>
  );
};

export default Modal;