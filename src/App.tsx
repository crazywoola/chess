import React, { useState } from 'react';
import 'src/App.scss';
import Board from 'src/components/board';
import ThemeContenxtProvider from 'src/context/theme';
import BoardContextProvider from 'src/context/board';
import ThemeSelect from 'src/components/theme-select';
import ActionSelect from 'src/components/action-select';
import ChessManual from 'src/components/chess-manual';

function App() {
    const [showChessManual, setShowChessManual] = useState(false);
    return (
        <ThemeContenxtProvider>
            <BoardContextProvider>
                <div className="col">
                    <div className="paper container">
                        <div className="row flex-spaces">
                            <article className="article">
                                <h3 className=''>Simple Chess Board</h3>
                                <p className='article-meta'>Created By Banana</p>
                            </article>
                            <div className="">
                                <Board />
                            </div>
                        </div>
                    </div>
                </div>
                {showChessManual && <div className="col">
                    <div className="paper container">
                        <ChessManual />
                    </div>
                </div>}
                <div className='side-menu'>
                    <button onClick={() => setShowChessManual(s => !s)}>Open Chess Manmual</button>
                    <ThemeSelect />
                    <ActionSelect />
                </div>
            </BoardContextProvider>
        </ThemeContenxtProvider>
    );
}

export default App;
