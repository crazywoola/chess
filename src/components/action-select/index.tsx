import React from 'react';
import './style.scss';

const ActionSelect = () => {
    return <div className='action-select'>
        <h4>Select Action</h4>
        <div className={'actions'}>
            <button className='btn-small'>Reset Chessboard</button>
        </div>
    </div>
};

export default ActionSelect;
