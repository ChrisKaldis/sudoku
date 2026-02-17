
export default function GameBoard({ grid }) {
    // Classic sudoku has 9 subgrids called boxes
    const boxes = [];
    for (let b = 0; b < 9; b++) {
        // grid has a subarray for each row
        const startRow = Math.floor(b / 3) * 3;
        const startCol = (b % 3) * 3;
        // Collect the 9 cells belonging to this box
        const cells = [];
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                cells.push(grid[startRow + r][startCol + c]);
            }
        }
        boxes.push(cells);
    }

    return (
        <div className="board">
            {boxes.map((cells, boxIndex) => (
                <Box key={boxIndex} boxIndex={boxIndex} cells={cells} />
            ))}
        </div>
    );
}

function Box({ boxIndex, cells }) {
    return (
        <div id={`box-${boxIndex}`} className="box">
            {cells.map((value, cellIndex) => (
                <Cell key={`${boxIndex}-${cellIndex}`} boxIndex={boxIndex} cellIndex={cellIndex} value={value} />
            ))}
        </div>
    );
}

function Cell({ boxIndex, cellIndex, value }) {
    return (
        <div id={`box-${boxIndex}-cell-${cellIndex}`} className={`cell ${value === 0 ? "cell--empty" : "cell--filled"}`}>
            {value !== 0 ? value : ""}
        </div>
    );
}
