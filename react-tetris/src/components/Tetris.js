import React from "react";
import { createStage } from "../gameHelpers";
import Stage from "./Stage";
import Display from "./Display";
import StartButtom from "./StartButton";

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButtom />
      </aside>
    </div>
  );
};

export default Tetris;
