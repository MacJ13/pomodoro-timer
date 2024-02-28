import styled from "styled-components";

import PlaySvg from "../../assets/icons/play.svg?react";
import PauseSvg from "../../assets/icons/pause.svg?react";
import RepeatSvg from "../../assets/icons/repeat.svg?react";
import NextSvg from "../../assets/icons/next.svg?react";

import { useDispatch, useSelector } from "react-redux";

import SWITCH_SOUND from "src/assets/audio/switch.mp3";
import ControlButton from "./ControlButton";

import {
  changeNextStage,
  changeStatus,
  isPomodoroStageId,
  isStartStatus,
} from "../../redux/pomodoroSlice";

import { getVolume, stopSound } from "../../redux/soundSlice";
import { useRef } from "react";
import { Flex } from "src/components/styles/Flex.styled";
import { incrementActiveTask } from "src/redux/tasksSlice";
import { HandlerProps } from "src/utils/types/types";

const Controls = ({ handleClick }: HandlerProps) => {
  // const status = useSelector(getStatus);
  const isTimerRunning = useSelector(isStartStatus);

  const isPomodoro = useSelector(isPomodoroStageId);
  const volume = useSelector(getVolume);

  const dispatch = useDispatch();

  // const isStart = status === "start";

  const audioRef = useRef<HTMLAudioElement>(new Audio(SWITCH_SOUND));

  const clickSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.volume = volume;
    audioRef.current.play();
  };

  const toggleCountdown = () => {
    dispatch(changeStatus());
    dispatch(stopSound());
    clickSound();
  };

  const updateStage = () => {
    dispatch(changeNextStage());
    dispatch(stopSound());
    if (isPomodoro) {
      dispatch(incrementActiveTask());
    }
  };

  return (
    <FlexControls>
      <ControlButton
        svg={<RepeatSvg />}
        disabled={!isTimerRunning}
        handleClick={handleClick}
      />
      <ControlButton
        svg={isTimerRunning ? <PauseSvg /> : <PlaySvg />}
        handleClick={toggleCountdown}
      />
      <ControlButton
        svg={<NextSvg />}
        disabled={!isTimerRunning}
        handleClick={updateStage}
      />
    </FlexControls>
  );
};

const FlexControls = styled(Flex)`
  margin: 1.8rem 0 2.25rem 0;
  gap: 5rem;

  & > button:first-child,
  & > button:last-child {
    top: -1rem;

    &:active {
      opacity: 1;
    }
  }
`;

export default Controls;
