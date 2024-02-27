import styled from "styled-components";
import { minTwoDigits } from "../../utils/helpers/helpers";

type CountdownProps = {
  duration: number;
};

const Countdown = ({ duration }: CountdownProps) => {
  const quotient = Math.trunc(duration / 60);
  const modulo = duration % 60;

  const minutes = minTwoDigits(quotient);
  const seconds = minTwoDigits(modulo);

  return (
    <Counter>
      {minutes}:{seconds}
    </Counter>
  );
};

const Counter = styled.h1`
  font-size: 4.25rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0 auto;
  font-family: "Chivo Mono", monospace;
`;

export default Countdown;
