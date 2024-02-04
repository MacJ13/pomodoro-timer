import { useDispatch, useSelector } from "react-redux";
import { selectAllStages } from "../../redux/stagesSlice";
import SettingsRow from "./SettingsRow";
import styled from "styled-components";
import { openTheme } from "../../redux/settingsSlice";
import { StageId } from "../../types/types";

const SettingsTheme = () => {
  const stages = useSelector(selectAllStages);

  const dispatch = useDispatch();

  const openChangeSettings = (id: StageId, color: string) => {
    dispatch(openTheme({ id, color }));
  };

  const renderedButtons = stages.map((stage) => {
    return (
      <ThemeButton
        key={stage.id}
        onClick={() => {
          openChangeSettings(stage.id, stage.color);
        }}
        $current={stage.color}
      />
    );
  });

  return (
    <SettingsRow title="Themes">
      <div>{renderedButtons}</div>
    </SettingsRow>
  );
};

const ThemeButton = styled.button<{ $current: string }>`
  border-radius: 0.45rem;

  background-color: ${(props) => `${props.$current}`};

  height: 2.2rem;

  margin-left: 1rem;

  width: 2.25rem;
`;

export default SettingsTheme;
