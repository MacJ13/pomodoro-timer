import styled from "styled-components";

import TaskBar from "./TaskBar";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

const Task = () => {
  return (
    <Wrapper>
      <TaskBar />
      <CreateTask />
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
