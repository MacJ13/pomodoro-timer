import { useSelector } from "react-redux";
import SingleTask from "./SingleTask";
import { reorderTasks, selectTaskIds } from "src/redux/tasksSlice";
import styled from "styled-components";

import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import TaskListDroppable from "./TaskListDroppable";

const TaskList = () => {
  const taskIds = useSelector(selectTaskIds);

  const dispatch = useDispatch();

  const handleDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;

    dispatch(
      reorderTasks({ startIndex: source.index, endIndex: destination.index })
    );
  };

  // const renderedTasks = taskIds.map((taskId, index) => (
  //   <Draggable key={taskId} index={index} draggableId={taskId}>
  //     {(provided, snapshot) => (
  //       <div
  //         ref={provided.innerRef}
  //         {...provided.draggableProps}
  //         {...provided.dragHandleProps}
  //       >
  //         <SingleTask taskId={taskId} />
  //       </div>
  //     )}
  //   </Draggable>
  // ));

  // const content = taskIds.length !== 0 && (
  //   <DragDropContext onDragEnd={handleDragEnd}>
  //     <Droppable droppableId="droppable">
  //       {(provided) => (
  //         <div ref={provided.innerRef} {...provided.droppableProps}>
  //           {/* {renderedTasks} */}
  //           {taskIds.map((taskId, index) => (
  //             <SingleTask key={taskId} index={index} taskId={taskId} />
  //           ))}
  //           {provided.placeholder}
  //         </div>
  //       )}
  //     </Droppable>
  //   </DragDropContext>
  // );

  const renderedTasks = taskIds.map((taskId, index) => (
    <SingleTask key={taskId} index={index} taskId={taskId} />
  ));

  const content = taskIds.length !== 0 && (
    <DragDropContext onDragEnd={handleDragEnd}>
      <TaskListDroppable>{renderedTasks}</TaskListDroppable>
    </DragDropContext>
  );

  return <List>{content}</List>;
};

const List = styled.div`
  min-height: 5.5rem;
  width: 100%;
`;

export default TaskList;
