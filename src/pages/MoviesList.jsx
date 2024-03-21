import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import HomePage from "./HomePage";
import SortBy from "../components/SortBy";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [isSearchOn, setIsSearchOn] = useState(false);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  useEffect(() => {
    axios
      .get(`${API_URL}/movies`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log("These aren't the movies you're looking for", error);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <h1>Our best movies</h1>
        <SortBy
          movies={movies}
          setMovies={setMovies}
          setIsFilterOn={setIsFilterOn}
        />
        <SearchBar movies={movies} setIsSearchOn={setIsSearchOn} />
      </div>
    </div>
  );
}

export default MoviesList;
