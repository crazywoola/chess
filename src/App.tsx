import React, { useState } from 'react';
import 'src/App.scss';
import ThemeContenxtProvider from 'src/context/theme';
import BoardContextProvider from 'src/context/board';

import ThemeSelect from 'src/components/theme-select';
import ChessBoard from 'src/components/chessboard';
import ActionSelect from 'src/components/action-select';
import ChessManual from 'src/components/chess-manual';

function App() {
    const [tab, setTab] = useState(0);
    return (
        <ThemeContenxtProvider>
            <BoardContextProvider>
                <div className="main-container">
                    <h4 className=''>Simple Chess Board</h4>
                    <p className=''>Made by <a target="blank" href="https://github.com/crazywoola">banana</a> with ❤️</p>
                </div>
                <div className="row flex-spaces tabs">
                    <input id="chessboard" type="radio" name="tabs" checked={tab === 0} onChange={() => setTab(0)} />
                    <label htmlFor="chessboard" >Chessboard</label>

                    <input id="manual" type="radio" name="tabs" checked={tab === 1} onChange={() => setTab(1)} />
                    <label htmlFor="manual" >Manual</label>

                    <input id="about" type="radio" name="tabs" checked={tab === 2} onChange={() => setTab(2)} />
                    <label htmlFor="about" >About</label>
                </div>
                {tab === 2 && <>
                    <div className="content">
                        <div className="paper container container-lg">

                        </div>
                    </div>
                </>}
                {tab === 1 && <>
                    <div className="content">
                        <div className="paper container container-lg">
                            <ChessManual />
                        </div>
                    </div>
                </>}
                {tab === 0 && <>
                    <div className="content">
                        <div className="paper container container-lg">
                            <div className="row">
                                <div className="sm-8 col">
                                    <div className="main-container">
                                        <ChessBoard />
                                    </div>
                                </div>
                                <div className="col-fill col">
                                    <ActionSelect />
                                    <ThemeSelect />
                                </div>
                            </div>
                        </div>
                    </div>
                </>}
            </BoardContextProvider>
        </ThemeContenxtProvider>
    );
}

export default App;
