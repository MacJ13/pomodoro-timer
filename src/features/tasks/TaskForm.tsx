import { useSelector } from "react-redux";
import {
  selectCreatingTask,
  selectUpdatingTask,
} from "src/redux/settingsSlice";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask";

const TaskForm = () => {
  const creating = useSelector(selectCreatingTask);
  const updating = useSelector(selectUpdatingTask);

  if (creating) {
    return <CreateTask />;
  } else if (updating) {
    return <UpdateTask />;
  } else null;
};

export default TaskForm;
