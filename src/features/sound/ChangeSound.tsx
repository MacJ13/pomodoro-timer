import styled from "styled-components";

import SoundList from "../sound/SoundList";
import RepeatSound from "../sound/RepeatSound";
import SoundVolume from "./SoundVolume";

const ChangeSound = () => {
  return (
    <Wrapper>
      <SoundList />
      <SoundVolume />
      <RepeatSound />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

export default ChangeSound;
