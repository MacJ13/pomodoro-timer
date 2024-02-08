import styled from "styled-components";

import SoundList from "./SoundList";
import RepeatSound from "./RepeatSound";
import SoundVolume from "./SoundVolume";

const UpdateSound = () => {
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

export default UpdateSound;
