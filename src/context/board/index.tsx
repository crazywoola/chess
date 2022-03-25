import React, { FC, createContext } from 'react';
// import { initMap } from 'src/constant';

interface BoardContextProps {

}
export const BoardContext = createContext<BoardContextProps>({} as BoardContextProps);

const BoardContenxtProvider: FC = ({ children }) => {
    return <BoardContext.Provider
        value={{ 

        }}
    >
        {children}
    </BoardContext.Provider>

};
export default BoardContenxtProvider;
