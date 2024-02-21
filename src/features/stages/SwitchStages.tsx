import { useSelector } from "react-redux";
import { selectAllStages, updatePreviousTheme } from "../../redux/stagesSlice";
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
    dispatch(updatePreviousTheme(currentId));
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

  return <StageFlex $gap="1rem">{buttonStages}</StageFlex>;
};

const StageFlex = styled(Flex)`
  margin-bottom: 2.5rem;
  position: relative;
`;

const StageButton = styled(Button)<{ $active: boolean }>`
  padding: 0.5rem 0;

  width: 7.5rem;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.white0375 : theme.colors.white025};
  font-weight: ${(props) => (props.$active ? 600 : 500)};
  box-shadow: 0px 2px 1px 0px rgba(255, 255, 255, 0.15);
`;

export default SwitchStages;
