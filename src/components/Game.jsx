/** @format */

// Ubah dari Game.js ke Game.jsx atau Game.tsx
import React, { useState } from "react";
import Board from "./Board";

const calculateWinner = (squares) => {
  // Logika untuk menentukan pemenang
};

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const xIsNext = stepNumber % 2 === 0;
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const handleClick = (i) => {
    // Logika untuk menghandle klik pada kotak
  };

  const jumpTo = (step) => {
    // Logika untuk mengubah langkah
  };

  const moves = history.map((step, move) => {
    // Tampilkan daftar langkah
  });

  return (
    <div className='game'>
      <div className='game-board'>
        <Board
          squares={current.squares}
          onClick={handleClick}
        />
      </div>
      <div className='game-info'>
        <div>{/* Tampilkan status pemenang atau giliran pemain */}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
