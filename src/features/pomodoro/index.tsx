import { useState } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { selectPomodoro } from "../../redux/pomodoroSlice";
import { selectStageById } from "../../redux/stagesSlice";
import { RootState } from "../../redux/store";
import CountdownTimer from "./CountdownTimer";
import CircularProgress from "./CircularProgress";

const PomodoroTimer = () => {
  const { stageId } = useSelector(selectPomodoro);

  const stage = useSelector((state: RootState) =>
    selectStageById(state, stageId)
  )!;

  const [duration] = useState<number>(stage.duration);

  return (
    <div>
      <CountdownWrapper $height={20} $width={20}>
        <CircularProgress stage={stage} size={300} current={duration} />
        <CountdownTimer duration={duration} />
      </CountdownWrapper>
    </div>
  );
};

const CountdownWrapper = styled.div<{ $height: number; $width: number }>`
  position: relative;
  height: ${(props) => props.$height}rem;
  width: ${(props) => props.$width}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

export default PomodoroTimer;
