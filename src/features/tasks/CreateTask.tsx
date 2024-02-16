import Modal from "src/components/modal/Modal";
import { Flex } from "src/components/styles/Flex.styled";

import TaskField from "./TaskField";
import { Input, TextArea } from "src/components/styles/Field.styled";
import ControlButton from "./ControlButton";
import { useDispatch } from "react-redux";
import { toggleCreatingTask } from "src/redux/settingsSlice";
import React, { useState } from "react";
import { addTask } from "src/redux/tasksSlice";

const CreateTask = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>("");
  const [round, setRound] = useState<number>(1);
  const [notes, setNotes] = useState<string>("");

  const clearFields = () => {
    setTitle("");
    setRound(1);
    setNotes("");
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeRound = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRound(Number(e.target.value));
  };

  const handleChangeNotes = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  const closeModal = () => {
    dispatch(toggleCreatingTask());
    clearFields();
  };

  const createNewTask = () => {
    if (title) {
      dispatch(addTask(title, round, notes));
      closeModal();
      clearFields();
    }
  };

  return (
    <Modal handleClick={closeModal}>
      <Flex $mg_bottom="1rem">
        <h2>Add Task</h2>
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
      <TaskField title="Notes">
        <TextArea
          value={notes}
          placeholder="(Optional) Notes"
          onChange={handleChangeNotes}
        />
      </TaskField>

      <Flex $gap="2.25rem">
        <ControlButton handleClick={createNewTask}>Create</ControlButton>
        <ControlButton handleClick={closeModal}>Cancel</ControlButton>
      </Flex>
    </Modal>
  );
};

export default CreateTask;
