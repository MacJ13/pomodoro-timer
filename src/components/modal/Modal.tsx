import { ModalProps } from "src/utils/types/types";
import {
  ModalContent,
  ModalWrapper,
  StyledModal,
} from "../styles/Modal.styled";

const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
};

const Modal = ({ handleClick, children }: ModalProps) => {
  return (
    <StyledModal onClick={handleClick}>
      <ModalContent onClick={stopPropagation}>
        <ModalWrapper id="modal-wrapper">{children}</ModalWrapper>
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;
