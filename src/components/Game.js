import React, { useState } from "react";
import Board from "./Board";
//import { Button } from "./Button";

function calculateWinner(board) {
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < winningPositions.length; index++) {
    const [a, b, c] = winningPositions[index]; // index = 1 a:3,b:4,c:5
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }

  return null;
}
//{copiedBoard[index] || winner ? <p>Winner X</p>)}
const Game = () => {
  const [board, setBoard] = useState(new Array(9).fill(null)); // null, "X", "O"
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);

  const handleSquareChange = (index) => {
    const copiedBoard = [...board];
    if (copiedBoard[index] || winner) {
      return;
    }
    copiedBoard[index] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setBoard(copiedBoard);
  };

  const resetGame = () => {
    setBoard(new Array(9).fill(null));
  };
  return (
    <div>
      <Board squares={board} handleClick={handleSquareChange} />
      {(winner && xIsNext && <p>Winner "O"</p>) ||
        (xIsNext && <p>Next Turn: "X"</p>)}
      {(winner && !xIsNext && <p>Winner "X"</p>) ||
        (!xIsNext && <p>Next Turn: "O"</p>)}

      <button onClick={resetGame}>New Game</button>
    </div>
  );
};

export default Game;
