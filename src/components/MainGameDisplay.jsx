import GameCard from "./GameCard.jsx";

export default function MainGameDisplay({ shuffledPlayers, handlePlayerClick }) {
  return (
    <div className="cards-display">
      {shuffledPlayers.map((player) => (
        <GameCard key={player.playerId} player={player} handlePlayerClick={handlePlayerClick} />
      ))}
    </div>
  );
}
