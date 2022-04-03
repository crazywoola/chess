
import MinmaxNode from './minmax';
import { PLAY_BLACK_SCORE, PLAY_WHITE_SCORE } from './constant';
export default class ABPruningNode extends MinmaxNode {
    alpha: number;
    beta: number;
    chosenMove: string;
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
        this.chosenMove = '';
    }


    minmaxab() {
        if (this.depth >= this.targetDepth) {
            return this.evaluate(this.fen);
        }
        if (this.type === 'max') {
            // max node edit alpha
            for (let i = 0; i < this.leafNodes().length; i++) {
                const [childFen, move] = this.leafNodes()[i];
                const child = new ABPruningNode(this.targetDepth, this.depth + 1, childFen, this.switchType(this.type), this.alpha, this.beta);
                const childValue = child.minmaxab();
                if (childValue > this.alpha) {
                    this.chosenMove = move;
                    this.alpha = childValue;
                }
                // this.alpha = Math.max(this.alpha, value);
                if (this.alpha >= this.beta) {
                    break;
                }
            }
            return this.alpha;
        } else {
            // min node edit beta
            for (let i = 0; i < this.leafNodes().length; i++) {
                const [childFen, move] = this.leafNodes()[i];
                const child = new ABPruningNode(this.targetDepth, this.depth + 1, childFen, this.switchType(this.type), this.alpha, this.beta);
                const childValue = child.minmaxab();
                if (childValue < this.beta) {
                    this.chosenMove = move;
                    this.beta = childValue;
                }
                // this.beta = Math.min(this.beta, value);
                if (this.alpha >= this.beta) {
                    break;
                }
            }
            return this.beta;
        }
    }
}
export class ABNode {
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
    minimaxab() {
        if (this.targetDepth === 0) {
            return this.evaluate();
        }
        if (this.isMax) {
            this.board.moves().forEach(move => {
                this.board.move(move);
                const child = new ABNode(this.targetDepth - 1, this.board, this.alpha, this.beta, !this.isMax);
                const value = Math.max(this.alpha, child.minimaxab());
                this.board.undo();
                this.alpha = Math.max(this.alpha, value)
                if (this.beta <= this.alpha) {
                    
                    return this.alpha
                }
                this.chosenMove = move;
                return this.alpha
            });

        } else {
            this.board.moves().forEach(move => {
                this.board.move(move);
                const child = new ABNode(this.targetDepth - 1, this.board, this.alpha, this.beta, this.isMax);
                const value = Math.min(this.beta, child.minimaxab());
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
