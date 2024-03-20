import React, { useState, useEffect } from "react";
import axios from "axios";

function RecentReviews() {
  const [reviews, setReviews] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/reviews")
      .then((response) => {
        const reviewsArray = response.data || [];
        const sortedReviews = reviewsArray
          .sort((a, b) => {
            const dateA = new Date(
              a.createdDate.split("/").reverse().join("-")
            );
            const dateB = new Date(
              b.createdDate.split("/").reverse().join("-")
            );
            return dateB - dateA;
          })
          .slice(0, 9);
        setReviews(sortedReviews);
      })
      .catch((error) => console.error("Failed to fetch reviews:", error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => console.error("Failed to fetch movies:", error));
  }, []);

  const renderHearts = (rating) => {
    let hearts = "";
    for (let i = 0; i < rating; i++) {
      hearts += "♥ ";
    }
    return hearts;
  };

  function findMovieDetails(movies, reviewId) {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id == reviewId) {
        return {
          title: movies[i].title,
          imageUrl: movies[i].imageUrl,
        };
      }
    }
  }

  return (
    <>
      <h2>Recent Reviews</h2>
      {movies.length > 0 && reviews.length > 0 ? (
        <div className="recentreviews-container">
          {reviews.map((review) => {
            const movieDetails = findMovieDetails(movies, review.movieId);
            return (
              <div
                className="recentreviews-details"
                key={review.id}
                style={{ marginBottom: "20px" }}
              >
                <h1>{movieDetails.title}</h1>{" "}
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