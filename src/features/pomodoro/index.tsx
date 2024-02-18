import styled from "styled-components";
import SwitchStages from "../stages/SwitchStages";
import ControlTimer from "./ControlTimer";
import CurrentRound from "./CurrentRound";

const PomodoroTimer = () => {
  return (
    <Wrapper>
      <SwitchStages />
      <ControlTimer />
      <CurrentRound />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 2.25rem 1rem;
`;

export default PomodoroTimer;
