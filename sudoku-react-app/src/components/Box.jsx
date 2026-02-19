import Cell from "./Cell";

export default function Box({ boxIndex, cells, selectedCell, onCellSelect, initBoard }) {
    return (
        <div id={`box-${boxIndex}`} className="box">
            {cells.map((value, cellIndex) => {
                const row = Math.floor(boxIndex / 3) * 3 + Math.floor(cellIndex / 3);
                const col = (boxIndex % 3) * 3 + (cellIndex % 3);
                
                const isSelected = selectedCell?.row === row && selectedCell?.col === col;
                const isInitial = initBoard && initBoard[row][col] !== 0;

                return (
                    <Cell
                        key={`${boxIndex}-${cellIndex}`}
                        boxIndex={boxIndex}
                        cellIndex={cellIndex}
                        value={value}
                        isSelected={isSelected}
                        onSelect={() => onCellSelect({ row, col })}
                        isInitial={isInitial}
                    />
                );
            })}
        </div>
    );
}