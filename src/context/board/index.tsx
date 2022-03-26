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
    // setEndPos: React.Dispatch<React.SetStateAction<CellProps | undefined>>
}
export const BoardContext = createContext<BoardContextProps>({} as BoardContextProps);

const BoardContenxtProvider: FC = ({ children }) => {
    const chess = new Chess();
    // chess.move({ from: 'g2', to: 'g3' })
    // chess.moves({ square: 'e2' })
    const [chessboard] = useState(chess);
    const [startPos, setStartPos] = useState<CellProps | undefined>(undefined);
    // const [endPos, setEndPos] = useState<CellProps | undefined>(undefined);
    return <BoardContext.Provider
        value={{
            chessboard,
            startPos,
            // endPos,
            setStartPos,
            // setEndPos
        }}
    >
        {children}
    </BoardContext.Provider>

};
export default BoardContenxtProvider;
