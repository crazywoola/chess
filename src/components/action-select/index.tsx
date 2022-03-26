import React, { useContext } from 'react';
import { BoardContext } from 'src/context/board';
import './style.scss';

const ActionSelect = () => {
    const { resetChessboard } = useContext(BoardContext);
    return <div className='action-select'>
        <h4>Select Action</h4>
        <div className={'actions'}>
            <button className='btn-small' onClick={resetChessboard}>Reset Chessboard</button>
        </div>
    </div>
};

export default ActionSelect;
