import Modal from "src/components/modal/Modal";
import { Flex } from "src/components/styles/Flex.styled";

import TaskField from "./TaskField";
import { Input, TextArea } from "src/components/styles/Field.styled";
import ControlButton from "./ControlButton";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCreatingTask,
  toggleCreatingTask,
} from "src/redux/settingsSlice";

const CreateTask = () => {
  const isOpen = useSelector(selectCreatingTask);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleCreatingTask());
  };

  if (!isOpen) return null;

  return (
    <Modal handleClick={closeModal}>
      <Flex $mg_bottom="1rem">
        <h2>Add Task</h2>
      </Flex>

      <TaskField title="Title">
        <Input type="text" placeholder="Entry Task Name" />
      </TaskField>
      <TaskField title="Rounds">
        <Input type="number" min="1" onChange={() => {}} />
      </TaskField>
      <TaskField title="Notes">
        <TextArea placeholder="(Optional) Notes" />
      </TaskField>

      <Flex $gap="2.25rem">
        <ControlButton handleClick={() => console.log("create")}>
          Create
        </ControlButton>
        <ControlButton handleClick={closeModal}>Cancel</ControlButton>
      </Flex>
    </Modal>
  );
};

export default CreateTask;
