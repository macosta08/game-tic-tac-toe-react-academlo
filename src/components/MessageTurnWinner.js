import React from "react";
import "./message.css";
export const MessageTurnWinner = ({ winner, board, xIsNext }) => {
  const calculateTie = (winner, board) => {
    const endGame = !board.includes(null);
    return !winner && endGame;
  };
  const tie = calculateTie(winner, board);
  let message;

  if (winner)
    if (xIsNext) message = 'Winner "O"';
    else message = 'Winner "X"';
  else if (xIsNext) message = 'Next Turn: "X"';
  else message = 'Next Turn: "O"';
  if (tie) message = "Tie!";
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};
