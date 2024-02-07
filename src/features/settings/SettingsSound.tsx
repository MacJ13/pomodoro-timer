import ChangeSound from "../sound/ChangeSound";
import SettingsRow from "./SettingsRow";

const SettingsSound = () => {
  return (
    <SettingsRow title="Sound Alarm">
      <ChangeSound />
    </SettingsRow>
  );
};

export default SettingsSound;
