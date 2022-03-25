import React from 'react';
import 'src/App.css';
import SvgBoard from 'src/components/svg-board';
import Board from 'src/components/board';
import ThemeContenxtProvider from './context/theme';
import BoardContextProvider from 'src/context/board';

function App() {
    return (
        <ThemeContenxtProvider>
            <div className="app">
                <BoardContextProvider>
                    <div className='container'>
                        <Board />
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
