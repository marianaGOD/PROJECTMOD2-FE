//import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesDetails from "./pages/MoviesDetails";
import MoviesList from "./pages/MoviesList";
import NotFoundPage from "./pages/NotFoundPage";
import TopBar from "./components/TopBar";
import { Footer } from "./components/Footer";
import AddNewMovie from "./components/AddNewMovie";
import AddReview from "./components/AddReview";
import PlayPage from "./pages/PlayPage";
import NewsList from "./components/NewsList";
import { NewsDetails } from "./pages/NewsDetails";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />} />
        <Route path="/:newsId" element={<NewsDetails />} />
        <Route path="/movies" element={<MoviesList />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/add-new-movie" element={<AddNewMovie />} />
        <Route path="/add-review/:movieId" element={<AddReview />} />
        <Route path="/play-page" element={<PlayPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
