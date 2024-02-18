import { StyledButton } from "../styles/Modal.styled";

type ModalButtonProps = {
  children: React.ReactNode;
  handleClick: () => void;
};

const ModalButton = ({ children, handleClick }: ModalButtonProps) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export default ModalButton;
