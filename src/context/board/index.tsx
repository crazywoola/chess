import React, { FC, createContext } from 'react';
// import { initMap } from 'src/constant';

interface BoardContextProps {
    lorem: string;
}
export const BoardContext = createContext<BoardContextProps>({} as BoardContextProps);

const BoardContenxtProvider: FC = ({ children }) => {
    return <BoardContext.Provider
        value={{ 
            lorem: 'lorem'
        }}
    >
        {children}
    </BoardContext.Provider>

};
export default BoardContenxtProvider;
