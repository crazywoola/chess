import React from 'react';
import './App.css';


const boardColor = "#ccc";
const whiteGrid = "#fff";
const blackGrid = "#ccc";

const gridSize = 20
function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='svg-block'>
          <svg width="200" height="200" stroke={boardColor}>
            <rect x="0" width={gridSize} height={gridSize} style={{ fill: whiteGrid }} />
            <rect x="20" width={gridSize} height={gridSize} style={{ fill: blackGrid }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;