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
} from "../../redux/pomodoroSlice";

import { stopSound } from "../../redux/soundSlice";
import { useRef } from "react";
import { Flex } from "src/components/styles/Flex.styled";

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

  const toggleCountdown = () => {
    dispatch(changeStatus());
    dispatch(stopSound());
    clickSound();
  };

  const updateStage = () => {
    dispatch(changeNextStage());
    dispatch(stopSound());
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
  margin-top: 2.8rem;
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
