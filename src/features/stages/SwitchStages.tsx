import { useSelector } from "react-redux";
import { selectAllStages } from "../../redux/stagesSlice";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeStageId, selectPomodoroId } from "../../redux/pomodoroSlice";
import { StageId } from "../../types/types";

const SwitchStages = () => {
  const stages = useSelector(selectAllStages);

  const currentId = useSelector(selectPomodoroId);

  const dispatch = useDispatch();

  const changeStage = (id: StageId) => {
    dispatch(changeStageId(id));
  };

  const buttonStages = stages.map((stage) => (
    <Button
      active={currentId === stage.id}
      key={stage.id}
      onClick={() => {
        changeStage(stage.id);
      }}
    >
      {stage.name}
    </Button>
  ));

  return <Stages>{buttonStages}</Stages>;
};

const Stages = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 1.25rem 0;
  margin: 1rem 0;
`;

const Button = styled.button<{ active: boolean }>`
  width: 7.5rem;
  border-radius: 0.375rem;
  padding: 0.5rem 0;
  background-color: rgba(255, 255, 255, 0.25);
  font-weight: ${(props) => (props.active ? 600 : 500)};
  color: #fff;
`;

export default SwitchStages;
