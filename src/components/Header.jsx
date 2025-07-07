import Heading from "./Heading.jsx";
import Scoreboard from "./Scoreboard.jsx";

export default function Header({currentScore, bestScore}) {
  return (
    <header className="site-header">
      <Heading />
      <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
    </header>
  );
}