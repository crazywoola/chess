// minmax alg
import { Chess } from 'chess.js';
import { PLAY_BLACK_SCORE, PLAY_WHITE_SCORE } from './constant';
import shuffle from 'lodash/shuffle';

export default class MinmaxNode {
    targetDepth: number;
    fen: string;
    isMax: boolean; // min max

    constructor(targetDepth: number, fen: string, isMax: boolean) {
        this.targetDepth = targetDepth;
        this.fen = fen;
        this.isMax = isMax;
    }

    leafNodes() {
        const board = new Chess(this.fen);
        const nodes = board.moves().map((move: string) => {
            const newBoard = new Chess(this.fen);
            newBoard.move(move);
            const newFen = newBoard.fen();
            return [newFen, move];
        })
        return shuffle(nodes);
    }

    evaluate(fen: string) {
        const chessboard = new Chess(fen);
        let score = 0;
        chessboard.board().forEach((row: any[]) => {
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

    minmax() {
        if (this.targetDepth === 0) {
            return this.evaluate(this.fen);
        }
        if (this.isMax) {
            // max node edit alpha
            let max = -Infinity;
            for (let i = 0; i < this.leafNodes().length; i++) {
                const [childFen] = this.leafNodes()[i];
                const child = new MinmaxNode(this.targetDepth -1, childFen, !this.isMax);
                const value = child.minmax();
                max = Math.max(value, max);
            }
            return max;
        } else {
            // min node edit beta
            let min = Infinity;
            for (let i = 0; i < this.leafNodes().length; i++) {
                const [childFen] = this.leafNodes()[i];
                const child = new MinmaxNode(this.targetDepth - 1, childFen, this.isMax);
                const value = child.minmax();
                min = Math.min(value, min);
            }
            return min;
        }

    }

}
