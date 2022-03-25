// default theme
export const defaultTheme = {
    borderColor: 'lightgrey',
    whiteGrid: '#fff',
    blackGrid: 'lightgrey',
    whitePieceColor: '#2b2b2b',
    blackPieceColor: '#2b2b2b',
    gridSize: 50,
    fontSize: 40,
}

export const woodenTheme = {
    borderColor: '#AD9278',
    whiteGrid: '#D1BF9D',
    blackGrid: '#AD9278',
    whitePieceColor: '#2b2b2b',
    blackPieceColor: '#2b2b2b',
    gridSize: 50,
    fontSize: 40,
}

// default board
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
