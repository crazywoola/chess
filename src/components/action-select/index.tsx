import React, { useContext } from 'react';
import { BoardContext } from 'src/context/board';
import './style.scss';

const ActionSelect = () => {
    const { chessboard } = useContext(BoardContext);
    return <div className='action-select'>
        <h4>Select Action</h4>
        <div className={'actions'}>
            <button className='btn-small' onClick={() => chessboard.reset() }>Reset Chessboard</button>
        </div>
    </div>
};

export default ActionSelect;
