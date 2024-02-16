import { useSelector } from "react-redux";
import SingleTask from "./SingleTask";
import { selectAllTasks } from "src/redux/tasksSlice";
import styled from "styled-components";

const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  const renderedTasks = tasks.map((task) => (
    <SingleTask key={task.id} task={task} />
  ));

  const content = tasks.length !== 0 && renderedTasks;

  return <List>{content}</List>;
};

const List = styled.div`
  min-height: 10rem;
  width: 100%;
`;

export default TaskList;
