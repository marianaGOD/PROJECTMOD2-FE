import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${movieId}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:3000/reviews?movieId=${movieId}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((err) => console.log(err));
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <div className="detail-container">
          <img src={movie.imageUrl} alt={`Poster of ${movie.title}`}></img>
          <div>
            <h2>
              {movie.title}
              {movie.oscar ? " 🏆" : null}
            </h2>
            <p>
              {movie.director} - {movie.year}
            </p>
            <p>{movie.genre}</p>
            <p>{movie.description}</p>
            <p>{movie.mainCast}</p>
          </div>
        </div>
        <button
          className="review-button"
          onClick={() => navigate(`/add-review/${movie.id}`)}
        >
          Add Review
        </button>
      </div>
      <div>
        <h3>Reviews</h3>
        {reviews.map((review) => (
          <div key={review.id}>
            <h4>{review.username}</h4>
            <p>{review.title}</p>
            <p>{review.description}</p>
            <p>Rating: {review.rating}</p>
            <p>{review.createdDate}</p>
            <div id="star-rating">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={index}>
                    <span
                      className="star"
                      style={{
                        color:
                          ratingValue <= review.rating ? "#9B56A8" : "#e4e5e9",
                      }}
                    >
                      &hearts;
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
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
