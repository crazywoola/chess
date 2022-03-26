import { move, toPiece } from './index';
import { initMap, FUNC, WHITE, BLACK } from 'src/constant';
test('board: did not move', () => {
    const startPos = { col: 0, row: 0 }
    const endPos = { col: 0, row: 0 }
    const newBoard = move(initMap, startPos, endPos);
    expect(newBoard).toEqual(initMap);
});

test('board: did move', () => {
    const startPos = { col: 0, row: 0 }
    const endPos = { col: 0, row: 3 }
    const newBoard = move(initMap, startPos, endPos);
    expect(newBoard[startPos.row][startPos.col]).toBe(FUNC.blank);
    expect(newBoard[endPos.row][endPos.col]).toBe(initMap[startPos.row][startPos.col]);
});

test('get white pieces', () => {
    const rockPiece = {
        color: "w",
        type: "r"
    }
    const pawnPiece = {
        color: "w",
        type: "p"
    }
    const knightPiece = {
        color: "w",
        type: "n"
    }
    expect(toPiece(rockPiece)).toEqual(WHITE.rock)
    expect(toPiece(pawnPiece)).toEqual(WHITE.pawn)
    expect(toPiece(knightPiece)).toEqual(WHITE.knight)
})

test('get black pieces', () => {
    const rockPiece = {
        color: "b",
        type: "r"
    }
    const pawnPiece = {
        color: "b",
        type: "p"
    }
    const knightPiece = {
        color: "b",
        type: "n"
    }
    expect(toPiece(rockPiece)).toEqual(BLACK.rock)
    expect(toPiece(pawnPiece)).toEqual(BLACK.pawn)
    expect(toPiece(knightPiece)).toEqual(BLACK.knight)
})

test('get empty grid', () => {
    expect(toPiece(null)).toEqual(FUNC.blank)

})
