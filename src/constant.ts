export const boardColor = "lightgrey";
export const whiteGrid = "#fff";
export const blackGrid = "lightgrey";
export const pieceColor = '#2b2b2b';
export const gridSize = 50;
export const fontSize = 40;
export const grid = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0]
];

export const WHITE_PIECES = {
    pawn: '♙',
    rock: '♖',
    knight: '♘',
    bishop: '♗',
    queen: '♕',
    king: '♔',
}

export const BLACK_PIECES = {
    pawn: '♟',
    rock: '♜',
    knight: '♞',
    bishop: '♝',
    queen: '♛',
    king: '♚',
}

export const EMPTY_PIECES = {
    blank: ''
}

export const initMap = [
    [BLACK_PIECES.rock, BLACK_PIECES.knight, BLACK_PIECES.bishop, BLACK_PIECES.queen, BLACK_PIECES.king, BLACK_PIECES.bishop, BLACK_PIECES.knight, BLACK_PIECES.rock],
    [BLACK_PIECES.pawn, BLACK_PIECES.pawn, BLACK_PIECES.pawn, BLACK_PIECES.pawn, BLACK_PIECES.pawn, BLACK_PIECES.pawn, BLACK_PIECES.pawn, BLACK_PIECES.pawn],
    [EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank,],
    [EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank,],
    [EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank,],
    [EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank, EMPTY_PIECES.blank,],
    [WHITE_PIECES.pawn, WHITE_PIECES.pawn, WHITE_PIECES.pawn, WHITE_PIECES.pawn, WHITE_PIECES.pawn, WHITE_PIECES.pawn, WHITE_PIECES.pawn, WHITE_PIECES.pawn],
    [WHITE_PIECES.rock, WHITE_PIECES.knight, WHITE_PIECES.bishop, WHITE_PIECES.queen, WHITE_PIECES.king, WHITE_PIECES.bishop, WHITE_PIECES.knight, WHITE_PIECES.rock],
];
