import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const MoviesDetails = () => {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${movieId}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((err) => console.log(err));
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.imageUrl}></img>
      <p>{movie.description}</p>
    </div>
  );
};

export default MoviesDetails;
