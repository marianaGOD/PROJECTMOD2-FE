import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
        <div>
          {movies &&
            movies.map((movie) => {
              return (
                <Link to={`${movie.id}`}>
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
