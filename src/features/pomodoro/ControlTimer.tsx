import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { clearInterval, setInterval } from "worker-timers";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectPomodoro, changeNextStage } from "../../redux/pomodoroSlice";
import { selectStageById } from "../../redux/stagesSlice";
import { RootState } from "../../redux/store";
import CircularProgress from "./CircularProgress";
import Countdown from "./Countdown";
import Controls from "./Controls";

const ControlTimer = () => {
  const { stageId, status } = useSelector(selectPomodoro);

  const stage = useSelector((state: RootState) =>
    selectStageById(state, stageId)
  )!;

  const dispatch = useDispatch();

  const [duration, setDuration] = useState<number>(stage.duration);

  const intervalRef = useRef<number | null>(null);

  const isRunning = status === "start";

  // const changeStage = duration <= 0 && isRunning;
  const repeatStage = () => {
    setDuration(stage.duration);
  };

  // useEffect(() => {
  //   flushSync(() => {
  //     setDuration(stage.duration);
  //   });
  // }, [stageId]);

  useLayoutEffect(() => {
    setDuration(stage.duration);
  }, [stageId]);

  useEffect(() => {
    if (duration < 0 && isRunning) {
      dispatch(changeNextStage());
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
      <Controls repeat={repeatStage} />
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
