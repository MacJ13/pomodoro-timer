import { useSelector } from "react-redux";
import { getOpeningTasks } from "src/redux/settingsSlice";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask";
import DeleteTask from "./DeleteTask";

const TaskForm = () => {
  const { openCreating, openUpdating, openDeleting } =
    useSelector(getOpeningTasks);

  if (openCreating) {
    return <CreateTask />;
  } else if (openUpdating) {
    return <UpdateTask />;
  } else if (openDeleting) {
    return <DeleteTask />;
  } else null;
};

export default TaskForm;
