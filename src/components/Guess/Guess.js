import React from "react";
import { range, sample } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { WORDS } from "../../data";

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((index) => (
        <span
          className={`cell ${result ? result[index]?.status : null}`}
          key={index}
        >
          {guess ? guess[index] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
