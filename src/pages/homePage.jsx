import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddNewMovie from "../components/AddNewMovie";
import MoviesList from "./MoviesList";
import { useNavigate } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import axios from "axios";

export default function HomePage() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/movies").then((response) => {
      setMovies(response.data);
    });
  },[]);
  const nav = useNavigate();
  return (
    <>
      <div className="homepage-container">
        <h2>Home</h2>
        <main>
          <Carrousel movies={movies} />
        </main>
      </div>
      <div>
        <button onClick={() => nav("add-new-movie")}>Add New Movie</button>
      </div>
    </>
  );
}
