import React from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import DroppableArea from "./components/DroppableArea/DroppableArea";
import Letters from "./components/Letters/Letters";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <DroppableArea />

        <Letters />
      </DndProvider>
    </div>
  );
}

export default App;
