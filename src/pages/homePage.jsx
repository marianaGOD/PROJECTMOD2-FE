import React from "react";
import { Link } from "react-router-dom";
import AddNewMovie from "../components/AddNewMovie";
import MoviesList from "./MoviesList";
import { useNavigate } from "react-router-dom";


export default function HomePage(movies, setMovies) {
  const nav = useNavigate()
  return (
    <>
      <div className="homepage-container">
        <h2>Home</h2>
        <main>Movies Carrousel goes here</main>
      </div>
      <div>
        <button onClick={() => nav("add-new-movie")}>Add New Movie</button>
      </div>
    </>
  );
}
