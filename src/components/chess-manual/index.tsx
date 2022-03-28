import React, { useContext } from 'react';
import { BoardContext } from 'src/context/board';
import chunk from 'lodash/chunk';
import djs from 'dayjs';

const ChessManual = () => {
    const { chessboard } = useContext(BoardContext);
    const history: any[] = chunk(chessboard.history({ verbose: true }), 2);
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
                            <th>Notation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map(([first, second], idx: number) => {
                            console.log(first, second);
                            return <tr key={idx}>
                                <td>{idx}</td>
                                <td></td>
                                <td></td>
                                <td>{first?.san} {second?.san}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    </article>
};

export default ChessManual;
