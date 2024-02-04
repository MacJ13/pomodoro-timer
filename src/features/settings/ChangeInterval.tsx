import { useSelector } from "react-redux";
import { selectPomodoro } from "../../redux/pomodoroSlice";
import SettingsInput from "./SettingsInput";
import SettingsRow from "./SettingsRow";

const ChangeInterval = () => {
  const { longBreakInterval } = useSelector(selectPomodoro);

  return (
    <SettingsRow title="Long Break Interval">
      <SettingsInput
        count={longBreakInterval}
        onChange={(num) => console.log(num)}
      />
    </SettingsRow>
  );
};

export default ChangeInterval;
