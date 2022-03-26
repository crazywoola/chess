import React, { useContext } from 'react';
import { ThemeContext } from 'src/context/theme';
import { BoardContext } from 'src/context/board';
import { toPiece } from 'src/operations/index';
import './style.scss';

interface CellProps {
    item: any;
    rowIndex: number;
    colIndex: number;
}
const Cell = ({
    item,
    rowIndex,
    colIndex,
}: CellProps) => {
    const { theme: { gridSize, blackPieceColor, blackGrid, whiteGrid, fontSize } } = useContext(ThemeContext);
    let backgroundColor = blackGrid;
    if (rowIndex % 2 === 0 && colIndex % 2 === 0) {
        backgroundColor = whiteGrid
    }
    if (rowIndex % 2 !== 0 && colIndex % 2 !== 0) {
        backgroundColor = whiteGrid
    }
    console.log(item)
    return <span
        className='cell'
        style={{
            width: gridSize,
            height: gridSize,
            color: blackPieceColor,
            backgroundColor: backgroundColor,
            fontSize: fontSize,
        }}
    >
        {toPiece(item)}
    </span>
};
const ChessBoard = () => {
    const { theme: { gridSize, borderColor } } = useContext(ThemeContext);
    const { chessboard } = useContext(BoardContext);
    console.log(chessboard);
    return <div className='board' style={{
        width: 8 * gridSize,
        height: 8 * gridSize,
        border: `1px solid ${borderColor}`,
    }}>
        {chessboard.board().map((row: object[], rowIndex: number) => {
            return row.map((item: any, colIndex: number) => {
                return <Cell
                    key={`grid-${rowIndex}-${colIndex}`}
                    item={item}
                    rowIndex={rowIndex}
                    colIndex={colIndex}
                />
            })
        })}
    </div>
};

export default ChessBoard;
