import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";
import axios from "axios";

export default function AddReview({ movies, setMovies }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");
  const { movieId } = useParams();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [totalStars, setTotalStars] = useState(5);

  const nav = useNavigate();
  const handleCreateReview = (event) => {
    event.preventDefault();
    const review = {
      username,
      title,
      description,
      rating,
      createdDate: (new Date().toLocaleDateString()),
      movieId,
    };
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
    axios
      .post(`${API_URL}/reviews`, review)
      .then(function (response) {
        console.log(response);
        nav(`/movies/${movieId}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleClickOutside = (e) => {
    if (e.currentTarget != e.target) return;
    nav(`/movies/${movieId}`);
  };

  return (
    <div className="popup" onClick={handleClickOutside}>
      <div className="inside-popup">
        <div className="popup-header">
          <h2>ADD REVIEW</h2>
          <button
            className="delete-btn b"
            onClick={() => nav(`/movies/${movieId}`)}
          >
            X
          </button>
        </div>
        <form onSubmit={handleCreateReview}>
          <div className="popup-form-container">
            <div className="inline-container"></div>
            <div className="inline-container">
              <label>
                <br />
                User Name
                <br />
                <input
                  placeholder="username"
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </label>
              <label className="popup-title-input">
                Title
                <br />
                <input
                  placeholder="Title"
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </label>
              <br />
              <label>
                Description
                <br />
                <textarea
                  id="description-textarea"
                  placeholder="Description ..."
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  rows="4"
                  cols="40"
                  maxLength="1000"
                ></textarea>
              </label>
            </div>
            <div id="star-rating">
              {[...Array(totalStars)].map((star, index) => {
                const currentRating = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={currentRating}
                      checked={rating === currentRating}
                      onChange={() => setRating(currentRating)}
                    />
                    <span
                      className="star"
                      style={{
                        color:
                          currentRating <= (hover || rating)
                            ? "#9B56A8" //change color of heart
                            : "#e4e5e9", //maintain empty heart white
                      }}
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(null)}
                    >
                      &hearts;
                    </span>
                  </label>
                );
              })}
            </div>
            <div className="popup-submit-btn-container">
              <button id="popup-submit-btn" type="submit">
                Add Review
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
