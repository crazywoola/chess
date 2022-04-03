
import MinmaxNode from './minmax';
import { Chess } from 'chess.js';
import { bishopEvalBlack, bishopEvalWhite, evalQueen, kingEvalBlack, kingEvalWhite, knightEval, pawnEvalBlack, pawnEvalWhite, rookEvalBlack, rookEvalWhite } from './constant';

export default class ABPruningNode extends MinmaxNode {
    alpha: number;
    beta: number;
    chosenMove: string;
    nodes: number;
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

    getPieceValue(piece: any, x: number, y: number) {
        if (piece === null) {
            return 0;
        }
        const getAbsoluteValue = function (piece: any, isWhite: boolean, x: number, y: number) {
            if (piece) {
                if (piece.type === 'p') {
                    return 10 + (isWhite ? pawnEvalWhite[y][x] : pawnEvalBlack[y][x]);
                } else if (piece.type === 'r') {
                    return 50 + (isWhite ? rookEvalWhite[y][x] : rookEvalBlack[y][x]);
                } else if (piece.type === 'n') {
                    return 30 + knightEval[y][x];
                } else if (piece.type === 'b') {
                    return 30 + (isWhite ? bishopEvalWhite[y][x] : bishopEvalBlack[y][x]);
                } else if (piece.type === 'q') {
                    return 90 + evalQueen[y][x];
                } else if (piece.type === 'k') {
                    return 900 + (isWhite ? kingEvalWhite[y][x] : kingEvalBlack[y][x]);
                }
            }
        };

        const absoluteValue = getAbsoluteValue(piece, piece.color === 'w', x, y);
        return piece.color === 'w' ? absoluteValue : -absoluteValue;
    };

    evaluate(fen: string) {
        const chessboard = new Chess(fen);
        let score = 0;
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                score = score + this.getPieceValue(chessboard.board()[i][j], i, j);
            }
        }
        return score;
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
