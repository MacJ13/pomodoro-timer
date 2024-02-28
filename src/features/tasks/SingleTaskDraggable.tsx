import { Draggable } from "react-beautiful-dnd";
import { SingleTaskDraggableProps } from "src/utils/types/types";

const SingleTaskDraggable = ({
  index,
  taskId,
  children,
}: SingleTaskDraggableProps) => (
  <Draggable index={index} draggableId={taskId}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{ marginBottom: "1.5rem", ...provided.draggableProps.style }}
      >
        {children}
      </div>
    )}
  </Draggable>
);

export default SingleTaskDraggable;
