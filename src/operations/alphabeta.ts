
import MinmaxNode from './minmax';
import shuffle from 'lodash/shuffle';
import {
    bishop_value,
    black_bishop,
    black_king,
    black_knight,
    black_pawn,
    black_queen,
    black_rook,
    king_value,
    knight_value,
    pawn_value,
    queen_value,
    rook_value,
    white_bishop,
    white_king,
    white_knight,
    white_pawn,
    white_queen,
    white_rook
} from './constant';
export class ABPruningNode extends MinmaxNode {
    alpha: number;
    beta: number;
    chosenMove: string;
    constructor(
        targetDepth: number,
        fen: string,
        alpha: number,
        beta: number,
        isMax: boolean
    ) {
        super(targetDepth, fen, isMax);
        this.alpha = alpha || -Infinity;
        this.beta = beta || Infinity;
        this.chosenMove = '';
    }

    minmaxab() {
        if (this.targetDepth === 0) {
            return this.evaluate(this.fen);
        }
        if (this.isMax) {
            // max node edit alpha
            for (let i = 0; i < this.leafNodes().length; i++) {
                const [childFen, move] = this.leafNodes()[i];
                const child = new ABPruningNode(this.targetDepth - 1, childFen, this.alpha, this.beta, !this.isMax);
                const childValue = child.minmaxab();
                if (childValue > this.alpha) {
                    this.chosenMove = move;
                    this.alpha = childValue;
                }
                if (this.alpha >= this.beta) {
                    break;
                }
            }
            return this.alpha;
        } else {
            // min node edit beta
            for (let i = 0; i < this.leafNodes().length; i++) {
                const [childFen, move] = this.leafNodes()[i];
                const child = new ABPruningNode(this.targetDepth - 1, childFen, this.alpha, this.beta, this.isMax);
                const childValue = child.minmaxab();
                if (childValue < this.beta) {
                    this.chosenMove = move;
                    this.beta = childValue;
                }
                if (this.alpha >= this.beta) {
                    break;
                }
            }
            return this.beta;
        }
    }
}
export default class ABNode {
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
        if (this.board.in_checkmate()) { return this.isMax ? Infinity : -Infinity }
        if (this.board.in_threefold_repetition() || this.board.in_stalemate() || this.board.in_draw()) {
            return this.isMax ? Infinity : -Infinity
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
    minmaxab() {
        if (this.targetDepth === 0) {
            return this.evaluate();
        }
        if (this.isMax) {
            shuffle(this.board.moves()).forEach(move => {
                this.board.move(move);
                const child = new ABNode(this.targetDepth - 1, this.board, this.alpha, this.beta, !this.isMax);
                const value = Math.max(this.alpha, child.minmaxab());
                this.board.undo();
                this.alpha = value
                if (this.beta <= this.alpha) {
                    return this.alpha
                }
                this.chosenMove = move;
                return this.alpha
            });

        } else {
            shuffle(this.board.moves()).forEach(move => {
                this.board.move(move);
                const child = new ABNode(this.targetDepth - 1, this.board, this.alpha, this.beta, this.isMax);
                const value = Math.min(this.beta, child.minmaxab());
                this.board.undo();
                this.beta = Math.min(this.beta, value)
                if (this.beta <= this.alpha) {
                    return this.beta
                }
                this.chosenMove = move;
                return this.beta
            });

        }
    }
}
