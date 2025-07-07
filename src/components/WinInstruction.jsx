export default function WinInstruction({currentScore}) {
  return (
    <div className="instruction">
      <p>Great Work! You have achieved the games maximum score of {currentScore}.</p>
      <p>Click a player to start a new game.</p>
    </div>
  );
}