import { useDispatch, useSelector } from "react-redux";
import Modal from "src/components/modal/Modal";
import { Flex } from "src/components/styles/Flex.styled";
import { getTaskId, toggleUpdatingTask } from "src/redux/settingsSlice";
import TaskField from "./TaskField";
import { Input, TextArea } from "src/components/styles/Field.styled";
import { useState } from "react";
import { selectTaskById, updateTask } from "src/redux/tasksSlice";

import { RootState } from "src/redux/store";
import ModalButton from "src/components/modal/ModalButton";

const UpdateTask = () => {
  const taskId = useSelector(getTaskId);

  const updatingTask = useSelector((state: RootState) => {
    return selectTaskById(state, taskId)!;
  });

  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>(updatingTask.title);
  const [roundsTotal, setRoundsTotal] = useState<number>(
    updatingTask.roundsTotal
  );
  const [roundsComplete, setRoundsComplete] = useState<number>(
    updatingTask.roundsComplete
  );
  const [notes, setNotes] = useState<string>(updatingTask.notes || "");

  const handleCloseModal = () => {
    dispatch(toggleUpdatingTask());
  };

  const handleUpdateButton = () => {
    const updatingData = {
      id: updatingTask.id,
      title,
      notes,
      roundsTotal,
      roundsComplete,
    };

    if (!title) return;
    dispatch(updateTask(updatingData));
    handleCloseModal();
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeRound = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoundsTotal(Number(e.target.value));
  };

  const handleChangeCompleteRound = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRoundsComplete(Number(e.target.value));
  };

  const handleChangeNotes = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  return (
    <Modal handleClick={handleCloseModal}>
      <Flex $mg_bottom="1rem">
        <h2>Update Task</h2>
      </Flex>
      <TaskField title="Title">
        <Input
          type="text"
          value={title}
          placeholder="(Required) Task Name"
          maxLength={25}
          onChange={handleChangeTitle}
        />
      </TaskField>
      <TaskField title="Total Rounds">
        <Input
          type="number"
          value={roundsTotal}
          min="1"
          onChange={handleChangeRound}
        />
      </TaskField>
      <>
        {updatingTask.roundsComplete !== 0 && (
          <TaskField title="Complete Rounds">
            <Input
              type="number"
              value={roundsComplete}
              min="0"
              max={updatingTask.roundsComplete}
              onChange={handleChangeCompleteRound}
            />
          </TaskField>
        )}
      </>

      <TaskField title="Notes">
        <TextArea
          value={notes}
          placeholder="(Optional) Notes"
          onChange={handleChangeNotes}
        />
      </TaskField>
      <Flex $gap="2.25rem">
        <ModalButton handleClick={handleUpdateButton}>Update</ModalButton>
        <ModalButton handleClick={handleCloseModal}>Cancel</ModalButton>
      </Flex>
    </Modal>
  );
};

export default UpdateTask;
