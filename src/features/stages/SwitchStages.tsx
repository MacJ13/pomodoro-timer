import { useSelector } from "react-redux";
import { selectAllStages } from "../../redux/stagesSlice";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeStageId, selectPomodoroId } from "../../redux/pomodoroSlice";
import { StageId } from "../../types/types";
import { capitalize } from "src/helpers/helpers";
import { Button } from "src/components/styles/Button.styled";
import { Flex } from "src/components/styles/Flex.styled";

const SwitchStages = () => {
  const stages = useSelector(selectAllStages);

  const currentId = useSelector(selectPomodoroId);

  const dispatch = useDispatch();

  const changeStage = (id: StageId) => {
    dispatch(changeStageId(id));
  };

  const buttonStages = stages.map((stage) => (
    <StageButton
      $active={currentId === stage.id}
      key={stage.id}
      onClick={() => {
        changeStage(stage.id);
      }}
    >
      {capitalize(stage.name)}
    </StageButton>
  ));

  return <StageFlex>{buttonStages}</StageFlex>;
};

const StageFlex = styled(Flex)`
  position: relative;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const StageButton = styled(Button)<{ $active: boolean }>`
  padding: 0.5rem 0;
  border: ${(props) =>
    props.$active
      ? props.theme.borders.slimFull
      : props.theme.borders.slimTranslucent};
  width: 7.5rem;
  font-weight: ${(props) => (props.$active ? 600 : 500)};
`;

export default SwitchStages;
