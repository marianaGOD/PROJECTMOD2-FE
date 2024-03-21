import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RecentReviews() {
  const [reviews, setReviews] = useState([]);
  const [movies, setMovies] = useState([]);
  const nav = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  useEffect(() => {
    axios
      .get(`${API_URL}/reviews`)
      .then((response) => {
        let reviewsArray = response.data || [];
        reviewsArray = shuffleArray(reviewsArray).slice(0, 9);
        setReviews(reviewsArray);
      })
      .catch((error) => console.error("Failed to fetch reviews:", error));

    axios
      .get(`${API_URL}/movies`)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => console.error("Failed to fetch movies:", error));
  }, []);

 
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
  }

  const renderHearts = (rating) => {
    let hearts = "";
    for (let i = 0; i < rating; i++) {
      hearts += "♥ ";
    }
    return hearts;
  };

  function findMovieDetails(movies, reviewId) {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id === reviewId) {
        return {
          title: movies[i].title,
          imageUrl: movies[i].imageUrl,
        };
      }
    }
  }

  return (
    <>
      <h2>Our Users Reviews</h2>
      {movies.length > 0 && reviews.length > 0 ? (
        <div className="recentreviews-container">
          {reviews.map((review) => {
            const movieDetails = findMovieDetails(movies, review.movieId);
            return (
              <div
                className="recentreviews-details"
                key={review.id}
                style={{ marginBottom: "20px" }}
                onClick={() => nav(`/movies/${review.movieId}`)}
              >
                <h1>{movieDetails.title}</h1>
                <div className="recentreviews-flex">
                  <img
                    className="recentreviews-img"
                    src={movieDetails.imageUrl}
                    alt="movie poster"
                  />
                  <div id="recentreviews-title-container">
                    <h3>
                      {review.title} {renderHearts(review.rating)}
                    </h3>
                    <p>{review.description}</p>
                    <p id="recentreviews-signature">
                      Reviewed by {review.username} on {review.createdDate}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default RecentReviews;
