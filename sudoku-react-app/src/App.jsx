import './App.css'

import GameBoard from './components/GameBoard';

const BOARD = [
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
  return (
    <div className="app-container">
      <h1 className='title'>Hello Sudoku</h1>
      <GameBoard grid={BOARD} />
    </div>
  );
}

export default App
