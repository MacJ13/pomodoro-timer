import styled from "styled-components";
import { Icon } from "src/components/styles/Icon.styled";
import { ControlButtonProps } from "src/utils/types/types";

const ControlButton = ({
  disabled = false,
  handleClick,
  svg,
}: ControlButtonProps) => {
  return (
    <Button disabled={disabled} $hidden={document.hidden} onClick={handleClick}>
      <Icon>{svg}</Icon>
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
