import { Flex } from "src/components/styles/Flex.styled";
import styled from "styled-components";

import { Icon } from "src/components/styles/Icon.styled";

import EditSvg from "../../assets/icons/edit.svg?react";
import DeleteSvg from "../../assets/icons/delete.svg?react";
import TaskDoneSvg from "../../assets/icons/task-done.svg?react";
import TaskSquareSvg from "../../assets/icons/square.svg?react";

import { Button } from "src/components/styles/Button.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  changeActiveTask,
  getFilteredActive,
  markCompleteTask,
  selectTaskById,
} from "src/redux/tasksSlice";
import {
  toggleDeletingTask,
  toggleUpdatingTask,
} from "src/redux/settingsSlice";
import { RootState } from "src/redux/store";
import SingleTaskDraggable from "./SingleTaskDraggable";
import { SingleTaskProps } from "src/utils/types/types";

const SingleTask = ({ index, taskId }: SingleTaskProps) => {
  const task = useSelector((state: RootState) => {
    return selectTaskById(state, taskId);
  });

  const filteredActive = useSelector(getFilteredActive);

  const dispatch = useDispatch();
  const notesInTask = Boolean(task.notes);

  const stopPropagation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  if (filteredActive && task.done) {
    return null;
  }

  return (
    <SingleTaskDraggable index={index} taskId={taskId}>
      <StyledTask
        onClick={() => dispatch(changeActiveTask(task.id))}
        $active={task.active}
        $complete={task.done}
      >
        <Flex
          $justify="space-between"
          $gap="0.5rem"
          $mg_bottom={notesInTask ? "0.75rem" : ""}
        >
          <Flex $gap="0.5rem">
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                dispatch(markCompleteTask(task.id));
                stopPropagation(e);
              }}
            >
              <Icon $size="1.5rem">
                {task.done ? <TaskDoneSvg /> : <TaskSquareSvg />}
              </Icon>
            </Button>
            <h3>{task.title}</h3>
          </Flex>
          <Flex $gap="1rem">
            <span>
              {task.roundsComplete} / <strong>{task.roundsTotal}</strong>
            </span>
            <Flex $gap="0.5rem">
              <Button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  dispatch(toggleUpdatingTask(task.id));
                  stopPropagation(e);
                }}
              >
                <Icon $size="1.33rem">
                  <EditSvg />
                </Icon>
              </Button>
              <Button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  dispatch(toggleDeletingTask(task.id));
                  stopPropagation(e);
                }}
              >
                <Icon $size="1.33rem">
                  <DeleteSvg />
                </Icon>
              </Button>
            </Flex>
          </Flex>
        </Flex>

        <p style={{ marginLeft: "2rem" }}>
          {notesInTask && <em>{task.notes}</em>}
        </p>
      </StyledTask>
    </SingleTaskDraggable>
  );
};

const StyledTask = styled.div<{ $active?: boolean; $complete: boolean }>`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white025};
  border-radius: 0.33rem;
  box-shadow: 0px 2px 1px 0px rgba(255, 255, 255, 0.15);

  cursor: pointer;

  padding: 1rem 0.75rem;
  opacity: ${({ $complete }) => ($complete ? 0.8 : 1)};
  overflow: hidden;

  & h3 {
    font-size: 1.25rem;
    text-decoration: ${({ $complete }) =>
      $complete ? "line-through" : "none"};
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: "";
    background-color: ${({ $active, theme }) =>
      $active ? theme.colors.white : "transparent"};
    height: 0.25rem;
    width: 100%;
  }

  &:hover::before {
    background-color: ${({ $active, theme }) =>
      $active ? "" : theme.colors.white05};
  }
`;

export default SingleTask;
