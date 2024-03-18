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
    <div className="detail-container">
      <img src={movie.imageUrl}></img>
      <div>
        <h2>
          {movie.title}
          {movie.oscar ? " 🏆" : ""}
        </h2>
        <p>
          {movie.director} - {movie.year}
        </p>
        <p>{movie.genre}</p>
        <p>{movie.description}</p>
        <p>{movie.mainCast}</p>
      </div>
    </div>
  );
};

export default MoviesDetails;

/*  {
      "id": "4",
      "title": "Pulp Fiction",
      "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in tales of violence and redemption.",
      "year": "1994",
      "director": "Quentin Tarantino",
      "mainCast": "John Travolta, Uma Thurman, Samuel L. Jackson",
      "oscar": true,
      "genre": "Crime, Drama",
      "writers": "Quentin Tarantino, Roger Avary",
      "funFact": "The briefcase's contents are never revealed, sparking widespread speculation and theories among fans.",
      "famousQuote": "Say 'what' again, I dare you, I double dare you motherfucker, say what one more Goddamn time!",
      "imageUrl": "https://static.posters.cz/image/750/posters/pulp-fiction-cover-i1288.jpg"
    },*/
