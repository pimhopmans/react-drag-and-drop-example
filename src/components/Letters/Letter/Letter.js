import React from "react";
import { useDrag } from "react-dnd";

import { LETTER } from "../../../constants/letters";

const Letter = ({ value }) => {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: LETTER,
      item: { value },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );

  return (
    <div
      className="letter"
      ref={dragRef}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {value}
    </div>
  );
};

export default Letter;
