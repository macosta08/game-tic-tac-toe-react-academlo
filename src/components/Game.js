import React, { useState } from "react";
import Board from "./Board";

import { MessageTurnWinner } from "./MessageTurnWinner";

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
  const [historyMove, setHistoryMove] = useState([]);
  const [startDeleteHistory, setStartDeleteHistory] = useState(0);
  const winner = calculateWinner(board);

  const handleSquareChange = (index) => {
    const copiedBoard = [...board];
    if (copiedBoard[index] || winner) return;

    copiedBoard[index] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setBoard(copiedBoard);

    console.log(startDeleteHistory);
    console.log(historyMove);
    historyMove.splice(startDeleteHistory);
    setHistoryMove([...historyMove, copiedBoard]);
    setStartDeleteHistory(historyMove.length + 1);
  };

  const handleHistoryMove = (move, index) => {
    setStartDeleteHistory(index + 1);
    setBoard(move);
    console.log(index + 1);
    console.log(historyMove);
  };

  const resetGame = () => {
    setBoard(new Array(9).fill(null));
    setHistoryMove([]);
    setStartDeleteHistory(0);
  };
  return (
    <div>
      <div className="buttons-move">
        {historyMove.map((move, index) => (
          <button
            className="button-move"
            key={move}
            onClick={() => handleHistoryMove(move, index)}
          >
            Move: {index + 1}
          </button>
        ))}
      </div>
      <Board squares={board} handleClick={handleSquareChange} />
      <MessageTurnWinner winner={winner} board={board} xIsNext={xIsNext} />

      <button className="button-move" onClick={resetGame}>
        New Game
      </button>
    </div>
  );
};

export default Game;
