import shuffle from 'lodash/shuffle';
import { PLAY_BLACK_SCORE, PLAY_WHITE_SCORE } from './constant';
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

        let score = 0;
        this.board.board().forEach((row: any[]) => {
            row.forEach((piece: any) => {
                if (piece) {
                    if (piece.color === 'w') {
                        score += PLAY_WHITE_SCORE[piece.type.toUpperCase()];
                    } else {
                        score += PLAY_BLACK_SCORE[piece.type];
                    }
                }
            })
        });
        return score;
    }
    negamax() {
        if(this.targetDepth === 0) {
            return this.evaluate();
        }
        shuffle(this.board.moves()).forEach(move => {
            this.board.move(move);
            const child = new NegamaxNode(this.targetDepth - 1, this.board, this.beta, this.alpha, !this.isMax);
            const value = -child.negamax()
            this.board.undo();
            this.alpha = Math.max(this.alpha, value)

            if (this.beta <= this.alpha) {
                return value
            }
            this.chosenMove = move;
            return value
        })
    }
}
