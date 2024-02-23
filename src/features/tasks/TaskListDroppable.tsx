import { useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { ChildrenProps } from "src/types/types";

// this is solution for droppable in Strict mode
const TaskListDroppable = ({ children }: ChildrenProps) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <Droppable droppableId="droppable">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskListDroppable;
