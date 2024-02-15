import { Flex } from "src/components/styles/Flex.styled";
import { Icon } from "src/components/styles/Icon.styled";
import DotsSvg from "../../assets/icons/dots.svg?react";
import AddSvg from "../../assets/icons/add.svg?react";

import styled from "styled-components";
import { Button } from "src/components/styles/Button.styled";
import { useDispatch } from "react-redux";
import { toggleCreatingTask } from "src/redux/settingsSlice";

const TaskBar = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(toggleCreatingTask());
  };

  return (
    <Bar>
      <Flex $justify="space-between">
        <TaskButton onClick={openModal}>
          <Icon $size="1.75rem">
            <AddSvg />
          </Icon>
        </TaskButton>
        <h2>Tasks</h2>
        <TaskButton>
          <Icon $size="1.75rem">
            <DotsSvg />
          </Icon>
        </TaskButton>
      </Flex>
    </Bar>
  );
};

const Bar = styled.div`
  border-radius: 0.33rem;
  background-color: ${({ theme }) => theme.colors.white025};
  box-shadow: 0px 2px 1px 0px rgba(255, 255, 255, 0.15);
  position: relative;
  padding: 1rem;

  width: 100%;
  margin-bottom: 1.5rem;

  & h2 {
    letter-spacing: 1px;
  }
`;

const TaskButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white025};
  border-radius: 50%;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.125);
  padding: 0.125rem;

  &:active {
    transform: translate(1px, 1px);
  }
`;

export default TaskBar;
