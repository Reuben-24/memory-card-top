import { GAME_STATES } from "../constants.js";
import InitialInstruction from "./InitialIntruction.jsx";
import InProgressInstruction from "./InProgressInstruction.jsx";
import LossInstruction from "./LossInstruction.jsx";
import WinInstruction from "./WinInstruction.jsx";
import LoadingInstruction from "./LoadingInstruction.jsx";
import ErrorInstruction from "./ErrorInstruction.jsx";

export default function Instructions({
  gameState,
  currentScore,
  handleLoadNewGame,
  handleStartGame,
}) {
  return (
    <div className="instruction-panel">
      {gameState === GAME_STATES.ERROR && <ErrorInstruction />}
      {gameState === GAME_STATES.LOADING && <LoadingInstruction />}
      {gameState === GAME_STATES.READY && (
        <InitialInstruction handleStartGame={handleStartGame} />
      )}
      {gameState === GAME_STATES.IN_PROGRESS && (
        <InProgressInstruction currentScore={currentScore} />
      )}
      {gameState === GAME_STATES.GAME_OVER_LOSS && (
        <LossInstruction
          currentScore={currentScore}
          handleLoadNewGame={handleLoadNewGame}
        />
      )}
      {gameState === GAME_STATES.GAME_OVER_WIN && (
        <WinInstruction
          currentScore={currentScore}
          handleLoadNewGame={handleLoadNewGame}
        />
      )}
    </div>
  );
}
