import SoundList from "./SoundList";
import RepeatSound from "./RepeatSound";
import SoundVolume from "./SoundVolume";
import { Flex } from "src/components/styles/Flex.styled";

const UpdateSound = () => {
  return (
    <Flex $align="flex-end" $direction="column" $gap="1rem">
      <SoundList />
      <SoundVolume />
      <RepeatSound />
    </Flex>
  );
};

export default UpdateSound;
