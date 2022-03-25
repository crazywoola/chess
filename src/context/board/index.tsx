import React, { FC, createContext, useState } from 'react';
import { initMap } from 'src/constant';

interface CellProps {
    col: number;
    row: number;
}
interface BoardContextProps {
    chessboard: string[][];
    resetChessboard: () => void;
    selectedCell: CellProps | undefined,
    destCell: CellProps | undefined
}
export const BoardContext = createContext<BoardContextProps>({} as BoardContextProps);

const BoardContenxtProvider: FC = ({ children }) => {
    const [chessboard, setChessboard] = useState(initMap);
    return <BoardContext.Provider
        value={{
            chessboard,
            resetChessboard: () => setChessboard(initMap),
            selectedCell: undefined,
            destCell: undefined
        }}
    >
        {children}
    </BoardContext.Provider>

};
export default BoardContenxtProvider;
