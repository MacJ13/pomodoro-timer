import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectPomodoroId } from "../../redux/pomodoroSlice";
import { selectStageById } from "../../redux/stagesSlice";
import { RootState } from "../../redux/store";

const Bg = styled.div<{ $background?: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${(props) => props.$background};

  transition: background 0.5s;
`;

const Background = () => {
  const stageId = useSelector(selectPomodoroId);

  const stage = useSelector((state: RootState) =>
    selectStageById(state, stageId)
  )!;

  return <Bg $background={stage.color} />;
};

export default Background;
