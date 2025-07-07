import { GAME_STATES } from "../constants.js";
import InitialInstruction from "./InitialIntruction.jsx";
import SuccessInstruction from "./SuccessIntruction.jsx";
import FailInstruction from "./FailIntruction.jsx";
import WinInstruction from "./WinInstruction.jsx";
import LoadingInstruction from "./LoadingInstruction.jsx";

export default function Instructions({ gameState, currentScore }) {
  return (
    <div className="instruction-panel">
      {gameState === GAME_STATES.LOADING && <LoadingInstruction />}
      {gameState === GAME_STATES.READY && <InitialInstruction />}
      {gameState === GAME_STATES.IN_PROGRESS && (
        <SuccessInstruction currentScore={currentScore} />
      )}
      {gameState === GAME_STATES.GAME_OVER_LOSS && (
        <FailInstruction currentScore={currentScore} />
      )}
      {gameState === GAME_STATES.GAME_OVER_WIN && (
        <WinInstruction currentScore={currentScore} />
      )}
    </div>
  );
}
