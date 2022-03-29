import React, { useState } from "react";
import { useDrop } from "react-dnd";

import { LETTER } from "../../../constants/letters";

const Droppable = ({ droppableValue, posX, posY }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleDrop = (draggable) => {
    if (draggable.value === droppableValue) {
      setIsCompleted(true);
    }
  };

  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: LETTER,
      drop: handleDrop,
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );

  if (isCompleted) {
    return null;
  }

  return (
    <div
      className="droppable"
      ref={dropRef}
      style={{
        top: `${posY}%`,
        left: `${posX}%`,
        borderColor: isOver ? "green" : "red",
      }}
    >
      {droppableValue}
    </div>
  );
};

export default Droppable;
