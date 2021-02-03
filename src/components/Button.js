import React from "react";

export const Button = (resetGame) => {
  return (
    <div>
      <button onClick={resetGame}>New Game</button>
    </div>
  );
};
