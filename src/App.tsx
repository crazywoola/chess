import React from 'react';
import 'src/App.scss';
import Board from 'src/components/board';
import ThemeContenxtProvider from 'src/context/theme';
import BoardContextProvider from 'src/context/board';
import ThemeSelect from 'src/components/theme-select';
// import ActionSelect from 'src/components/action-select';
import ChessManual from 'src/components/chess-manual';

function App() {
    return (
        <ThemeContenxtProvider>
            <BoardContextProvider>
                <div className="app col">
                    <div className="paper container container-md">
                        <div className="row flex-spaces">
                            <article className="article col">
                                <h3 className=''>Simple Chess Board</h3>
                                <p className='article-meta'>Created By Banana</p>
                                <ThemeSelect />
                            </article>
                            <div className="col">
                                <Board />
                            </div>
                        </div>
                    </div>
                    <div className="paper container container-md">
                        <ChessManual />
                    </div>
                </div>
            </BoardContextProvider>
        </ThemeContenxtProvider>
    );
}

export default App;
