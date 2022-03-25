import React from 'react';
import 'src/App.scss';
import SvgBoard from 'src/components/svg-board';
import Board from 'src/components/board';
import ThemeContenxtProvider from 'src/context/theme';
import BoardContextProvider from 'src/context/board';
import ThemeSelect from 'src/components/theme-select';
import ActionSelect from 'src/components/action-select';

function App() {
    return (
        <ThemeContenxtProvider>
            <div className="app">
                <BoardContextProvider>
                    <div className='container'>
                        <Board />
                        <ThemeSelect />
                        <ActionSelect />
                    </div>
                    <div className='container'>
                        <SvgBoard />
                    </div>
                </BoardContextProvider>
            </div>
        </ThemeContenxtProvider>
    );
}

export default App;
