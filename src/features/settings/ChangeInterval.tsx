import { useDispatch, useSelector } from "react-redux";
import { changeInterval, selectPomodoro } from "../../redux/pomodoroSlice";
import SettingsInput from "./SettingsInput";
import SettingsRow from "./SettingsRow";

const ChangeInterval = () => {
  const { longBreakInterval } = useSelector(selectPomodoro);
  const dispatch = useDispatch();

  return (
    <SettingsRow title="Long Break Interval">
      <SettingsInput
        count={longBreakInterval}
        onChange={(num) => {
          dispatch(changeInterval(num));
        }}
      />
    </SettingsRow>
  );
};

export default ChangeInterval;
