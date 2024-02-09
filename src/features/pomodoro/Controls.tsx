import styled from "styled-components";

import PlaySvg from "../../assets/icons/play.svg?react";
import PauseSvg from "../../assets/icons/pause.svg?react";
import RepeatSvg from "../../assets/icons/repeat.svg?react";
import NextSvg from "../../assets/icons/next.svg?react";

import { useDispatch, useSelector } from "react-redux";

import SWITCH_SOUND from "src/assets/audio/switch.mp3";

import {
  changeNextStage,
  changeStatus,
  getStatus,
} from "../../redux/pomodoroSlice";

import { stopSound } from "../../redux/soundSlice";
import { useRef } from "react";

type ControlsProps = {
  repeat: () => void;
};

const Controls = ({ repeat }: ControlsProps) => {
  const dispatch = useDispatch();

  const status = useSelector(getStatus);

  const isStart = status === "start";

  const audioRef = useRef<HTMLAudioElement>(new Audio(SWITCH_SOUND));

  const clickSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <Bar>
      <Button disabled={!isStart} onClick={repeat}>
        <RepeatSvg />
      </Button>

      <Button
        onClick={() => {
          dispatch(changeStatus());
          dispatch(stopSound());
          clickSound();
          // isStart ? dispatch(stopSound()) : dispatch(playSwitchSound());
        }}
      >
        {isStart ? <PauseSvg /> : <PlaySvg />}
      </Button>

      <Button
        disabled={!isStart}
        onClick={() => {
          dispatch(changeNextStage());
          dispatch(stopSound());
        }}
      >
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
  pointer-events: auto;

  transition: opacity 0.33s;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0 !important;
    pointer-events: none;
  }
`;

export default Controls;
