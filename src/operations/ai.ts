import { Chess } from 'chess.js';
import shuffle from 'lodash/shuffle';

export const stupidVersion = (fen: string) => {
    const chessboard = new Chess(fen);
    const moves = chessboard.moves();
    return shuffle(moves)[0];
}
