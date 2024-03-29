import Modal from "src/components/modal/Modal";
import { Flex } from "src/components/styles/Flex.styled";
import { useDispatch, useSelector } from "react-redux";
import { getTaskId, toggleDeletingTask } from "src/redux/settingsSlice";
import { deleteTask } from "src/redux/tasksSlice";
import ModalButton from "src/components/modal/ModalButton";

const DeleteTask = () => {
  const taskId = useSelector(getTaskId);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleDeletingTask());
  };

  const handleDeleteButton = () => {
    dispatch(deleteTask(taskId));
    closeModal();
  };

  return (
    <Modal handleClick={closeModal}>
      <Flex $gap="1rem" $mg_bottom="1rem" $direction="column">
        <h2>Delete Task</h2>
        <p>Are you sure you want to delete Task?</p>
      </Flex>

      <Flex $gap="2.25rem">
        <ModalButton handleClick={handleDeleteButton}>Delete</ModalButton>
        <ModalButton handleClick={closeModal}>Cancel</ModalButton>
      </Flex>
    </Modal>
  );
};

export default DeleteTask;
