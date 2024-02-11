import { useDispatch, useSelector } from "react-redux";
import SettingsInput from "../settings/SettingsInput";
import { getRepeat, updateRepeat } from "src/redux/soundSlice";
import { Label } from "src/components/styles/Label.styled";
import { Flex } from "src/components/styles/Flex.styled";

const RepeatSound = () => {
  const repeating = useSelector(getRepeat);
  const dispatch = useDispatch();

  return (
    <Flex $gap="1rem">
      <Label>repeat</Label>
      <SettingsInput
        count={repeating}
        onChange={(newMinute) => {
          dispatch(updateRepeat(Number(newMinute)));
        }}
      />
    </Flex>
  );
};

export default RepeatSound;
