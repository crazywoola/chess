import MinmaxNode from './minmax';
import ABPruningNode from './alphabeta';
import NegamaxNode from './negamax';
import {
    Chess
} from 'chess.js';

test('minmax', () => {
    const node = new MinmaxNode(2, 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1', true);
    node.minmax();
})

test('minmax with pruning', () => {
    const node = new ABPruningNode(3, 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1', -Infinity, Infinity, true);
    node.minmaxab();
    console.log(node.chosenMove);
})

test('negamax with pruning', () => {
    const board = new Chess('rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1');
    const node = new NegamaxNode(3, board, -Infinity, Infinity, true);
    node.negamax();
    console.log(node.chosenMove);
})
