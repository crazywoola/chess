import shuffle from 'lodash/shuffle';
import { bishop_value, black_bishop, black_king, black_knight, black_pawn, black_queen, black_rook, king_value, knight_value, pawn_value, queen_value, rook_value, white_bishop, white_king, white_knight, white_pawn, white_queen, white_rook } from './constant';
export default class NegamaxNode {
    targetDepth: number;
    board: any;
    alpha: number;
    beta: number;
    isMax: boolean;
    chosenMove: string;
    constructor(
        targetDepth: number,
        board: any,
        alpha: number,
        beta: number,
        isMax: boolean,
    ) {
        this.targetDepth = targetDepth
        this.alpha = alpha || -Infinity;
        this.beta = beta || Infinity;
        this.isMax = isMax;
        this.board = board;
        this.chosenMove = '';
    }
    evaluate() {
        if (this.board.in_checkmate()) { return this.board.turn() === 'w' ? Infinity : -Infinity }
        if (this.board.in_threefold_repetition() || this.board.in_stalemate() || this.board.in_draw()) {
            return this.board.turn() === 'w' ? Infinity : -Infinity
        }

        let total = 0

        // loop through the board
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                // get every piece
                const piece = this.board.get(String.fromCharCode(97 + i) + (j + 1))
                if (!piece) { continue }


                let index = j * 8 + i
                switch (piece.type) {
                    case 'p': total += (piece.color === 'w' ? pawn_value + white_pawn[index] : - (pawn_value + black_pawn[index])); break
                    case 'n': total += (piece.color === 'w' ? knight_value + white_knight[index] : - (knight_value + black_knight[index])); break
                    case 'b': total += (piece.color === 'w' ? bishop_value + white_bishop[index] : - (bishop_value + black_bishop[index])); break
                    case 'r': total += (piece.color === 'w' ? rook_value + white_rook[index] : - (rook_value + black_rook[index])); break
                    case 'q': total += (piece.color === 'w' ? queen_value + white_queen[index] : - (queen_value + black_queen[index])); break
                    case 'k': total += (piece.color === 'w' ? king_value + white_king[index] : - (king_value + black_king[index])); break // CHANGE TO "w/b_king_endgame" table on endgame positions
                }
            }
        }

        return this.board.turn() === 'w' ? total : -total
    }

    negamax() {
        if (this.targetDepth === 0) {
            return this.evaluate();
        }
        shuffle(this.board.moves()).forEach(move => {
            this.board.move(move);
            const child = new NegamaxNode(this.targetDepth - 1, this.board, -this.beta, -this.alpha, !this.isMax);
            const value = -child.negamax()
            this.board.undo();
            this.alpha = Math.max(this.alpha, value);
            if (this.alpha >= this.beta) {
                return;
            }
            this.chosenMove = move;
        })
        return this.alpha
    }
}
