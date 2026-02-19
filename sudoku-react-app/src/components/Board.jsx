import { useState, useEffect, useMemo } from 'react';
import Box from './Box';

function GameBoard({ grid, updateCell, initBoard }) {
    const [selectedCell, setSelectedCell] = useState(null);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!selectedCell) return;

            const { row, col } = selectedCell;
            const key = e.key;

            if (key >= '1' && key <= '9') {
                e.preventDefault();
                updateCell(row, col, parseInt(key));    
            } else if (key === 'Backspace' || key === 'Delete') {
                e.preventDefault();
                updateCell(row, col, 0);
            } else if (key === 'ArrowUp') {
                e.preventDefault();
                setSelectedCell({ row: Math.max(0, row - 1), col });
            } else if (key === 'ArrowDown') {
                e.preventDefault();
                setSelectedCell({ row: Math.min(8, row + 1), col });
            } else if (key === 'ArrowLeft') {
                e.preventDefault();
                setSelectedCell({ row, col: Math.max(0, col - 1) });
            } else if (key === 'ArrowRight') {
                e.preventDefault();
                setSelectedCell({ row, col: Math.min(8, col + 1) });
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [selectedCell, updateCell]);

    const boxes = useMemo(() => {
        const generatedBoxes = [];
        for (let b = 0; b < 9; b++) {
            const startRow = Math.floor(b / 3) * 3;
            const startCol = (b % 3) * 3;
            const cells = [];
            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    cells.push(grid[startRow + r][startCol + c]);
                }
            }
            generatedBoxes.push(cells);
        }
        return generatedBoxes;
    }, [grid]);

    return (
        <div className="board">
            {boxes.map((cells, boxIndex) => (
                <Box 
                    key={boxIndex} 
                    boxIndex={boxIndex} 
                    cells={cells} 
                    selectedCell={selectedCell} 
                    onCellSelect={setSelectedCell}
                    initBoard={initBoard}
                />
            ))}
        </div>
    );
}

export default GameBoard;