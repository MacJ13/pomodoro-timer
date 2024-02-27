import styled from "styled-components";
import { Stage } from "../../utils/types/types";
import { useSelector } from "react-redux";
import { getStatus } from "src/redux/pomodoroSlice";

type CircularProgressProps = {
  stage: Stage;
  size: number;
  current: number;
};

const CircularProgress = ({ stage, size, current }: CircularProgressProps) => {
  const status = useSelector(getStatus);

  const duration = current;

  const hiddenAnimation = current === stage.duration && document.hidden;

  const strokeWidth = 8;

  const circleRadius = size / 2 - strokeWidth + 5;
  const difference = (duration / stage.duration) * 100;
  const offsetProgress = 100 - difference;
  const circumreference = 2 * Math.PI * circleRadius;
  const offset = circumreference * ((100 - offsetProgress) / 100);

  return (
    <Wrapper $duration={duration} $status={status} $hidden={hiddenAnimation}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          transform: "rotate(-90deg)",
          boxShadow: "-2px 0px 0px 2px rgba(255, 255, 255, 0.125)",
          borderRadius: "50%",
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
          id="circle2"
          r={circleRadius}
          cx="50%"
          cy="50%"
          fill="transparent"
          //   stroke="#ffffff"
          stroke="#ffffff"
          // opacity={0.5}
          // stroke={stage.color}
          // strokeLinecap="round"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumreference}px`}
          strokeDashoffset={`${offset}px`}
        ></circle>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  $status: string;
  $duration: number;
  $hidden: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @keyframes animate {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  ${(props) =>
    props.$duration === 0
      ? ` & #circle2 { animation: animate 0.75s linear forwards }`
      : ""}
`;

// ${(props) =>
// props.$hidden ? "" : "& circle { transition: all 1s linear; }"}

export default CircularProgress;
