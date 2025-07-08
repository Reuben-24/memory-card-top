export default function GameCard({player, handlePlayerClick}) {
  return (
    <div className="card" onClick={() => handlePlayerClick(player.playerId)}>
      <img className="card-image" src={player.imageUrl} alt={`${player.firstName} ${player.lastName}`}></img>
      <p className="card-label">{player.firstName} {player.lastName}</p>
    </div>
  );
}