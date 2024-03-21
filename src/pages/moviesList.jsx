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

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies`)
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

        {isSearchOn || isFilterOn ? (
          <div></div>
        ) : (
          <div className="list-group-container">
            {movies &&
              movies.map((movie) => {
                return (
                  <Link to={`${movie.id}`} key={movie.id}>
                    <div className="list-group-each">
                      <h2>{movie.title}</h2>
                      <img src={movie.imageUrl} />
                    </div>
                  </Link>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default MoviesList;
