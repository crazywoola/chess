import React from 'react';
import {
    blackGrid,
    boarderColor,
    fontSize,
    grid,
    gridSize,
    initMap,
    pieceColor,
    whiteGrid
} from 'src/constant';
const SvgBoard = () => {
    return <div className='svg-board'>
        <svg width={8 * gridSize} height={8 * gridSize} stroke={boarderColor}>
            {grid.map((row, rowIndex) => {
                return row.map((col, colIndex) => {
                    return <g
                        width={gridSize}
                        height={gridSize}
                    >
                        <rect
                            x={rowIndex * gridSize}
                            y={colIndex * gridSize}
                            width={gridSize}
                            height={gridSize}
                            style={{ fill: col === 1 ? blackGrid : whiteGrid }}
                        />
                        <text
                            x={gridSize / 2 + gridSize * rowIndex}
                            y={gridSize / 2 + gridSize * colIndex}
                            dominant-baseline="middle"
                            text-anchor="middle"
                            font-size={fontSize}
                            stroke={pieceColor}
                            opacity={0.8}
                        >
                            {initMap[colIndex][rowIndex]}
                        </text>
                    </g>

                })
            })}
        </svg>
    </div>
}

export default SvgBoard;