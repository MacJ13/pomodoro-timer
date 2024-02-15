import { useSelector } from "react-redux";
import SingleTask from "./SingleTask";
import { selectAllTasks } from "src/redux/tasksSlice";

const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  const renderedTasks = tasks.map((task) => (
    <SingleTask key={task.id} task={task} />
  ));

  const content = tasks.length !== 0 && renderedTasks;

  return content;
};

export default TaskList;
