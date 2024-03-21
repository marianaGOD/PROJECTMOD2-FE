import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  useEffect(() => {
    axios
      .get(`${API_URL}/movies/${movieId}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${API_URL}/reviews?movieId=${movieId}`)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((err) => console.log(err));
  }, [movieId]);

  const deleteReview = (reviewId) => {
    axios
      .delete(`${API_URL}/reviews/${reviewId}`)
      .then(() => {
        setReviews(reviews.filter((review) => review.id !== reviewId));
      })
      .catch((err) => console.log(err));
  };

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
              {movie.oscar ? "🏆" : null}
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
      <div className="moviedetails-reviews-container">
        {reviews.map((review) => (
          <div key={review.id}>
            <h4>{review.username} wrote:</h4>
            <h2 id="review-title">{review.title}</h2>
            <p>{review.description}</p>
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
                          ratingValue <= review.rating ? "#9B56A8" : "#D0BFD3 ",
                      }}
                    >
                      &hearts;
                    </span>
                  </label>
                );
              })}
            </div>
            <button onClick={() => deleteReview(review.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoviesDetails;
