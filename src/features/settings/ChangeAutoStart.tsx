import { useDispatch, useSelector } from "react-redux";
import { selectPomodoro, toggleAutoStart } from "../../redux/pomodoroSlice";
import SettingsRow from "./SettingsRow";
import ToggleButton from "./ToggleButton";
import { getTitleWords } from "../../helpers/helpers";

const ChangeAutoStart = () => {
  const { autoStartBreaks, autoStartPomodoros } = useSelector(selectPomodoro);

  const dispatch = useDispatch();

  const renderedAutoStart = Object.entries({
    autoStartBreaks,
    autoStartPomodoros,
  }).map((autoStart) => {
    const [name, value] = autoStart;

    const title = getTitleWords(name);

    return (
      <SettingsRow key={name} title={title}>
        <ToggleButton
          active={value}
          onClick={(active) => {
            dispatch(toggleAutoStart({ name, active }));
          }}
        />
      </SettingsRow>
    );
  });

  return <>{renderedAutoStart}</>;
};

export default ChangeAutoStart;
