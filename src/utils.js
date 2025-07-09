import { NUM_CARDS } from "./constants.js";

function getRandomInt(min, max) {
  // Inclusive of min, but exclusive of max
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomElements(numElements, array) {
  if (numElements > array.length) {
    throw new Error("numElements cannot be greater than array length");
  }
  const randomElements = new Set();

  while (randomElements.size < numElements) {
    const randomIndex = getRandomInt(0, array.length);
    randomElements.add(array[randomIndex]);
  }

  return Array.from(randomElements);
}

function getRandomPlayersWithUrls(players) {
  const randomPlayers = getRandomElements(NUM_CARDS, players);
  const randomPlayersWithUrls = randomPlayers.map(player => ({
    ...player,
    imageUrl: getPlayerImageUrl(player.playerId)
  }));
  return randomPlayersWithUrls;
}

function validatePlayersData(data) {
  if (!Array.isArray(data)) {
    throw new Error("Expected an array of players but got: " + typeof data);
  }

  const isValid = data.every(player =>
    typeof player === "object" &&
    typeof player.firstName === "string" &&
    typeof player.lastName === "string" &&
    typeof player.playerId === "number" &&
    typeof player.teamId === "number"
  );

  if (!isValid) {
    throw new Error("Invalid player data format");
  }
}

function getPlayerImageUrl(playerId) {
  return `https://cdn.nba.com/headshots/nba/latest/1040x760/${playerId}.png`;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

export { getRandomPlayersWithUrls, validatePlayersData, shuffleArray };
