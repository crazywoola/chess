import React, { useContext } from 'react';
import { BoardContext } from 'src/context/board';
import chunk from 'lodash/chunk';
import djs from 'dayjs';

const ChessManual = () => {
    const { chessboard } = useContext(BoardContext);
    return <article className='article'>
        <h4 className=''>Chess Manual</h4>
        <p className="article-meta">Created At {djs().format('YYYY-MM-DD')}</p>
        <div className="row">
            <div className="col-12 padding-none">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>White</th>
                            <th>Black</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chunk(chessboard.history(), 2).map((i: any, idx: number) => {
                            return <tr>
                                <td>{idx}</td>
                                <td>{i[0]}</td>
                                <td>{i[1]}</td>
                                <td></td>
                            </tr>
                        })}
                    </tbody>
                </table>
                {/* <ol>
                    {chunk(chessboard.history(), 2).map((i: any, idx: number) => {
                        return <li key={idx}>{i[0]} {i[1]}</li>
                    })}
                </ol> */}
            </div>
        </div>

    </article>
};

export default ChessManual;
