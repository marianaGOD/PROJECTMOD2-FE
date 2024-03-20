import React from "react";

export const NewsDetails = () => {
  return <div>NewsDetails</div>;
};

/*import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const NewsDetails = () => {
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

export default NewsDetails;  */
