import styled from "styled-components";
import TaskBar from "./TaskBar";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const Task = () => {
  return (
    <Wrapper>
      <TaskForm />
      <TaskBar />
      <TaskList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  max-width: 27.5rem;
  width: 100%;
`;

export default Task;
