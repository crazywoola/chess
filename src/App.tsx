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
                            <article className="article">
                                <h3 className="article-title">
                                    <a target='_blank' href="https://juejin.cn/column/7080521791587745829" rel="noreferrer">
                                        掘金专栏系列
                                    </a>
                                </h3>
                                <p className="article-meta">Written by <a href="https://juejin.cn/user/3051900006329550" target={'_blank'} rel="noreferrer">尖沙咀最强布拿拿</a></p>
                                <ul>
                                    <li><a href="https://juejin.cn/post/7080522430413799460" target={'_blank'} rel="noreferrer">第一部分</a></li>
                                    <li><a href="https://juejin.cn/post/7080767359895633934" target={'_blank'} rel="noreferrer">第二部分</a></li>
                                    <li><a href="https://juejin.cn/post/7080810506595860493" target={'_blank'} rel="noreferrer">第三部分</a></li>
                                    <li><a href="https://juejin.cn/post/7080887152308912158" target={'_blank'} rel="noreferrer">第四部分</a></li>
                                    <li><a href="https://juejin.cn/post/7080886227662012453" target={'_blank'} rel="noreferrer">第五部分</a></li>
                                    <li><a href="https://juejin.cn/post/7081279300866932743" target={'_blank'} rel="noreferrer">第六部分</a></li>
                                </ul>
                                <p className="text-lead">AI 算法</p>
                                <ul>
                                    <li><a href="https://juejin.cn/post/7082567868390309895" target={'_blank'} rel="noreferrer">Minmax、αβ Pruning、Negamax</a></li>
                                </ul>
                                <div className="row">
                                    <a href="https://github.com/crazywoola/chess" target={'_blank'} rel="noreferrer" className='paper-btn'>Github Repo</a>
                                    {/* <a href="https://github.com/crazywoola" target={'_blank'} rel="noreferrer" className='paper-btn'></a> */}
                                    <a href="https://juejin.cn/column/7080521791587745829" target={'_blank'} rel="noreferrer" className='paper-btn gap btn-secondary-outline'>Read More</a>
                                </div>
                            </article>

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
