import styled from "styled-components";
import { List } from "src/components/styles/List.styled";
import { useDispatch, useSelector } from "react-redux";
import { forwardRef } from "react";
import {
  clearAllTasks,
  clearFinishedTasks,
  getFilteredActive,
  toggleFilteredTasks,
} from "src/redux/tasksSlice";
import { HandlerProps } from "src/utils/types/types";

const TaskDropdown = forwardRef<HTMLUListElement, HandlerProps>(
  ({ handleClick }, ref) => {
    const filteredActive = useSelector(getFilteredActive);
    const dispatch = useDispatch();

    return (
      <DropdownList ref={ref}>
        <Item>
          <Button
            onClick={() => {
              dispatch(toggleFilteredTasks());
              handleClick();
            }}
          >
            {filteredActive ? "Show" : "Hide"} undone tasks
          </Button>
        </Item>
        <Item>
          <Button
            onClick={() => {
              dispatch(clearFinishedTasks());
              handleClick();
            }}
          >
            Clear finished tasks
          </Button>
        </Item>
        <Item>
          <Button
            onClick={() => {
              dispatch(clearAllTasks());
              handleClick();
            }}
          >
            Clear all tasks
          </Button>
        </Item>
      </DropdownList>
    );
  }
);

const DropdownList = styled(List)`
  position: absolute;
  margin-top: 0.25rem;
  width: auto;
  right: 0;
  z-index: 1;
`;

const Item = styled.li`
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

const Button = styled.button`
  color: inherit;
  font-weight: 600;
  font-size: 0.9rem;
  width: 100%;
  padding: 0.33rem 0.75rem;
  text-align: left;
`;

export default TaskDropdown;
