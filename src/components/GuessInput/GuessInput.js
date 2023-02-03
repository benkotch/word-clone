import React from "react";

function GuessInput({ handleSubmitGuess, disabled }) {
  const [guessInput, setGuessInput] = React.useState("");
  const handleChange = (e) => {
    setGuessInput(e.target.value.toUpperCase());
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (guessInput.length !== 5) {
      alert("Please enter at least 5 characters");
      return;
    }

    handleSubmitGuess(guessInput);
    setGuessInput("");
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guessInput}
          onChange={handleChange}
          minLength="5"
          maxLength="5"
          required
          disabled={disabled}
        />
      </form>
    </>
  );
}

export default GuessInput;
