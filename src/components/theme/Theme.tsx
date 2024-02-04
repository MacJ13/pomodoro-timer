import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectPomodoroId } from "../../redux/pomodoroSlice";
import { selectStageColor } from "../../redux/stagesSlice";
import { RootState } from "../../redux/store";

const Theme = () => {
  const stageId = useSelector(selectPomodoroId);

  const stageColor = useSelector((state: RootState) =>
    selectStageColor(state, stageId)
  )!;

  return <Bacground $background={stageColor} />;
};

const Bacground = styled.div<{ $background?: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${(props) => props.$background};

  transition: background 1s;
`;

export default Theme;
