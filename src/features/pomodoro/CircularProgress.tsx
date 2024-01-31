import styled from "styled-components";
import { Stage } from "../../types/types";

type CircularProgressProps = {
  stage: Stage;
  size: number;
  current: number;
};

const CircularProgress = ({ stage, size, current }: CircularProgressProps) => {
  const strokeWidth = 5;

  const circleSize = size / 2;
  const circleRadius = size / 2 - strokeWidth;
  // circumference = 2 × π × radius
  const difference = (current / stage.duration) * 100;
  const offsetProgress = 100 - difference;
  // offset = circumference × ((100 - progress)/100)
  const circumreference = 2 * Math.PI * circleRadius;
  const offset = circumreference * ((100 - offsetProgress) / 100);

  return (
    <Wrapper>
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
          cx={circleSize}
          cy={circleSize}
          fill="transparent"
          //   stroke="#e0e0e0"
          stroke="#ffffff"
          opacity={0.5}
          strokeWidth={strokeWidth}
        ></circle>
        <circle
          r={circleRadius}
          cx={circleSize}
          cy={circleSize}
          fill="transparent"
          //   stroke="#ffffff"

          stroke={stage.color}
          //   strokeLinecap="round"
          //   opacity={0.5}
          strokeWidth={strokeWidth + 2}
          strokeDasharray={`${circumreference}px`}
          strokeDashoffset={`${offset}px`}
        ></circle>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default CircularProgress;