import React, { useContext, useCallback, useEffect } from 'react';
import { ThemeContext } from 'src/context/theme';
import { BoardContext } from 'src/context/board';
import { getGridAxis } from 'src/operations/index';
import { xAxis, yAxis } from 'src/constant';
import PromotionModal from 'src/components/promotion-modal';
import PGNModal from 'src/components/pgn-modal';
import './style.scss';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Cell from './cell';
import Preview from './preview';
import { DragDropType } from 'src/constant';
import { stupidVersion } from 'src/operations/ai';

const ChessBoard = () => {
    const { theme: { gridSize, borderColor } } = useContext(ThemeContext);
    const { 
        chessboard, 
        showTips, 
        setShowTips,
        turn,
        setTurn,
        isAI,
    } = useContext(BoardContext);
    const renderPreview = useCallback(({ item }: any) => {
        return (
            <div className={`piece-${item.color}-${item.type}`} style={{
                width: gridSize * 2,
                height: gridSize * 2
            }} />
        );
    }, [gridSize]);
    useEffect(() => {
        // play black
        if(isAI.value && turn === 'b') {
            // use AI
            const fen = chessboard.fen();
            const stupidMove = stupidVersion(fen);
            console.log(fen);
            console.log(stupidMove);
            setTimeout(() => {
                chessboard.move(stupidMove);
                setTurn(chessboard.turn());
            }, 1000);
        }
    }, [turn, isAI, chessboard, setTurn]);
    return <DndProvider backend={HTML5Backend}>
        <div className="board-container" style={{
            border: `1px solid ${borderColor}`,
        }}>
            <Preview type={DragDropType} offset={gridSize * 2}>
                {renderPreview}
            </Preview>
            <PromotionModal />
            <PGNModal />
            <div
                className='left-bar'
                style={{
                    height: 8 * gridSize,
                }}
            >
                {yAxis.map((i) => <span key={i}>{i}</span>)}
            </div>
            <div>
                <div
                    className='top-bar'
                    style={{
                        width: 8 * gridSize,
                    }}
                >
                    {xAxis.map((i) => <span key={i}>{i.toLowerCase()}</span>)}
                </div>

                <div className='board' style={{
                    width: 8 * gridSize,
                    height: 8 * gridSize,
                    border: `1px solid ${borderColor}`,
                }}>
                    {chessboard.board().map((row: object[], rowIndex: number) => {
                        return row.map((item: any, colIndex: number) => {
                            return <Cell
                                key={getGridAxis({ row: rowIndex, col: colIndex })}
                                gridAxis={getGridAxis({ row: rowIndex, col: colIndex })}
                                item={item}
                                rowIndex={rowIndex}
                                colIndex={colIndex}
                            />
                        })
                    })}
                </div>
                <div
                    className='bottom-bar'
                    style={{
                        width: 8 * gridSize,
                    }}
                >
                    {xAxis.map((i) => <span key={i}>{i}</span>)}
                </div>
            </div>
            <div
                className='right-bar'
                style={{
                    height: 8 * gridSize,
                }}
            >
                {yAxis.map((i) => <span key={i}>{i}</span>)}
            </div>

        </div>
        <div className="flex-center align-middle">
            <div className="col">
                Current Move: {chessboard.turn() === 'w' ? 'White' : 'Black'}
            </div>
            <fieldset className="form-group">
                <label htmlFor="showTips" className="paper-switch-label">
                    Show Availble Moves
                </label>
                <label className="paper-switch">
                    <input id="showTips" name="showTips" type="checkbox" checked={showTips} onChange={() => setShowTips(s => !s)} />
                    <span className="paper-switch-slider round"></span>
                </label>
            </fieldset>
        </div>
    </DndProvider>
};

export default ChessBoard;
