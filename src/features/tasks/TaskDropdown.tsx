import styled from "styled-components";
import { List } from "src/components/styles/List.styled";

type TaskDropdownProps = {
  handleCloseList: () => void;
};

const TaskDropdown = ({ handleCloseList }: TaskDropdownProps) => {
  return (
    <DropdownList>
      <Item>
        <Button onClick={handleCloseList}>Hide undone tasks</Button>
      </Item>
      <Item>
        <Button onClick={handleCloseList}>Clear finished tasks</Button>
      </Item>
      <Item>
        <Button onClick={handleCloseList}>Clear all tasks</Button>
      </Item>
    </DropdownList>
  );
};

const DropdownList = styled(List)`
  position: absolute;
  //   width: 12.5rem;
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
