import styled from "styled-components";
import { Icon } from "src/components/styles/Icon.styled";

type ButtonProps = {
  children: React.ReactElement;
  handleButton: () => void;
  disabled?: boolean;
};

const ControlButton = ({ disabled, handleButton, children }: ButtonProps) => {
  return (
    <Button disabled={disabled || false} onClick={handleButton}>
      <Icon>{children}</Icon>
    </Button>
  );
};

const Button = styled.button`
  position: relative;
  opacity: 0.75;

  transition: opacity 0.33s;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0 !important;
    pointer-events: none;
  }
`;

export default ControlButton;
