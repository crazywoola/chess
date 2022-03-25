import React, { FC, createContext, useState } from 'react';
import {
    borderColor,
    whiteGrid,
    blackGrid,
    pieceColor,
    gridSize,
    fontSize,
} from 'src/constant';

interface ThemeProps {
    borderColor: string;
    whiteGrid: string;
    blackGrid: string;
    pieceColor: string;
    gridSize: number;
    fontSize: number;
}
interface ThemeContextProps {
    theme: ThemeProps;
    selectTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const ThemeContenxtProvider: FC = ({ children }) => {
    const [theme] = useState<ThemeProps>({
        borderColor,
        whiteGrid,
        blackGrid,
        pieceColor,
        gridSize,
        fontSize,
    });
    return <ThemeContext.Provider
        value={{
            theme,
            selectTheme: () => {
                console.log('select theme');
            },
        }}
    >
        {children}
    </ThemeContext.Provider>

};
export default ThemeContenxtProvider;
