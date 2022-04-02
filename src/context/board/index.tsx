import React, { FC, createContext, useState, useEffect } from 'react';
import Chess from 'chess.js';
import { getGridAxis } from 'src/operations';
interface CellProps {
    col: number;
    row: number;
}
interface BoardContextProps {
    isAI: {
        value: boolean;
        level: number;
    };
    chessboard: any;
    turn: string;
    startPos: CellProps | undefined;
    promotion: boolean;
    moves: string[];
    showTips: boolean;
    markedMoves: string[];
    isGameOver: boolean;
    setMoves: React.Dispatch<React.SetStateAction<string[]>>;
    setPromotion: React.Dispatch<React.SetStateAction<boolean>>;
    setShowTips: React.Dispatch<React.SetStateAction<boolean>>;
    setStartPos: React.Dispatch<React.SetStateAction<CellProps | undefined>>;
    resetChessboard: () => void;
    loadFEN: (fen: string) => void;
    toggleAI: () => void;
    setAILevel: (level: number) => void;
    setTurn: React.Dispatch<React.SetStateAction<string>>;
}
export const BoardContext = createContext<BoardContextProps>({} as BoardContextProps);

const BoardContenxtProvider: FC = ({ children }) => {
    const [chessboard, setChessboard] = useState(new Chess());
    const [startPos, setStartPos] = useState<CellProps | undefined>(undefined);
    const [promotion, setPromotion] = useState(false);
    const [moves, setMoves] = useState<string[]>([])
    const [showTips, setShowTips] = useState(true);
    const [markedMoves, setMarkedMoves] = useState<string[]>([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [turn, setTurn] = useState('w');
    // AI
    const [isAI, setToAI] = useState({
        value: false,
        level: 0,
    });

    const cleanup = () => {
        setStartPos(undefined);
        setMoves([]);
        setPromotion(false);
        setIsGameOver(false);
    }

    useEffect(() => {
        if (startPos && showTips) {
            chessboard.moves({ square: getGridAxis(startPos), verbose: true })
            setMarkedMoves([...chessboard.moves({ square: getGridAxis(startPos), verbose: true }).map((i: any) => i.to)]);
        } else {
            setMarkedMoves([]);
        }
    }, [chessboard, showTips, startPos]);

    useEffect(() => {
        if (chessboard.game_over()) {
            setIsGameOver(true);
        }
    }, [chessboard, startPos])
    return <BoardContext.Provider
        value={{
            isAI,
            chessboard,
            startPos,
            promotion,
            isGameOver,
            moves,
            setMoves,
            setPromotion,
            setStartPos,
            showTips,
            setShowTips,
            markedMoves,
            turn,
            setTurn,
            resetChessboard: () => {
                const newBoard = new Chess();
                cleanup();
                setChessboard(newBoard);
            },
            loadFEN: (fen: string) => {
                const newBoard = new Chess(fen);
                cleanup();
                setChessboard(newBoard)
            },
            toggleAI: () => {
                setToAI({
                    value: !isAI.value,
                    level: isAI.level,
                })
            },
            setAILevel: (level: number) => {
                setToAI({
                    value: isAI.value,
                    level,
                })
            },
        }}
    >
        {children}
    </BoardContext.Provider>

};
export default BoardContenxtProvider;
