import React from "react";

import Droppable from "./Droppable/Droppable";

import { LETTERS } from "../../constants/letters";

const DroppableArea = () => {
  const droppablePosX = Math.floor(Math.random() * 100);
  const droppablePosY = Math.floor(Math.random() * 100);

  const droppableValue = LETTERS[Math.floor(Math.random() * LETTERS.length)];

  return (
    <div className="droppable-area">
      <Droppable
        droppableValue={droppableValue}
        posX={droppablePosX}
        posY={droppablePosY}
      />
    </div>
  );
};

export default DroppableArea;
