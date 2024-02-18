import { useSelector } from "react-redux";
import { getRound } from "../../redux/pomodoroSlice";
import styled from "styled-components";
import { Flex } from "src/components/styles/Flex.styled";

const CurrentRound = () => {
  const round = useSelector(getRound);

  return (
    <Round>
      <Button>#{Math.floor(round)}</Button>
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

  z-index: 2;
`;

const Button = styled.button`
  color: inherit;
  font-size: 1rem;
  font-weight: 600;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white025};
  }
`;

export default CurrentRound;
