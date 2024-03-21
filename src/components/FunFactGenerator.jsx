import React, { useState, useEffect } from "react";
import axios from "axios";

function FunFactGenerator() {
  const [movies, setMovies] = useState([]);
  const [currentFunFact, setCurrentFunFact] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  useEffect(() => {
    axios
      .get(`${API_URL}/movies`)
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
      <button className="playpage-buttons" onClick={generateFunFact}>Generate Fun Fact</button>
      {currentFunFact && (
        <div>
          <p>{currentFunFact.funFact}</p>
          <p>
            Movie:{currentFunFact.title}
          </p>
        </div>
      )}
    </div>
  );
}

export default FunFactGenerator;
