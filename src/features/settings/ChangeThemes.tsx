import styled from "styled-components";
import { THEMES } from "../../utils/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  getStageColor,
  getStageId,
  toggleTheme,
} from "../../redux/settingsSlice";
import { changeStageColor } from "../../redux/stagesSlice";
import { StageId } from "../../utils/types/types";

const ChangeThemes = () => {
  const stageId = useSelector(getStageId);
  const color = useSelector(getStageColor);
  const dispatch = useDispatch();

  const clickTheme = (id: StageId, color: string) => {
    dispatch(changeStageColor({ id, newColor: color }));
    dispatch(toggleTheme());
  };

  const renderedButtons = THEMES.map((theme) => {
    if (theme === color) return null;

    return (
      <ThemeButton
        key={theme}
        onClick={() => {
          clickTheme(stageId, theme);
        }}
        $current={theme}
      />
    );
  });
  return <div>{renderedButtons}</div>;
};

const ThemeButton = styled.button<{ $current: string }>`
  border-radius: 0.45rem;

  background-color: ${(props) => `${props.$current}`};

  height: 2.5rem;

  margin-right: 1rem;

  width: 2.5rem;
`;

export default ChangeThemes;
