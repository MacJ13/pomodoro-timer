import styled from "styled-components";
import { Icon } from "src/components/styles/Icon.styled";

type ButtonProps = {
  children: React.ReactElement;
  handleButton: () => void;
  disabled?: boolean;
};

const ControlButton = ({
  disabled = false,
  handleButton,
  children,
}: ButtonProps) => {
  return (
    <Button
      disabled={disabled}
      $hidden={document.hidden}
      onClick={handleButton}
    >
      <Icon>{children}</Icon>
    </Button>
  );
};

const Button = styled.button<{ $hidden: boolean }>`
  position: relative;
  opacity: 0.75;

  ${({ $hidden }) => (!$hidden ? "transition: opacity 0.33s;" : "")}

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0 !important;
    pointer-events: none;
  }
`;

export default ControlButton;
