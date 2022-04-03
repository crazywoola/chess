// import MinmaxNode from './minmax';
import ABNode from './alphabeta';
import  NegamaxNode from './negamax';
import {
    Chess
} from 'chess.js';

// test('minmax', () => {
//     const node = new MinmaxNode(3, 0, 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1', 'max');
//     node.minmax();
// })

// test('minmax with pruning', () => {
//     const board = new Chess('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1');
//     const node = new ABNode(4, board, -Infinity, Infinity, true);
//     node.minmaxab();
//     console.log(node.chosenMove);
// })

test('negamax with pruning', () => {
    const board = new Chess('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1');
    const node = new NegamaxNode(4, board, -Infinity, Infinity, true);
    node.negamax();
    console.log(node.chosenMove);
})
