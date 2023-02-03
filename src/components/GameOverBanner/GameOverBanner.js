import React from "react";

function GameOverBanner({ status, tries, answer }) {
  return (
    <>
      {status === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>
              {" "}
              {tries} {tries === 1 ? "guess" : "guesses"}
            </strong>
            .
          </p>
        </div>
      )}
      {status === "lost" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default GameOverBanner;
