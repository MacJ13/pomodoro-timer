import { useState } from "react";
import styled from "styled-components";
import { ToggleButtonProps } from "../../utils/types/types";

const ToggleButton = ({ active, onClick }: ToggleButtonProps) => {
  const [toggle, setToggle] = useState(active);

  return (
    <Button
      $active={toggle}
      onClick={() => {
        setToggle(!toggle);
        onClick(!toggle);
      }}
    >
      <Switch $active={toggle} />
    </Button>
  );
};

const Button = styled.button<{ $active: boolean }>`
  position: relative;
  width: 4rem;
  height: 2.2rem;

  border-radius: 1.5rem;
  background-color: ${({ $active, theme }) =>
    !$active ? theme.colors.lightGrey : theme.colors.lightGreen};
`;

const Switch = styled.div<{ $active: boolean }>`
  position: absolute;
  width: calc(2.2rem - 0.4rem);
  height: calc(2.2rem - 0.4rem);
  top: 0.2rem;
  left: ${({ $active }) =>
    !$active ? "0.2rem" : "calc(100% - 2.2rem + 0.2rem)"};

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.175);
`;

export default ToggleButton;
