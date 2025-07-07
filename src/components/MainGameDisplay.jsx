import GameCard from "./GameCard.jsx";

export default function MainGameDisplay({ currentPlayers }) {
  return (
    <div className="cards-display">
      {currentPlayers.map((player) => (
        <GameCard key={player.playerId} player={player} />
      ))}
    </div>
  );
}
