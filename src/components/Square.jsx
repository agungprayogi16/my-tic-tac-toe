/** @format */

// Square.js
import React from "react";

const Square = ({ value, onClick }) => (
  <>
    <div className='square container flex justify-center'>
     

      <button
        className='square'
        onClick={onClick}>
        {value}
      </button>
    </div>
  </>
);

export default Square;
