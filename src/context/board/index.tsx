import React, { FC, createContext, useState } from 'react';
import { initMap } from 'src/constant';
interface BoardContextProps {
    chessboard: string[][];
    resetChessboard: () => void;
}
export const BoardContext = createContext<BoardContextProps>({} as BoardContextProps);

const BoardContenxtProvider: FC = ({ children }) => {
    const [chessboard, setChessboard] = useState(initMap);
    return <BoardContext.Provider
        value={{ 
            chessboard,
            resetChessboard: () => setChessboard(initMap)
        }}
    >
        {children}
    </BoardContext.Provider>

};
export default BoardContenxtProvider;
