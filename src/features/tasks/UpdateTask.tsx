import Modal from "src/components/modal/Modal";
import { Flex } from "src/components/styles/Flex.styled";
import TaskField from "./TaskField";
import ControlButton from "./ControlButton";
import { Input, TextArea } from "src/components/styles/Field.styled";

const UpdateTask = () => {
  return (
    <Modal handleClick={() => {}}>
      <Flex $mg_bottom="1rem">
        <h2>Update Task</h2>
      </Flex>
      <TaskField title="Title">
        <Input
          type="text"
          placeholder="(Required) Task Name"
          maxLength={25}
          onChange={() => {}}
        />
      </TaskField>
      <TaskField title="Rounds">
        <Input type="number" min="1" onChange={() => {}} />
      </TaskField>

      <TaskField title="Notes">
        <TextArea placeholder="(Optional) Notes" onChange={() => {}} />
      </TaskField>
      <Flex $gap="2.25rem">
        <ControlButton handleClick={() => {}}>Update</ControlButton>
        <ControlButton handleClick={() => {}}>Cancel</ControlButton>
      </Flex>
    </Modal>
  );
};

export default UpdateTask;
