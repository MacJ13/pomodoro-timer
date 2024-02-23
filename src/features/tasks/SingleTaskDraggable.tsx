import { Draggable } from "react-beautiful-dnd";
import { ChildrenProps, SingleTaskProps } from "src/types/types";

type TaskDraggableProps = SingleTaskProps & ChildrenProps;

const SingleTaskDraggable = ({
  index,
  taskId,
  children,
}: TaskDraggableProps) => (
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
