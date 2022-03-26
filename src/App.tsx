import React from 'react';
import 'src/App.scss';
import ChessBoard from 'src/components/chessboard';
import ThemeContenxtProvider from 'src/context/theme';
import BoardContextProvider from 'src/context/board';
import ThemeSelect from 'src/components/theme-select';
import ActionSelect from 'src/components/action-select';
import ChessManual from 'src/components/chess-manual';

function App() {
    return (
        <ThemeContenxtProvider>
            <BoardContextProvider>
                <div className="container-md">
                    <div className="row">
                        <div className="sm-4 col main-container">
                            <article className="article">
                                <h3 className='article-title'>Simple Chess Board</h3>
                                <h3 className='article-meta'>Made by banana with ❤️</h3>
                            </article>
                            <ChessBoard />
                        </div>
                        
                        <div className="sm-6 col">
                            <div className="paper">
                                <ChessManual />
                            </div>
                        </div>

                        <div className="sm-2 col">
                            <ThemeSelect />
                            <ActionSelect />
                        </div>
                    </div>
                </div>
            </BoardContextProvider>
        </ThemeContenxtProvider>
    );
}

export default App;
