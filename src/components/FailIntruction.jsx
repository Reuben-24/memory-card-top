export default function FailInstruction({currentScore}) {
  return (
    <div className="instruction">
      <p>Game Over! You've already clicked that player!</p>
      <p>Final Score: {currentScore} </p>
      <p>Click a player to start a new game.</p>
    </div>
  );
}