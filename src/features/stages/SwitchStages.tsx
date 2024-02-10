import { useSelector } from "react-redux";
import { selectAllStages } from "../../redux/stagesSlice";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeStageId, selectPomodoroId } from "../../redux/pomodoroSlice";
import { StageId } from "../../types/types";
import { capitalize } from "src/helpers/helpers";

const SwitchStages = () => {
  const stages = useSelector(selectAllStages);

  const currentId = useSelector(selectPomodoroId);

  const dispatch = useDispatch();

  const changeStage = (id: StageId) => {
    dispatch(changeStageId(id));
  };

  const buttonStages = stages.map((stage) => (
    <Button
      $active={currentId === stage.id}
      key={stage.id}
      onClick={() => {
        changeStage(stage.id);
      }}
    >
      {capitalize(stage.name)}
    </Button>
  ));

  return <Stages>{buttonStages}</Stages>;
};

const Stages = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  position: relative;
`;

const Button = styled.button<{ $active: boolean }>`
  border-radius: 0.375rem;
  padding: 0.5rem 0;
  border: ${(props) =>
    props.$active
      ? props.theme.borders.slimFull
      : props.theme.borders.slimTranslucent};

  background-color: transparent;
  color: #fff;
  font-weight: ${(props) => (props.$active ? 600 : 500)};

  transition: background-color 0.25s;
  width: 7.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }

  &:active {
    transform: translateY(2px);
  }
`;

export default SwitchStages;
