import Modal from "src/components/modal/Modal";
import { Flex } from "src/components/styles/Flex.styled";

import TaskField from "./TaskField";
import { Input, TextArea } from "src/components/styles/Field.styled";
import ControlButton from "./ControlButton";

const CreateTask = () => {
  return (
    <Modal handleClick={() => console.log("click")}>
      <Flex $mg_bottom="1rem">
        <h2>Add Task</h2>
      </Flex>

      <TaskField title="Title">
        <Input type="text" placeholder="Entry Task Name" />
      </TaskField>
      <TaskField title="Rounds">
        <Input type="number" value="0" onChange={() => {}} />
      </TaskField>
      <TaskField title="Notes">
        <TextArea placeholder="(Optional) Notes" />
      </TaskField>

      <Flex $gap="2.25rem">
        <ControlButton handleClick={() => console.log("create")}>
          Create
        </ControlButton>
        <ControlButton handleClick={() => console.log("create")}>
          Cancel
        </ControlButton>
      </Flex>
    </Modal>
  );
};

export default CreateTask;
