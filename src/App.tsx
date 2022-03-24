import React from 'react';
import './App.css';


const boardColor = "lightgrey";
const whiteGrid = "#fff";
const blackGrid = "lightgrey";
const pieceColor = '#2b2b2b';

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
const gridSize = 40;
const fontSize = 20;
const pieces = {
  pawnW: '♙',
  rockW: '♖',
  knightW: '♘',
  bishopW: '♗',
  queenW: '♕',
  kingW: '♔',
  pawnB: '♟',
  rockB: '♜',
  knightB: '♞',
  bishopB: '♝',
  queenB: '♛',
  kingB: '♚',
}
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
                    {pieces.pawnB}
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