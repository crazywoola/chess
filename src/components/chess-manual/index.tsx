import React, { useContext } from 'react';
import { BoardContext } from 'src/context/board';
import chunk from 'lodash/chunk';
const ChessManual = () => {
    const { chessboard } = useContext(BoardContext);
    return <article className='article'>
        <h4 className=''>Chess Manual</h4>
        {/* <p className="article-meta">Written by Banana</p> */}
        <div className="row">
            <div className="col padding-none">
                <ol>
                    {chunk(chessboard.history(), 2).map((i: any, idx: number) => {
                        return <li key={idx}>{i[0]} {i[1]}</li>
                    })}
                </ol>
            </div>
        </div>

    </article>
};

export default ChessManual;
