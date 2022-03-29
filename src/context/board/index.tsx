import React, { FC, createContext, useState, useEffect } from 'react';
import Chess from 'chess.js';
import { getGridAxis } from 'src/operations';
interface CellProps {
    col: number;
    row: number;
}
interface BoardContextProps {
    chessboard: any;
    startPos: CellProps | undefined;
    promotion: boolean;
    moves: string[];
    showTips: boolean;
    markedMoves: string[];
    setMoves: React.Dispatch<React.SetStateAction<string[]>>;
    setPromotion: React.Dispatch<React.SetStateAction<boolean>>;
    setShowTips: React.Dispatch<React.SetStateAction<boolean>>;
    setStartPos: React.Dispatch<React.SetStateAction<CellProps | undefined>>;
    resetChessboard: () => void;
    loadFEN: (fen: string) => void;
}
export const BoardContext = createContext<BoardContextProps>({} as BoardContextProps);

const BoardContenxtProvider: FC = ({ children }) => {
    const [chessboard, setChessboard] = useState(new Chess());
    const [startPos, setStartPos] = useState<CellProps | undefined>(undefined);
    const [promotion, setPromotion] = useState(false);
    const [moves, setMoves] = useState<string[]>([])
    const [showTips, setShowTips] = useState(false);
    const [markedMoves, setMarkedMoves] = useState<string[]>([]);

    const cleanup = () => {
        setStartPos(undefined);
        setMoves([]);
        setPromotion(false);
    }

    useEffect(() => {
        if (startPos && showTips) {
            chessboard.moves({ square: getGridAxis(startPos), verbose: true })
            setMarkedMoves([...chessboard.moves({ square: getGridAxis(startPos), verbose: true }).map((i: any) => i.to)]);
        } else {
            setMarkedMoves([]);
        }
    }, [chessboard, showTips, startPos]);
    return <BoardContext.Provider
        value={{
            chessboard,
            startPos,
            promotion,
            moves,
            setMoves,
            setPromotion,
            setStartPos,
            showTips,
            setShowTips,
            markedMoves,
            resetChessboard: () => {
                const newBoard = new Chess();
                cleanup();
                setChessboard(newBoard);
            },
            loadFEN: (fen: string) => {
                const newBoard = new Chess(fen);
                cleanup();
                setChessboard(newBoard)
            }
        }}
    >
        {children}
    </BoardContext.Provider>

};
export default BoardContenxtProvider;
