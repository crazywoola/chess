import React, { FC, createContext, useState } from 'react';
import Chess from 'chess.js';
interface CellProps {
    col: number;
    row: number;
}
interface BoardContextProps {
    chessboard: any;
    startPos: CellProps | undefined,
    // endPos: CellProps | undefined
    setStartPos: React.Dispatch<React.SetStateAction<CellProps | undefined>>
    resetChessboard: () => void;
}
export const BoardContext = createContext<BoardContextProps>({} as BoardContextProps);

const BoardContenxtProvider: FC = ({ children }) => {
    // chess.move({ from: 'g2', to: 'g3' })
    // chess.moves({ square: 'e2' })
    const [chessboard, setChessboard] = useState(new Chess());
    const [startPos, setStartPos] = useState<CellProps | undefined>(undefined);
    // const [endPos, setEndPos] = useState<CellProps | undefined>(undefined);
    return <BoardContext.Provider
        value={{
            chessboard,
            startPos,
            // endPos,
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
