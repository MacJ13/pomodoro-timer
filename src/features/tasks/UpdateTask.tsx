import { useDispatch, useSelector } from "react-redux";
import Modal from "src/components/modal/Modal";
import { Flex } from "src/components/styles/Flex.styled";
import { getTaskId, toggleUpdatingTask } from "src/redux/settingsSlice";
import TaskField from "./TaskField";
import ControlButton from "./ControlButton";
import { Input, TextArea } from "src/components/styles/Field.styled";
import { useState } from "react";
import { selectTaskById, updateTask } from "src/redux/tasksSlice";

import { RootState } from "src/redux/store";

const UpdateTask = () => {
  const taskId = useSelector(getTaskId);

  const updatingTask = useSelector((state: RootState) => {
    return selectTaskById(state, taskId)!;
  });

  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>(updatingTask.title);
  const [round, setRound] = useState<number>(updatingTask.roundsTotal);
  const [completeRound, setCompleteRound] = useState<number>(
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
      round,
      completeRound,
    };

    if (!title) return;
    dispatch(updateTask(updatingData));
    handleCloseModal();
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeRound = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRound(Number(e.target.value));
  };

  const handleChangeCompleteRound = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompleteRound(Number(e.target.value));
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
      <TaskField title="Rounds">
        <Input
          type="number"
          value={round}
          min="1"
          onChange={handleChangeRound}
        />
      </TaskField>
      <>
        {updatingTask.roundsComplete !== 0 && (
          <TaskField title="Complete Rounds">
            <Input
              type="number"
              value={completeRound}
              min="1"
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
        <ControlButton handleClick={handleUpdateButton}>Update</ControlButton>
        <ControlButton handleClick={handleCloseModal}>Cancel</ControlButton>
      </Flex>
    </Modal>
  );
};

export default UpdateTask;
