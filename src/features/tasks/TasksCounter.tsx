import { useSelector } from "react-redux";
import { selectTotalTasks } from "src/redux/tasksSlice";

const TasksCounter = () => {
  const totalTasks = useSelector(selectTotalTasks);

  return (
    <h2>
      Tasks <span>({totalTasks})</span>
    </h2>
  );
};

export default TasksCounter;
