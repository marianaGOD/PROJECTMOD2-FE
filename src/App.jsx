//import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesDetails from "./pages/MoviesDetails";
import MoviesList from "./pages/MoviesList";
import NotFoundPage from "./pages/NotFoundPage";
import TopBar from "./components/TopBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />} />
        <Route path="/movies" element={<MoviesList />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
