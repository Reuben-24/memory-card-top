export default function InProgressInstruction({currentScore}) {
  return (
    <div className="instruction">
      <p>Current Score: {currentScore}</p>
      <p>Click a player.</p>
    </div>
  );
}