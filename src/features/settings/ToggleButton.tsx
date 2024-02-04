import { useState } from "react";
import styled from "styled-components";
import { ToggleButtonProps } from "../../types/types";

const ToggleButton = ({ active, onClick }: ToggleButtonProps) => {
  const [toggle, setToggle] = useState(active);

  return (
    <Button
      active={toggle}
      onClick={() => {
        setToggle(!toggle);
        onClick(!toggle);
      }}
    >
      <Switch active={toggle} />
    </Button>
  );
};

const Button = styled.button<{ active: boolean }>`
  position: relative;
  width: 4rem;
  height: 2.2rem;

  border-radius: 1.5rem;
  background-color: ${(props) =>
    !props.active ? "rgb(241, 241, 241)" : "#81ea44"};
`;

const Switch = styled.div<{ active: boolean }>`
  position: absolute;
  width: calc(2.2rem - 0.4rem);
  height: calc(2.2rem - 0.4rem);
  top: 0.2rem;
  left: ${(props) =>
    !props.active ? "0.2rem" : "calc(100% - 2.2rem + 0.2rem)"};

  background-color: white;
  border-radius: 50%;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.175);
`;

export default ToggleButton;
