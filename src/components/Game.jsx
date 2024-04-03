/** @format */

import React, { useState } from "react";

// Komponen untuk memperlihatkan satu kotak pada papan permainan
const Square = ({ value, onClick }) => {
  return (
    <button
      className='bg-white border border-gray-300 w-16 h-16 text-4xl font-bold flex items-center justify-center focus:outline-none'
      onClick={onClick}>
      {value}
    </button>
  );
};

// Komponen untuk memperlihatkan papan permainan dan kotak-kotaknya
const Board = ({ squares, onClick }) => {
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    );
  };

  return (
    <div className='grid grid-cols-3 gap-2'>
      {Array(3)
        .fill(null)
        .map((_, rowIndex) => (
          <div
            key={rowIndex}
            className='flex justify-center'>
            {Array(3)
              .fill(null)
              .map((_, colIndex) => renderSquare(rowIndex * 3 + colIndex))}
          </div>
        ))}
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Mengembalikan simbol pemain yang menang (X atau O)
    }
  }

  return null;
};

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = [...current.squares];

    // Jika sudah ada pemenang atau kotak sudah diisi, atau jika langkah sudah berakhir, maka tidak ada tindakan yang dilakukan
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";
    setHistory(newHistory.concat([{ squares }]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext); // Ganti giliran pemain
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-gray-200 p-8 rounded-lg'>
        <div className='font-bold text-2xl mb-4'>{status}</div>
        <div className='mb-4'>
          <Board
            squares={current.squares}
            onClick={handleClick}
          />
        </div>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-md'
          onClick={() => setHistory([{ squares: Array(9).fill(null) }])}>
          Restart Game
        </button>
      </div>
    </div>
  );
};

export default Game;
