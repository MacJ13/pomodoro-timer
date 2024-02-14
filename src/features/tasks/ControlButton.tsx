import { Button } from "src/components/styles/Button.styled";
import styled from "styled-components";

type ControlButtonProps = {
  children: React.ReactNode;
  handleClick: () => void;
};

const ControlButton = ({ children, handleClick }: ControlButtonProps) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

const StyledButton = styled(Button)`
  padding: 0.75rem 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;

  background-color: ${({ theme }) => theme.colors.black05};
`;

export default ControlButton;
