import GameCard from "./GameCard.jsx";

export default function MainGameDisplay({ currentPlayers, handlePlayerClick }) {
  return (
    <div className="cards-display">
      {currentPlayers.map((player) => (
        <GameCard key={player.playerId} player={player} handlePlayerClick={handlePlayerClick} />
      ))}
    </div>
  );
}
