export default function GameCard({player}) {
  return (
    <div className="card">
      <img className="card-image" src={player.imageUrl} alt={`${player.firstName} ${player.lastName}`}></img>
      <p className="card-label">{player.firstName} {player.lastName}</p>
    </div>
  );
}