import classes from "./Board.module.css";

const Square = ({ value, onSquareClick }) => (
  <button className="square" onClick={onSquareClick}>
    {value}
  </button>
);

const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }
  return null;
};

const Board = ({ xIsNext, squares, onPlay }) => {
  const handleClick = i => {
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    if (xIsNext) nextSquares[i] = "X";
    else nextSquares[i] = "O";

    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) status = "Winner: " + winner;
  else status = "Next player: " + (xIsNext ? "X" : "O");

  return (
    <>
      <div className={classes.status}>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick.bind(this, 0)} />
        <Square value={squares[1]} onSquareClick={handleClick.bind(this, 1)} />
        <Square value={squares[2]} onSquareClick={handleClick.bind(this, 2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={handleClick.bind(this, 3)} />
        <Square value={squares[4]} onSquareClick={handleClick.bind(this, 4)} />
        <Square value={squares[5]} onSquareClick={handleClick.bind(this, 5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={handleClick.bind(this, 6)} />
        <Square value={squares[7]} onSquareClick={handleClick.bind(this, 7)} />
        <Square value={squares[8]} onSquareClick={handleClick.bind(this, 8)} />
      </div>
    </>
  );
};

export default Board;
