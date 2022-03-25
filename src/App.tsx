import React from 'react';
import 'src/App.scss';
import Board from 'src/components/board';
import ThemeContenxtProvider from 'src/context/theme';
import BoardContextProvider from 'src/context/board';
import ThemeSelect from 'src/components/theme-select';
import ActionSelect from 'src/components/action-select';
import ChessManual from 'src/components/chess-manual';

function App() {
    return (
        <ThemeContenxtProvider>
            <BoardContextProvider>
                <div className="app">
                    <div className="row">
                        <div className="sm-12 md-12 lg-6 col">
                            <div className='paper container-md'>
                                <div className='row'>
                                    <div className="col col-3">
                                        <ThemeSelect />
                                        <ActionSelect />
                                    </div>
                                    <div className="col col-6">
                                        <Board />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm-12 md-12 lg-4 col">
                            <div className='paper container-md'>
                                <ChessManual />
                            </div>
                        </div>
                    </div>

                </div>

            </BoardContextProvider>
        </ThemeContenxtProvider>
    );
}

export default App;
