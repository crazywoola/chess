import { Node } from './ai';

test('get nodes', () => {
    const node = new Node(4, 0, 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', 'max');
    node.leafNodes();
});
