import SettingsInput from "../settings/SettingsInput";
import { SoundItem } from "./styled";

const RepeatSound = () => {
  return (
    <SoundItem>
      <label>repeat</label>
      <SettingsInput
        count={1}
        onChange={(newMinute) => {
          console.log(newMinute);
        }}
      />
    </SoundItem>
  );
};

export default RepeatSound;
