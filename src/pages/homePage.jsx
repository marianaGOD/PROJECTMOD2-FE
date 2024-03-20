import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddNewMovie from "../components/AddNewMovie";
import MoviesList from "./MoviesList";
import { useNavigate } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import axios from "axios";
import Logo from "../assets/logo.png";
import NewsList from "../components/NewsList";
import RecentReviews from "../components/RecentReviews";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/movies").then((response) => {
      setMovies(response.data);
    });
  }, []);

  const nav = useNavigate();
  return (
    <>
      <div className="home-title-container">
        <img src={Logo}></img>
        <h1>Home to the best movies of all time.</h1>
      </div>
      <main className="carrousel-wrapper">
        <Carrousel movies={movies} />
        <h1>Browse among hundreds of titles and add your own reviews.</h1>
      </main>

      <div>
        <button className="add-button" onClick={() => nav("add-new-movie")}>
          Add New Movie
        </button>
        <div className="homepage-recentreviews-container">
          <RecentReviews />
        </div>
      </div>

      <div>
        <NewsList />
      </div>
    </>
  );
}
