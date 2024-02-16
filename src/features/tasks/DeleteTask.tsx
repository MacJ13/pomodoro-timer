import Modal from "src/components/modal/Modal";
import { Flex } from "src/components/styles/Flex.styled";
import ControlButton from "./ControlButton";

const DeleteTask = () => {
  return (
    <Modal handleClick={() => {}}>
      <Flex $gap="1rem" $mg_bottom="1rem" $direction="column">
        <h2>Delete Task</h2>
        <p>Are you sure you want to delete Task?</p>
      </Flex>

      <Flex $gap="2.25rem">
        <ControlButton handleClick={() => {}}>Delete</ControlButton>
        <ControlButton handleClick={() => {}}>Cancel</ControlButton>
      </Flex>
    </Modal>
  );
};

export default DeleteTask;
