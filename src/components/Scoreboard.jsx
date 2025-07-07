export default function Scoreboard({currentScore, bestScore}) {
  return (
    <div className="scoreboard">
      <div className="score">Current Score: {currentScore}</div>
      <div className="score">Best Score: {bestScore}</div>
    </div>
  );
}