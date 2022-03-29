import React, { FC, createContext, useState } from 'react';


interface AlertContextProps {
    text: string;
    clear: () => void;
}
export const AlertContext = createContext<AlertContextProps>({} as AlertContextProps);

const AlertContenxtProvider: FC = ({ children }) => {
    const [text, setText] = useState('');
    return <AlertContext.Provider
        value={{
            text,
            clear: () => setText(''),
        }}
    >
        {children}
    </AlertContext.Provider>

};
export default AlertContenxtProvider;
