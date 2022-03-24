import React from 'react';
import './App.css';

const boardColor = "lightgrey";
const whiteGrid = "#fff";
const blackGrid = "lightgrey";
const pieceColor = '#2b2b2b';
const gridSize = 40;
const fontSize = 40;
const WHITE_PIECES = {
  pawn: '♙',
  rock: '♖',
  knight: '♘',
  bishop: '♗',
  queen: '♕',
  king: '♔',
}

const BLACK_PIECES = {
  pawn: '♟',
  rock: '♜',
  knight: '♞',
  bishop: '♝',
  queen: '♛',
  king: '♚',
}

const EMPTY_PIECES = {
  blank: ''
}

const grid = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0]
];


const initMap = [
  [BLACK_PIECES.rock, BLACK_PIECES.knight, BLACK_PIECES.bishop, BLACK_PIECES.queen, BLACK_PIECES.king, BLACK_PIECES.bishop, BLACK_PIECES.knight, BLACK_PIECES.rock],
  [BLACK_PIECES.pawn, BLACK_PIECES.pawn, BLACK_PIECES.pawn, BLACK_PIECES.pawn, BLACK_PIECES.pawn, BLACK_PIECES.pawn, BLACK_PIECES.pawn, BLACK_PIECES.pawn],
  [EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank,],
  [EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank,],
  [EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank,],
  [EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank,],
  [WHITE_PIECES.pawn, WHITE_PIECES.pawn, WHITE_PIECES.pawn, WHITE_PIECES.pawn, WHITE_PIECES.pawn, WHITE_PIECES.pawn, WHITE_PIECES.pawn, WHITE_PIECES.pawn],
  [WHITE_PIECES.rock, WHITE_PIECES.knight, WHITE_PIECES.bishop, WHITE_PIECES.queen, WHITE_PIECES.king, WHITE_PIECES.bishop, WHITE_PIECES.knight, WHITE_PIECES.rock],
];

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='svg-block'>
          <svg width={8 * gridSize} height={8 * gridSize} stroke={boardColor}>
            {grid.map((row, rowIndex) => {
              return row.map((col, colIndex) => {
                return <g
                  width={gridSize}
                  height={gridSize}
                >
                  <rect
                    x={rowIndex * gridSize}
                    y={colIndex * gridSize}
                    width={gridSize}
                    height={gridSize}
                    style={{ fill: col === 1 ? blackGrid : whiteGrid }}
                  />
                  <text
                    x={gridSize / 2 + gridSize * rowIndex}
                    y={gridSize / 2 + gridSize * colIndex}
                    dominant-baseline="middle"
                    text-anchor="middle"
                    font-size={fontSize}
                    stroke={pieceColor}
                  >
                    {initMap[colIndex][rowIndex]}
                  </text>
                </g>

              })
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;