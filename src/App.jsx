import { useState, useEffect } from "react";

import "./App.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Instructions from "./components/Instructions.jsx";
import MainGameDisplay from "./components/MainGameDisplay.jsx";

import { GAME_STATES } from "./constants.js";
import { validatePlayersData, getRandomPlayersWithUrls } from "./utils.js";

function App() {
  const [gameState, setGameState] = useState(GAME_STATES.LOADING);
  const [players, setPlayers] = useState([]);
  const [currentPlayers, setCurrentPlayers] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // Fetch nba player data from external github repo
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bttmly/nba/master/data/players.json"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        validatePlayersData(responseJson);
        setPlayers(responseJson);
        setCurrentPlayers(getRandomPlayersWithUrls(responseJson));
      })
      .catch((err) => {
        console.error("Failed to fetch players", err);
        // TODO: handle failed load of player data
      });
  }, []);

  // Preload images (cache in browser for faster use) after currentPlayers is updated
  useEffect(() => {
    // Return if first time app mounts as currentPlayers won't contain data yet
    if (currentPlayers.length === 0) return;

    let loadedCount = 0;
    currentPlayers.forEach((player) => {
      // Load image from source into js variable
      const img = new Image();
      img.src = player.imageUrl;

      const handleImageLoad = () => {
        loadedCount++;
        if (loadedCount === currentPlayers.length) {
          setGameState(GAME_STATES.READY);
        }
      };

      img.onload = handleImageLoad;

      img.onerror = () => {
        console.warn(`Image failed to load for playerId: ${player.playerId}`);
        // TODO: Optionally replace this player or show fallback image
        handleImageLoad();
      };
    });
  }, [currentPlayers]);

  function handleLoadNewGame() {
    setGameState(GAME_STATES.LOADING);
    setCurrentPlayers(getRandomPlayersWithUrls(players));
  }

  function handleStartGame() {
    setCurrentScore(0);
    setGameState(GAME_STATES.IN_PROGRESS);
  }

  function handleWin() {
    setGameState(GAME_STATES.GAME_OVER_WIN);
    if (currentScore > bestScore) setBestScore(currentScore);
  }

  function handleLoss() {
    setGameState(GAME_STATES.GAME_OVER_LOSS);
    if (currentScore > bestScore) setBestScore(currentScore);
  }

  return (
    <>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <Instructions gameState={gameState} currentScore={currentScore} />
      {gameState !== GAME_STATES.LOADING && <MainGameDisplay currentPlayers={currentPlayers}/>}
      <Footer />
    </>
  );
}

export default App;
