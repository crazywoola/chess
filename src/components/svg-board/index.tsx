import React, { useContext } from 'react';
import { ThemeContext } from 'src/context/theme';
import {
    grid,
    initMap,
} from 'src/constant';
const SvgBoard = () => {
    const {
        theme: {
            gridSize,
            borderColor,
            blackGrid,
            whiteGrid,
            fontSize,
            blackPieceColor,
        } 
    } = useContext(ThemeContext);
    return <div className='svg-board'>
        <svg width={8 * gridSize} height={8 * gridSize} stroke={borderColor}>
            {grid.map((row, rowIndex) => {
                return row.map((col, colIndex) => {
                    return <g
                        width={gridSize}
                        height={gridSize}
                    >
                        <rect
                            x={colIndex * gridSize}
                            y={rowIndex * gridSize}
                            width={gridSize}
                            height={gridSize}
                            style={{ fill: col === 1 ? blackGrid : whiteGrid }}
                        />
                        <text
                            x={gridSize / 2 + gridSize * colIndex}
                            y={gridSize / 2 + gridSize * rowIndex}
                            dominant-baseline="middle"
                            text-anchor="middle"
                            font-size={fontSize}
                            stroke={blackPieceColor}
                            opacity={0.8}
                        >
                            {initMap[rowIndex][colIndex]}
                        </text>
                    </g>

                })
            })}
        </svg>
    </div>
}

export default SvgBoard;