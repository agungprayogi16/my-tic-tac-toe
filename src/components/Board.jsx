/** @format */

// Board.js
import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => (
  <div className='board'>
    {squares.map((value, index) => (
      <Square
        key={index}
        value={value}
        onClick={() => onClick(index)}
      />
    ))}
  </div>
);

export default Board;
