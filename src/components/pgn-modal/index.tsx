import React, { useContext } from 'react';
import { BoardContext } from 'src/context/board';
import BasicModal from 'src/components/modal';
// rnbqkbnr/p2p1Qpp/1p6/2p1p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4
const PGNModal = () => {
    const { isGameOver, chessboard, resetChessboard } = useContext(BoardContext);

    return <BasicModal
        id='modal-pgn'
        show={isGameOver}
        title='PGN'
        size='sm'
        operations={resetChessboard}
        children={
            <>
                <h5>Game Over!</h5>
            <pre>
                <code>
                    {chessboard.pgn()}
                </code>
            </pre>
            </>
        }
    />
}

export default PGNModal;
