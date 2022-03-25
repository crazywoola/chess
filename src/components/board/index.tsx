import React, { useContext } from 'react';
import { ThemeContext } from 'src/context/theme';
import {
    grid,
    initMap,
} from 'src/constant';
import './style.scss';

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
    const { theme: { gridSize, blackPieceColor, blackGrid, whiteGrid, fontSize } } = useContext(ThemeContext);
    return <span className='cell' style={{
        width: gridSize,
        height: gridSize,
        color: blackPieceColor,
        backgroundColor: col === 1 ? blackGrid : whiteGrid,
        fontSize: fontSize,
    }}>
        {initMap[rowIndex][colIndex]}
    </span>
};
const Board = () => {
    const { theme: { gridSize, borderColor } } = useContext(ThemeContext);
    return <div className='board' style={{
        width: 8 * gridSize,
        height: 8 * gridSize,
        border: `1px solid ${borderColor}`,
    }}>
        {grid.map((row, rowIndex) => {
            return row.map((col, colIndex) => {
                return <Cell
                    key={`${rowIndex}-${colIndex}`}
                    col={col}
                    rowIndex={rowIndex}
                    colIndex={colIndex}
                />
            })
        })}
    </div>
};

export default Board;