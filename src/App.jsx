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
import { useEffect, useState } from "react";

function App() {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />} />
        <Route path="/news/:newsId" element={<NewsDetails />} />
        <Route path="/movies" element={<MoviesList />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/add-new-movie" element={<AddNewMovie />} />
        <Route path="/add-review/:movieId" element={<AddReview />} />
        <Route path="/play-page" element={<PlayPage />} />
      </Routes>
      <div>
        {showScroll && (
          <button onClick={scrollTop} className="scrollUp-btn">
            ↑
          </button>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
