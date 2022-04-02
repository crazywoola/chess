import { useState, useMemo } from "react";

export interface IAIProps {
    value: boolean;
    level: number;
    turn: string;
}
export interface HAIProps {
    playWhite: () => void;
    playBlack: () => void;
    human: () => void;
    setLevel: (level: number) => void;
}
const useAI = (init: IAIProps): [ai: IAIProps, fns: HAIProps] => {
    const [ai, setAI] = useState(init);
    const fns = useMemo(() => ({
        playWhite: () => {
            setAI({
                ...ai,
                value: true,
                turn: "w"
            });
        },
        playBlack: () => {
            setAI({
                ...ai,
                value: true,
                turn: "b"
            });
        },
        human: () => {
            setAI({
                ...ai,
                value: false,
                turn: "w"
            });
        },
        setLevel: (level: number) => {
            setAI({
                ...ai,
                level
            });
        }
    }), [ai])
    return [ai, fns]
}

export default useAI;
