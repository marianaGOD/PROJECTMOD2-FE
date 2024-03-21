import React from "react";
import { useEffect, useState } from "react";
import HomePage from "../pages/HomePage";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddNewMovie({ movies, setMovies }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [mainCast, setMainCast] = useState("");
  const [oscar, setOscar] = useState("");
  const [genre, setGenre] = useState("");
  const [writers, setWriters] = useState("");
  const [funFact, setFunFact] = useState("");
  const [famousQuote, setFamousQuote] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1900 + 1 },
    (v, k) => 1900 + k
  );
  const nav = useNavigate();

  const handleClickOutside = (e) => {
    if (e.currentTarget != e.target) return;

    nav("/");
  };

  const handleCreateCard = (event) => {
    event.preventDefault();

    const newMovie = {
      title,
      description,
      year,
      director,
      mainCast,
      oscar,
      genre,
      writers,
      funFact,
      famousQuote,
      imageUrl,
    };

    //setMovies([...movies, newMovie]);
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
    axios
      .post(`${API_URL}/movies`, newMovie)
      .then(function (response) {
        console.log(response);
        nav("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="popup add-movie-popup" onClick={handleClickOutside}>
      <div className="inside-popup">
        <div className="popup-header">
          <h2>ADD NEW MOVIE</h2>
          <button className="delete-btn b" onClick={() => nav("/")}>
            X
          </button>
        </div>
        <form onSubmit={handleCreateCard}>
          <div className="popup-form-container">
            <div className="inline-container"></div>
            <div className="inline-container">
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
            <div className="inline-container">
              <label>
                <br />
                Year
                <br />
                <select
                  name="year"
                  value={year}
                  onChange={(event) => setYear(event.target.value)}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <br />
                Director
                <br />
                <input
                  placeholder="Director"
                  type="text"
                  value={director}
                  onChange={(event) => setDirector(event.target.value)}
                />
              </label>
              <label>
                <br />
                Main Cast
                <br />
                <input
                  placeholder="Main Cast"
                  type="text"
                  value={mainCast}
                  onChange={(event) => setMainCast(event.target.value)}
                />
              </label>
              <label>
                <br />
                Oscar
                <br />
                <select
                  placeholder="Oscar"
                  value={oscar.toString()}
                  onChange={(event) => setOscar(event.target.value === "true")}
                >
                  <option value="" disabled selected>
                    Select option
                  </option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </label>
              <label>
                <br />
                Genre
                <br />
                <select
                  placeholder="Genre"
                  value={genre}
                  onChange={(event) => setGenre(event.target.value)}
                >
                  <option value="" disabled selected>
                    Select option
                  </option>
                  <option value="Comedy">Comedy</option>
                  <option value="Horror">Horror</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Action">Action</option>
                  <option value="Drama">Drama</option>
                  <option value="Documentary">Documentary</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Romance">Romance</option>
                  <option value="Science fiction">Science fiction</option>
                  <option value="Western">Western</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Crime">Crime</option>
                  <option value="Animation">Animation</option>
                  <option value="Musical">Musical</option>
                  <option value="Experimental">Experimental</option>
                  <option value="Film noir">Film noir</option>
                  <option value="Historical Fiction">Historical Fiction</option>
                  <option value="Mockumentary">Mockumentary</option>
                  <option value="Action comedy">Action comedy</option>
                  <option value="Contemporary fantasy">
                    Contemporary fantasy
                  </option>
                  <option value="Sports">Sports</option>
                  <option value="Buddy comedy">Buddy comedy</option>
                </select>
              </label>
              <label>
                <br />
                Writers
                <br />
                <input
                  placeholder="Writers"
                  type="text"
                  value={writers}
                  onChange={(event) => setWriters(event.target.value)}
                />
              </label>
              <label>
                <br />
                Fun Fact
                <br />
                <input
                  placeholder="Fun Fact"
                  type="text"
                  value={funFact}
                  onChange={(event) => setFunFact(event.target.value)}
                />
              </label>
              <label>
                <br />
                Famous Quote
                <br />
                <input
                  placeholder="Famous Quote"
                  type="text"
                  value={famousQuote}
                  onChange={(event) => setFamousQuote(event.target.value)}
                />
              </label>
              <label>
                <br />
                Image
                <br />
                <input
                  placeholder="Image Url"
                  type="text"
                  value={imageUrl}
                  onChange={(event) => setImageUrl(event.target.value)}
                />
              </label>
            </div>
            <div className="popup-submit-btn-container">
              <button id="popup-submit-btn" type="submit">
                Add Movie
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
