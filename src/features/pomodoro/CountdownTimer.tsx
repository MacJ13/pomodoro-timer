import styled from "styled-components";
import { minTwoDigits } from "../../helpers/helpers";

type CountdownTimerProps = {
  duration: number;
};

const CountdownTimer = ({ duration }: CountdownTimerProps) => {
  const quotient = Math.trunc(duration / 60);
  const modulo = duration % 60;

  const minutes = minTwoDigits(quotient);
  const seconds = minTwoDigits(modulo);

  return (
    <Countdown>
      {minutes}:{seconds}
    </Countdown>
  );
};

const Countdown = styled.h1`
  font-size: 4.25rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0 auto;
  font-family: "Chivo Mono", monospace;
`;

export default CountdownTimer;
