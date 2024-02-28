import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { clearInterval, setInterval } from "worker-timers";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectPomodoro,
  changeNextStage,
  startAutoCountdown,
  isPomodoroStageId,
  isStartStatus,
} from "../../redux/pomodoroSlice";

import { playSound } from "../../redux/soundSlice";

import { selectStageById } from "../../redux/stagesSlice";
import { AppDispatch, RootState } from "../../redux/store";
import CircularProgress from "./CircularProgress";
import Countdown from "./Countdown";
import Controls from "./Controls";
import { incrementActiveTask } from "src/redux/tasksSlice";
const ControlTimer = () => {
  const { stageId, status } = useSelector(selectPomodoro);

  const isPomodoro = useSelector(isPomodoroStageId);
  const isTimerRunning = useSelector(isStartStatus);

  const stage = useSelector((state: RootState) =>
    selectStageById(state, stageId)
  )!;

  const dispatch = useDispatch<AppDispatch>();

  const [duration, setDuration] = useState<number>(stage.duration);
  const [currentId, setCurrentId] = useState<string>(stage.id);

  const intervalRef = useRef<number | null>(null);

  const repeatStage = () => {
    setDuration(stage.duration);
  };

  // useEffect(() => {
  //   flushSync(() => {
  //     setDuration(stage.duration);
  //   });
  // }, [stageId]);

  useEffect(() => {
    if (currentId === stage.id) {
      setDuration(stage.duration);
    }
  }, [stage.duration]);

  useLayoutEffect(() => {
    if (status !== "idle") {
      setDuration(stage.duration);
      setCurrentId(stage.id);
    }
  }, [stageId]);

  useEffect(() => {
    const promise = dispatch(startAutoCountdown());

    return () => {
      promise.abort();
    };
  }, [stageId]);

  useEffect(() => {
    if (duration < 0 && isTimerRunning) {
      if (isPomodoro) {
        dispatch(incrementActiveTask());
      }
      dispatch(changeNextStage());
      dispatch(playSound());
    } else if (isTimerRunning) {
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
      <Controls handleClick={repeatStage} />
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
