import React, { FC, createContext, useState } from 'react';
interface AlertContextProps {
    show: boolean;
    text: string;
    clear: () => void;
}
export const AlertContext = createContext<AlertContextProps>({} as AlertContextProps);

const AlertContenxtProvider: FC = ({ children }) => {
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Hello Chess!');
    return <AlertContext.Provider
        value={{
            show,
            text,
            clear: () =>{
                setText('');
                setShow(false);
            },
        }}
    >
        {children}
    </AlertContext.Provider>

};
export default AlertContenxtProvider;
