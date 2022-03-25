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
export const WHITE = {
    pawn: '♙',
    rock: '♖',
    knight: '♘',
    bishop: '♗',
    queen: '♕',
    king: '♔',
}

export const BLACK = {
    pawn: '♟',
    rock: '♜',
    knight: '♞',
    bishop: '♝',
    queen: '♛',
    king: '♚',
}

export const FUNC = {
    blank: ''
}

export const initMap = [
    [BLACK.rock, BLACK.knight, BLACK.bishop, BLACK.queen, BLACK.king, BLACK.bishop, BLACK.knight, BLACK.rock],
    [BLACK.pawn, BLACK.pawn, BLACK.pawn, BLACK.pawn, BLACK.pawn, BLACK.pawn, BLACK.pawn, BLACK.pawn],
    [FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank,],
    [FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank,],
    [FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank,],
    [FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank, FUNC.blank,],
    [WHITE.pawn, WHITE.pawn, WHITE.pawn, WHITE.pawn, WHITE.pawn, WHITE.pawn, WHITE.pawn, WHITE.pawn],
    [WHITE.rock, WHITE.knight, WHITE.bishop, WHITE.queen, WHITE.king, WHITE.bishop, WHITE.knight, WHITE.rock],
];
