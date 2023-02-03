import React from "react";
import Game from "../Game";
import Header from "../Header";
import GuessResults from "../GuessResults/GuessResults";
import ErrorBoundary from "../../utils";

function App() {
  const [guess, setGuess] = React.useState("");

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <ErrorBoundary>
          <Game setGuess={setGuess} />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
