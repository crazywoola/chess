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
}
export const BoardContext = createContext<BoardContextProps>({} as BoardContextProps);

const BoardContenxtProvider: FC = ({ children }) => {
    const [chessboard, setChessboard] = useState(new Chess());
    const [startPos, setStartPos] = useState<CellProps | undefined>(undefined);
    const [promotion, setPromotion] = useState(false);
    const [moves, setMoves] = useState<string[]>([])
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
                setChessboard(new Chess())
            }
        }}
    >
        {children}
    </BoardContext.Provider>

};
export default BoardContenxtProvider;
