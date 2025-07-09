export default function LossInstruction() {
  return (
    <div className="instruction">
      <p>Game Failed to load.</p>
      <button className="button" onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );
}