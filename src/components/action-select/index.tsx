import React, { useContext, useState } from 'react';
import { BoardContext } from 'src/context/board';
import './style.scss';

const ActionSelect = () => {
    const { chessboard, resetChessboard, loadFEN, toggleAI, isAI, setAILevel } = useContext(BoardContext);

    const [show, setShow] = useState(false)
    const resetConds = () => {
        setShow(false);
    };

    const FENModal = () => {
        const [fen, setFen] = useState('');
        return <>
            <input className="modal-state" id="modal-fen" type="checkbox" checked={show} onChange={() => { }}></input>
            <div className="modal">
                <label className="modal-bg" htmlFor="modal-fen" ></label>
                <div className="modal-body container container-sm">
                    <label className="btn-close" htmlFor="modal-fen" onClick={resetConds}>X</label>
                    <h4 className="modal-title">Load FEN</h4>
                    <h5 className="modal-subtitle">Please input your valid FEN string here.</h5>
                    <div className="col">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
                                className='input-block'
                                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                                    setFen(evt.target.value);
                                }}
                            />
                        </div>
                        <button className='btn-small btn-primary btn-block' onClick={() => {
                            const validation = chessboard.validate_fen(fen);
                            if (validation.valid) {
                                loadFEN(fen);
                            }
                        }}>Ok!</button>
                    </div>
                </div>
            </div>
        </>
    };


    return <div className='action-select'>
        <FENModal />
        <h4>AI?</h4>
        <div className="row">
            <button className='btn-small ' onClick={toggleAI}>AI {isAI.value ? 'ON' : 'OFF'}</button>

        </div>
        <h4>Level: {isAI.level}</h4>
        <div className="row">
            <button className='btn-small btn-mute' onClick={() => { setAILevel(0) }}>Level 0</button>
            <button className='btn-small btn-primary' onClick={() => { setAILevel(1) }}>Level 1</button>
            <button className='btn-small btn-secondary' onClick={() => { setAILevel(2) }}>Level 2</button>
            <button className='btn-small btn-success' onClick={() => { setAILevel(3) }}>Level 3</button>
            <button className='btn-small btn-warning' onClick={() => { setAILevel(4) }}>Level 4</button>
            <button className='btn-small btn-danger' onClick={() => { setAILevel(5) }}>Level 5</button>
        </div>

        <h4>Select Action</h4>
        <div className="row">
            <button className='btn-small' onClick={resetChessboard}>Reset Game</button>
        </div>
        <div className="row">
            <button className='btn-small' onClick={() => { setShow(true) }}>Load FEN</button>
        </div>


    </div>
};

export default ActionSelect;
