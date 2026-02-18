import { useState } from 'react';
import './App.css'

import Board from './components/Board';

const INIT_BOARD = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 0, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [3, 0, 0, 0, 0, 0, 0, 0, 0],
  [6, 0, 0, 0, 0, 0, 0, 0, 0],
  [7, 0, 0, 0, 0, 0, 0, 0, 0],
  [8, 0, 0, 0, 0, 0, 0, 0, 0],
  [9, 0, 0, 0, 0, 0, 0, 0, 0],
];

function App() {
  const [grid, setGrid] = useState(INIT_BOARD);

  const updateCell = (row, col, value) => {
    const newGrid = grid.map((r, i) => 
      i === row ? r.map((c, j) => j === col ? value : c) : r
    );
    setGrid(newGrid);
  };

  return (
    <div className="app-container">
      <h1 className='title'>Hello Sudoku</h1>
      <Board grid={grid} updateCell={updateCell} />
    </div>
  );
}

export default App
