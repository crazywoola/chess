import { Chess } from 'chess.js';
import { PLAY_BLACK_SCORE, PLAY_WHITE_SCORE } from './constant';
import shuffle from 'lodash/shuffle';

export const stupidVersion = (fen: string) => {
    const chessboard = new Chess(fen);
    const moves = chessboard.moves();
    return shuffle(moves)[0];
}

// minmax alg
export class Node {
    targetDepth: number;
    depth: number;
    fen: string;
    type: string; // min max

    constructor(targetDepth: number, depth: number, fen: string, type: string) {
        this.targetDepth = targetDepth;
        this.depth = depth;
        this.fen = fen;
        this.type = type;
    }

    leafNodes() {
        const board = new Chess(this.fen);
        const moves = board.moves();
        return moves.map((move: string) => {
            const newBoard = new Chess(this.fen);
            newBoard.move(move);
            const newFen = newBoard.fen();
            return newFen;
        })
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
    switchType = (type: string) =>{
        if (type === 'min') {
            return 'max';
        }
        if (type === 'max') {
            return 'min';
        }
    }
    minmax() {
        if (this.depth >= this.targetDepth) {
            return this.evaluate(this.fen);
        }
        if (this.type === 'max') {
            // max node edit alpha
            let max = -Infinity;
            for (let i = 0; i < this.leafNodes().length; i++) {
                const childFen = this.leafNodes()[i];
                const child = new Node(this.targetDepth, this.depth + 1, childFen, this.switchType(this.type));
                const value = child.minmax();
                if (value > max) {
                    max = value;
                }
            }
            return max;
        }
        if (this.type === 'min') {
            // min node edit beta
            let min = Infinity;
            for (let i = 0; i < this.leafNodes().length; i++) {
                const childFen = this.leafNodes()[i];
                const child = new Node(this.targetDepth, this.depth + 1, childFen, this.switchType(this.type));
                const value = child.minmax();
                if (value < min) {
                    min = value;
                }
            }
            return min;
        }
    }

}


export class NodeWithPruning extends Node {
    alpha: number;
    beta: number;

    constructor(
        targetDepth: number, 
        depth: number, 
        fen: string, 
        type: string, 
        alpha: number, 
        beta: number) {
        super(targetDepth, depth, fen, type);
        this.alpha = alpha || -Infinity;
        this.beta = beta || Infinity;
    }

    minmaxab() {
        if (this.depth >= this.targetDepth) {
            return this.evaluate(this.fen);
        }
        if (this.type === 'max') {
            // max node edit alpha
            let max = -Infinity;

            for (let i = 0; i < this.leafNodes().length; i++) {
                const childFen = this.leafNodes()[i];
                const child = new NodeWithPruning(this.targetDepth, this.depth + 1, childFen, this.switchType(this.type), this.alpha, this.beta);
                const value = child.minmax();
                this.alpha = Math.max(this.alpha, value);
                if (this.alpha >= this.beta) {
                    break;
                }
            }
            return max;
        }
        if (this.type === 'min') {
            // min node edit beta
            let min = Infinity;

            for (let i = 0; i < this.leafNodes().length; i++) {
                const childFen = this.leafNodes()[i];
                const child = new NodeWithPruning(this.targetDepth, this.depth + 1, childFen, this.switchType(this.type), this.alpha, this.beta);
                const value = child.minmax();
                this.beta = Math.min(this.beta, value);
                if (this.alpha >= this.beta) {
                    break;
                }
            }
            return min;
        }
    }

}
