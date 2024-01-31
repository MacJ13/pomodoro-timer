import styled from "styled-components";

import PlaySvg from "../../assets/icons/play.svg?react";
import PauseSvg from "../../assets/icons/pause.svg?react";
import RepeatSvg from "../../assets/icons/repeat.svg?react";
import NextSvg from "../../assets/icons/next.svg?react";

const Controls = () => {
  return (
    <Bar>
      <Button>
        <RepeatSvg />
      </Button>

      <Button>
        <PlaySvg />
      </Button>

      <Button>
        <NextSvg />
      </Button>
    </Bar>
  );
};

const Bar = styled.div`
  margin-top: 2.25rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  & > button:first-child,
  & > button:last-child {
    top: -1rem;

    &:active {
      opacity: 1;
    }
  }
`;

const Button = styled.button`
  position: relative;
  background-color: inherit;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #fff;
  height: 1.75rem;
  width: 1.75rem;
  opacity: 0.75;

  transition: opacity 0.25s;

  &:hover {
    opacity: 1;
  }
`;

export default Controls;
