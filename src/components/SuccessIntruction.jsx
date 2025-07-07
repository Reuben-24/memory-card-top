export default function SuccessInstruction({currentScore}) {
  return (
    <div className="instruction">
      <p>Nice! Your score is now {currentScore}.</p>
      <p>Click a new player to continue.</p>
    </div>
  );
}