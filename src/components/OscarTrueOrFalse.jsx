import axios from 'axios';
import React, { useState, useEffect } from "react";

export default function OscarTrueOrFalse() {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => console.error("Failed to fetch movies:", error));
  }, []);

  const startGame = () => {
    if (movies.length > 0) {
      setGameStarted(true);
      nextQuestion();
    }
  };

  const nextQuestion = () => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setCurrentMovie(movies[randomIndex]);
    }
  };

  const handleGuess = (hasWonOscar) => {
    if (currentMovie) {
      if (hasWonOscar === currentMovie.oscar) {
        setScore(score + 1);
      }
      setAttempted(attempted + 1);
      nextQuestion();
    }
  };

  return (
    <div>
      <h1>True Oscar or False Oscar?</h1>
      {!gameStarted ? (
        <button onClick={startGame}>Start Game</button>
      ) : (
        <button onClick={nextQuestion}>Next Movie</button>
      )}
      {currentMovie && (
        <div>
          <p>Did "{currentMovie.title}" win an Oscar?</p>
          <button onClick={() => handleGuess(true)}>True</button>
          <button onClick={() => handleGuess(false)}>False</button>
        </div>
      )}
      {gameStarted && (
        <div>
          Score: {score} / {attempted}
        </div>
      )}
    </div>
  );
}

