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
  getStatus,
  isPomodoroStageId,
  selectPomodoroId,
} from "../../redux/pomodoroSlice";

import { getVolume, stopSound } from "../../redux/soundSlice";
import { useRef } from "react";
import { Flex } from "src/components/styles/Flex.styled";
import { incrementActiveTask } from "src/redux/tasksSlice";
import { updatePreviousTheme } from "src/redux/stagesSlice";

type ControlsProps = {
  repeat: () => void;
};

const Controls = ({ repeat }: ControlsProps) => {
  const status = useSelector(getStatus);
  const stageId = useSelector(selectPomodoroId);

  const isPomodoro = useSelector(isPomodoroStageId);
  const volume = useSelector(getVolume);

  const dispatch = useDispatch();

  const isStart = status === "start";

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
    dispatch(updatePreviousTheme(stageId));
    dispatch(changeNextStage());
    dispatch(stopSound());
    if (isPomodoro) {
      dispatch(incrementActiveTask());
    }
  };

  return (
    <FlexControls>
      <ControlButton disabled={!isStart} handleButton={repeat}>
        <RepeatSvg />
      </ControlButton>
      <ControlButton handleButton={toggleCountdown}>
        {isStart ? <PauseSvg /> : <PlaySvg />}
      </ControlButton>
      <ControlButton disabled={!isStart} handleButton={updateStage}>
        <NextSvg />
      </ControlButton>
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
