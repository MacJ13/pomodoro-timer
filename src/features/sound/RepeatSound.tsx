import { useDispatch, useSelector } from "react-redux";
import SettingsInput from "../settings/SettingsInput";
import { SoundItem } from "./styled";
import { getRepeat, updateRepeat } from "src/redux/soundSlice";

const RepeatSound = () => {
  const repeating = useSelector(getRepeat);
  const dispatch = useDispatch();

  return (
    <SoundItem>
      <label>repeat</label>
      <SettingsInput
        count={repeating}
        onChange={(newMinute) => {
          dispatch(updateRepeat(Number(newMinute)));
        }}
      />
    </SoundItem>
  );
};

export default RepeatSound;
