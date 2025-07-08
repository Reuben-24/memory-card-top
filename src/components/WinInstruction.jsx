export default function WinInstruction({currentScore, handleLoadNewGame}) {
  return (
    <div className="instruction">
      <p>Great Work! You have achieved the games maximum score of {currentScore}.</p>
      <button className="play-again-button" onClick={handleLoadNewGame}>Play Again</button>
    </div>
  );
}