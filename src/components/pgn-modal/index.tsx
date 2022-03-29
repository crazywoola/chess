import React from 'react';
const PGNModal = () => {
    return <>
        <input className="modal-state" id="modal-pgn" type="checkbox" checked={true} onChange={() => { }} />
        <div className="modal">
            <label className="modal-bg" htmlFor="modal-pgn" ></label>
            <div className="modal-body container container-sm">
                <label className="btn-close" htmlFor="modal-pgn">X</label>
                <h3 className='modal-title'>PGN</h3>
                <pre>
                    <code>
                        1.e4 e5
                    </code>
                </pre>
            </div>
        </div>
    </>
}

export default PGNModal;
