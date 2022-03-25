import React from 'react';
import {
    // blackGrid,
    boardColor,
    // fontSize,
    grid,
    gridSize,
    // initMap,
    pieceColor,
    // whiteGrid
} from 'src/constant';
import './style.css';
const Cell = () => {
    return <span className='cell' style={{
        width: gridSize,
        height: gridSize,
        color: pieceColor,
    }}>
        A
    </span>
};
const Board = () => {
    return <div className='board' style={{
        width: 8 * gridSize,
        height: 8 * gridSize,
        border: `1px solid ${boardColor}`,
    }}>
        {grid.map((row, rowIndex) => {
            return row.map((col, colIndex) => {
                return <Cell />
            })
        })}
    </div>
};

export default Board;