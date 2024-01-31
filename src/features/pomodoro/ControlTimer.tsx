import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectPomodoro, changeStatus } from "../../redux/pomodoroSlice";
import { selectStageById } from "../../redux/stagesSlice";
import { RootState } from "../../redux/store";
import CircularProgress from "./CircularProgress";
import Countdown from "./Countdown";

const ControlTimer = () => {
  const { stageId, status } = useSelector(selectPomodoro);

  const stage = useSelector((state: RootState) =>
    selectStageById(state, stageId)
  )!;

  const dispatch = useDispatch();

  const [duration, setDuration] = useState<number>(stage.duration);

  const intervalRef = useRef<number | null>(null);

  const isRunning = status === "start";

  useEffect(() => {
    if (duration <= 0 && isRunning) {
      dispatch(changeStatus());
    } else if (isRunning) {
      startTimer();
    }

    return () => {
      pauseTimer();
    };
  }, [status, duration]);

  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startTimer = () => {
    if (intervalRef.current === null)
      intervalRef.current = setInterval(() => {
        setDuration((prevDuration) => prevDuration - 1);
      }, 1000);
  };

  return (
    <div>
      <CountdownWrapper $height={20} $width={20}>
        <CircularProgress stage={stage} size={300} current={duration} />
        <Countdown duration={duration} />
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

export default ControlTimer;
