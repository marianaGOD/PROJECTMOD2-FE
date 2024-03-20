import React, { useState, useEffect } from "react";
import axios from "axios";

function RecentReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/reviews")
      .then((response) => {
        console.log(response.data);
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
          .slice(0, 10);
        setReviews(sortedReviews);
      })
      .catch((error) => console.error("Failed to fetch reviews:", error));
  }, []);

  return (
    <div>
      <h2>Recent Reviews</h2>
      {reviews.map((review) => (
        <div
          className="carrousel-wrapper"
          key={review.id}
          style={{ marginBottom: "20px" }}
        >
          <h3>
            {review.title} - {review.rating}/5 Stars
          </h3>
          <p>{review.description}</p>
          <p>
            Reviewed by {review.username} on {review.createdDate}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RecentReviews;
