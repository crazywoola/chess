import React, { FC, createContext, useState } from 'react';
import Chess from 'chess.js';
interface CellProps {
    col: number;
    row: number;
}
interface BoardContextProps {
    chessboard: any;
    startPos: CellProps | undefined;
    promotion: boolean;
    moves: string[];
    setMoves: React.Dispatch<React.SetStateAction<string[]>>;
    setPromotion: React.Dispatch<React.SetStateAction<boolean>>;
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
    const cleanup = () => {
        setStartPos(undefined);
        setMoves([]);
        setPromotion(false);
    }
    return <BoardContext.Provider
        value={{
            chessboard,
            startPos,
            promotion,
            moves,
            setMoves,
            setPromotion,
            setStartPos,
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
