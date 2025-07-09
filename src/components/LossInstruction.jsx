export default function LossInstruction({currentScore, handleLoadNewGame}) {
  return (
    <div className="instruction">
      <p>Game Over! You've already clicked that player!</p>
      <p>Final Score: {currentScore} </p>
      <button className="button" onClick={handleLoadNewGame}>Load New Game</button>
    </div>
  );
}