import React, { useContext, useEffect } from 'react';
import { BoardContext } from 'src/context/board';
import { ThemeContext } from 'src/context/theme';
import { useDrop, useDrag } from 'react-dnd';
import { DragDropType } from 'src/constant';
import { getGridAxis } from 'src/operations/index';
import { getEmptyImage } from 'react-dnd-html5-backend';

interface PieceProps {
    item: any;
    rowIndex: number;
    colIndex: number;
    gridAxis: string;
}

export const Piece = ({
    colIndex,
    rowIndex,
    item,
    gridAxis,
}: PieceProps) => {
    const { markedMoves, setStartPos } = useContext(BoardContext);

    const [, drag, preview] = useDrag(
        () => ({
            type: DragDropType,
            item() {
                const from = { row: rowIndex, col: colIndex }
                setStartPos(from)

                return {
                    id: `${item.color}-${item.type}`,
                    item,
                    colIndex,
                    rowIndex,
                    gridAxis,
                }
            },
            collect: (monitor) => {
                return {
                    isDragging: !!monitor.isDragging(),
                }
            },
            end() {
                setStartPos(undefined);
            }
        }),
        [],
    )
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, []);

    if (!item) {
        return <span className={markedMoves.includes(gridAxis) ? 'mark' : ''} />;
    }

    return <div className={`piece-${item.color}-${item.type}`} ref={drag} />
}

const Cell = ({
    item,
    rowIndex,
    colIndex,
    gridAxis,
}: PieceProps) => {
    const { theme: { blackPieceColor, blackGrid, whiteGrid, fontSize } } = useContext(ThemeContext);
    const { startPos, setStartPos, chessboard, setPromotion, setMoves, markedMoves } = useContext(BoardContext);

    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
            accept: DragDropType,
            drop: () => {
                const from = getGridAxis(startPos as any)
                const to = gridAxis
                chessboard.move({ from, to })
                setStartPos(undefined)
            },
            canDrop: () => markedMoves.includes(gridAxis),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            })
        }),
        [markedMoves]
    )

    let backgroundColor = blackGrid;
    if (rowIndex % 2 === 0 && colIndex % 2 === 0) {
        backgroundColor = whiteGrid
    }
    if (rowIndex % 2 !== 0 && colIndex % 2 !== 0) {
        backgroundColor = whiteGrid
    }
    return <div
        ref={drop}
        className='cell'
        style={{
            color: blackPieceColor,
            backgroundColor: backgroundColor,
            fontSize: fontSize,
        }}
        onClick={() => {
            if (startPos === undefined) {
                const from = { row: rowIndex, col: colIndex }
                setStartPos(from)
                const availableMoves = chessboard.moves({ from })
                const promotionMoves = availableMoves.filter((i: string) => i.includes('='));
                if (promotionMoves.length > 0) {
                    setPromotion(true);
                    setMoves(promotionMoves);
                }
            } else {
                const from = getGridAxis(startPos)
                const to = gridAxis
                chessboard.move({ from, to })
                setStartPos(undefined)
            }
        }}
    >
        {isOver && !canDrop && (
            <div className='overlay' style={{ backgroundColor: 'red' }} />
        )}
        {
            isOver && canDrop && (
                <div className='overlay' style={{ backgroundColor: 'green' }} />
            )
        }
        <Piece item={item} gridAxis={gridAxis} rowIndex={rowIndex} colIndex={colIndex} key={item ? `${item.color}-${item.type}` : null} />
    </div>
};

export default Cell;
