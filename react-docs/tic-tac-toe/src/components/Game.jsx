import { useState } from "react";
import Board from "./Board";
import classes from "./Game.module.css";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  console.log(history);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const handlePlay = nextSquares => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    console.log(nextHistory);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = nextMove => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) description = "You are at move #" + move;
    if (move === 0) description = "Go to game start";

    return (
      <li key={move}>
        {move === 0 && <button onClick={jumpTo.bind(this, move)}>{description}</button>}
        {move > 0 && <p onClick={jumpTo.bind(this, move)}>{description}</p>}
      </li>
    );
  });

  return (
    <div className="game">
      <div className={classes["game-board"]}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={classes["game-info"]}>
        <ol>{currentMove > 0 && moves}</ol>
      </div>
    </div>
  );
};

export default Game;
