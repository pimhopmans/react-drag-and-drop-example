import React from "react";
import Letter from "./Letter/Letter";

import { LETTERS } from "../../constants/letters";

const Letters = () => {
  return (
    <div className="letters">
      {LETTERS.map((letter) => (
        <Letter key={letter} value={letter} />
      ))}
    </div>
  );
};

export default Letters;
