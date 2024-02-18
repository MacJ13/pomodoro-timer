import styled from "styled-components";
import { Stage } from "../../types/types";
import { useSelector } from "react-redux";
import { getStatus } from "src/redux/pomodoroSlice";

type CircularProgressProps = {
  stage: Stage;
  size: number;
  current: number;
};

const CircularProgress = ({ stage, size, current }: CircularProgressProps) => {
  const status = useSelector(getStatus);

  const duration = status === "start" ? current : stage.duration;

  const hiddenAnimation = current === stage.duration && document.hidden;

  const strokeWidth = 8;

  const circleRadius = size / 2 - strokeWidth + 2;
  const difference = (duration / stage.duration) * 100;
  const offsetProgress = 100 - difference;
  const circumreference = 2 * Math.PI * circleRadius;
  const offset = circumreference * ((100 - offsetProgress) / 100);

  return (
    <Wrapper $status={status} $hidden={hiddenAnimation}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          transform: "rotate(-90deg)",
        }}
      >
        <circle
          r={circleRadius}
          cx="50%"
          cy="50%"
          fill="transparent"
          //   stroke="#e0e0e0"
          stroke="#ffffff"
          opacity={0.33}
          strokeWidth={strokeWidth}
        ></circle>
        <circle
          r={circleRadius}
          cx="50%"
          cy="50%"
          fill="transparent"
          //   stroke="#ffffff"
          stroke="#ffffff"
          // opacity={0.5}
          // stroke={stage.color}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumreference}px`}
          strokeDashoffset={`${offset}px`}
        ></circle>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $status: string; $hidden: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${(props) => (props.$hidden ? "" : "& circle { transition: all 1s linear; }")}
`;

export default CircularProgress;
