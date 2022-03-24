import React from 'react';
import './App.css';


const boardColor = "#ccc";
const whiteGrid = "#fff";
const blackGrid = "#ccc";

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
const gridSize = 20;
const fontSize = 12;
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
                    x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
                    font-family="Verdana"
                    font-size={fontSize}
                    fill="black"
                  >A</text>
                </g>

              })
            })}

            {/* <rect x="0" width={gridSize} height={gridSize} style={{ fill: whiteGrid }} />
            <rect x="20" width={gridSize} height={gridSize} style={{ fill: blackGrid }} /> */}
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;