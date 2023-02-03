import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import GameOverBanner from "../GameOverBanner/GameOverBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);

const GAME_STATUS = {
  WON: "won",
  LOST: "lost",
  RUNNING: "running",
};
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState(GAME_STATUS.RUNNING);

  function handleSubmitGuess(guessInput) {
    const nextGuesses = [...guesses, guessInput];
    setGuesses(nextGuesses);

    if (guessInput.toUpperCase() === answer) {
      setStatus(GAME_STATUS.WON);
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus(GAME_STATUS.LOST);
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        disabled={status !== GAME_STATUS.RUNNING}
      />
      {status !== GAME_STATUS.RUNNING && (
        <GameOverBanner
          status={status}
          answer={answer}
          tries={guesses.length}
        />
      )}
    </>
  );
}

export default Game;
