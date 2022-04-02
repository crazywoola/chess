import { Chess } from 'chess.js';
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

    evaluate() {
        // TODO
        return 0
    }

    minmax() {
        if (this.targetDepth === this.depth) {
            return this.evaluate();
        }
        if (this.type === 'max') {
            let max = -Infinity;
            for (let i = 0; i < this.leafNodes.length; i++) {
                const childFen = this.leafNodes[i];
                const child = new Node(this.targetDepth, this.depth + 1, childFen, 'min');
                const value = child.minmax();
                if (value > max) {
                    max = value;
                }
            }
            return max;
        }
        if (this.type === 'min') {
            let min = Infinity;
            for (let i = 0; i < this.leafNodes.length; i++) {
                const childFen = this.leafNodes[i];
                const child = new Node(this.targetDepth, this.depth + 1, childFen, 'max');
                const value = child.minmax();
                if (value < min) {
                    min = value;
                }
            }
            return min;
        }
    }

}

