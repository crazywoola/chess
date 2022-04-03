import {
    Node,
    NodeWithPruning,
} from './ai';

test('evaluate boards', () => {
    const node = new Node(4, 0, 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', 'max');
    node.evaluate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
});

// test('minmax', () => {
//     const node = new Node(3, 0, 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1', 'max');
//     node.minmax();
// })

test('node evaluate boards with pruning', () => {
    const node = new NodeWithPruning(4, 0, 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', 'max');
    node.evaluate('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
});

test('minmax with pruning', () => {
    const node = new NodeWithPruning(3, 0, 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1', 'max');
    node.minmaxab();
})
