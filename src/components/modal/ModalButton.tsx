import { ModalButtonProps } from "src/utils/types/types";
import { StyledButton } from "../styles/Modal.styled";

const ModalButton = ({ children, handleClick }: ModalButtonProps) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export default ModalButton;
