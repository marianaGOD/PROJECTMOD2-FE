import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import HomePage from "../pages/HomePage"

function MoviesList() {
  const [movies, setMovies] = useState([]);

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
        <SearchBar movies={movies} />
        <div>
          {movies &&
            movies.map((movie) => {
              return (
<<<<<<< HEAD
                <Link to={`${movie.id}`} key={movie.id}>
=======
                <Link key={movie.id} to={`${movie.id}`}>
>>>>>>> f9095e66515e8f70071abbe31c8876f543e021d5
                  <div className="list-group-each">
                    <h2>{movie.title}</h2>
                    <img src={movie.imageUrl} />
                    <p>{movie.description}</p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MoviesList;
