import { useSelector } from "react-redux";
import { getRound } from "../../redux/pomodoroSlice";
import styled from "styled-components";
import { Flex } from "src/components/styles/Flex.styled";

const CurrentRound = () => {
  const round = useSelector(getRound);

  return (
    <Round>
      <button>#{Math.floor(round)}</button>
    </Round>
  );
};

const Round = styled(Flex)`
  position: absolute;

  left: 50%;
  bottom: calc(1.75rem);

  transform: translateX(-50%);

  font-family: "Chivo Mono", monospace;
  opacity: 0.75;

  border-radius: 50%;
  z-index: 2;

  & > button {
    color: inherit;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export default CurrentRound;
