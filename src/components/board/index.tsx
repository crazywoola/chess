import React from 'react';
import {
    blackGrid,
    boarderColor,
    fontSize,
    grid,
    gridSize,
    initMap,
    pieceColor,
    whiteGrid
} from 'src/constant';
import './style.css';

interface CellProps {
    col: number,
    rowIndex: number,
    colIndex: number,
}
const Cell = ({
    col,
    colIndex,
    rowIndex,
}: CellProps) => {
    return <span className='cell' style={{
        width: gridSize,
        height: gridSize,
        color: pieceColor,
        backgroundColor: col === 1 ? blackGrid : whiteGrid,
        fontSize: fontSize,
    }}>
        {initMap[rowIndex][colIndex]}
    </span>
};
const Board = () => {
    return <div className='board' style={{
        width: 8 * gridSize,
        height: 8 * gridSize,
        border: `1px solid ${boarderColor}`,
    }}>
        {grid.map((row, rowIndex) => {
            return row.map((col, colIndex) => {
                return <Cell
                    col={col}
                    rowIndex={rowIndex}
                    colIndex={colIndex}
                />
            })
        })}
    </div>
};

export default Board;