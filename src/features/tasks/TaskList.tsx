import { useSelector } from "react-redux";
import SingleTask from "./SingleTask";
import { selectTaskIds } from "src/redux/tasksSlice";
import styled from "styled-components";

// const TaskList = () => {
// const filteredActive = useSelector(getFilteredActive);
//   const tasks = useSelector(selectAllTasks);
//

//   let renderedTasks;

//   if (filteredActive) {
//     renderedTasks = tasks.map((task) => {
//       if (task.done) return null;
//       return <SingleTask key={task.id} task={task} />;
//     });
//   } else {
//     renderedTasks = tasks.map((task) => (
//       <SingleTask key={task.id} task={task} />
//     ));
//   }

//   // const renderedTasks = tasks.map((task) => (
//   //   <SingleTask key={task.id} task={task} />
//   // ));

//   const content = tasks.length !== 0 && renderedTasks;

//   return <List>{content}</List>;
// };

const TaskList = () => {
  const taskIds = useSelector(selectTaskIds);

  const renderedTasks = taskIds.map((taskId) => (
    <SingleTask key={taskId} taskId={taskId} />
  ));

  const content = taskIds.length !== 0 && renderedTasks;

  return <List>{content}</List>;
};

const List = styled.div`
  min-height: 5.5rem;
  width: 100%;
`;

export default TaskList;
