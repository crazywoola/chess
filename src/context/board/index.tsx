import React, { FC, createContext, useState } from 'react';
import { initMap } from 'src/constant';
interface BoardContextProps {
    chessboard: string[][];
}
export const BoardContext = createContext<BoardContextProps>({} as BoardContextProps);

const BoardContenxtProvider: FC = ({ children }) => {
    const [chessboard, ] = useState(initMap);
    return <BoardContext.Provider
        value={{ 
            chessboard
        }}
    >
        {children}
    </BoardContext.Provider>

};
export default BoardContenxtProvider;
