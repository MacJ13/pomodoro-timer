import { useSelector } from "react-redux";
import { selectPomodoroId } from "../../redux/pomodoroSlice";
import { selectStageColor } from "../../redux/stagesSlice";
import { RootState } from "../../redux/store";
import { Background } from "../styles/Background.styled";

const Theme = () => {
  const stageId = useSelector(selectPomodoroId);

  const stageColor = useSelector((state: RootState) =>
    selectStageColor(state, stageId)
  )!;

  return <Background $background={stageColor} />;
};

export default Theme;
