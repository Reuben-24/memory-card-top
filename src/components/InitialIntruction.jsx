export default function InitialInstruction({handleStartGame}) {
  return (
    <div className="instruction">
      <p>In this game, you are tasked with clicking every player, without ever clicking the same player twice.</p>
      <button className="start-game-button" onClick={handleStartGame}>Start Game</button>
    </div>
  );
}