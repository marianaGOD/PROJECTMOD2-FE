import React, { useState, useEffect } from "react";
import axios from "axios";

function FunFactGenerator() {
  const [movies, setMovies] = useState([]);
  const [currentFunFact, setCurrentFunFact] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  const generateFunFact = () => {
    if (movies.length > 0) {
      const randomNumber = Math.floor(Math.random() * movies.length);
      const selectedMovie = movies[randomNumber];
      setCurrentFunFact({
        title: selectedMovie.title,
        funFact:
          selectedMovie.funFact || "No fun fact available for this movie.",
      });
    }
  };

  return (
    <div>
      <h1>Fun Fact Generator</h1>
      <button onClick={generateFunFact}>Generate Fun Fact</button>
      {currentFunFact && (
        <div>
          <h3>Fun Fact</h3>
          <p>{currentFunFact.funFact}</p>
          <p>
            <strong>Movie:</strong> {currentFunFact.title}
          </p>
        </div>
      )}
    </div>
  );
}

export default FunFactGenerator;
