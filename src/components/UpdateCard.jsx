import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UpdateCard() {
  const [movie, setMovie] = useState({});
  const [description, setDescription] = useState("");

  const { movieId } = useParams();
  const nav = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  useEffect(() => {
    axios
      .get(`${API_URL}/movies/${movieId}`)
      .then((response) => {
        setMovie(response.data);
        setDescription(response.data.description); 
      })
      .catch((err) => console.log(err));
  }, [movieId, API_URL]);

  function handleEditMovie(event) {
    event.preventDefault(); 
    const editedMovie = {
      description,
    };

    axios
      .patch(`${API_URL}/movies/${movieId}`, editedMovie)
      .then(function (response) {
        console.log(response);
        nav(`/movies/${movieId}`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleEditMovie}>
      <div className="popup-form-container">
        <div className="update-description">
          <label>
            Description
            <br />
            <textarea
              id="description-textarea"
              placeholder="Description ..."
              value={description} 
              onChange={(event) => setDescription(event.target.value)}
              rows="10"
              cols="40"
              maxLength="1000"
            ></textarea>
          </label>
        </div>
        <div className="popup-submit-btn-container">
          <button id="popup-submit-btn" type="submit">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
