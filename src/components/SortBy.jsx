import React, { useEffect, useState } from "react";

function SortBy({ movies, setMovies, setIsFilterOn }) {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [originalMovies, setOriginalMovies] = useState([]);

  useEffect(() => {
    console.log(movies);
    if (originalMovies.length === 0) {
      setOriginalMovies([...movies]);
    }
  }, [movies]);

  const sortByTitleAsc = () => {
    const sorted = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sorted);
  };

  const sortByTitleDesc = () => {
    const sorted = [...movies].sort((a, b) => b.title.localeCompare(a.title));
    setMovies(sorted);
  };

  const sortByYearAsc = () => {
    const sorted = [...movies].sort((a, b) => a.year.localeCompare(b.year));
    setMovies(sorted);
  };

  const sortByYearDesc = () => {
    const sorted = [...movies].sort((a, b) => b.year.localeCompare(a.year));
    setMovies(sorted);
  };

  const filterByOscar = () => {
    const filtered = movies.filter((movie) => movie.oscar);
    setMovies(filtered);
  };

  const resetMovies = () => {
    setMovies([...originalMovies]);
    setSelectedGenre("");
  };

  const filterByGenre = (newGenre) => {
    if (newGenre === "") {
      setMovies([...originalMovies]);
    } else {
      const filtered = originalMovies.filter((movie) =>
        movie.genre.includes(newGenre)
      );
      setMovies(filtered);
    }
  };

  const handleGenreChange = (event) => {
    setIsFilterOn(true);
    const newGenre = event.target.value;
    setSelectedGenre(newGenre);
    filterByGenre(newGenre);
  };
  return (
    <div>
      <button type="button" onClick={sortByTitleAsc}>
        Sort by Title ↑
      </button>
      <button type="button" onClick={sortByYearAsc}>
        Sort by Year ↑
      </button>
      <button type="button" onClick={sortByTitleDesc}>
        Sort by Title ↓
      </button>
      <button type="button" onClick={sortByYearDesc}>
        Sort by Year ↓
      </button>
      <button type="button" onClick={filterByOscar}>
        Filter by Oscar
      </button>
      <select
        value={selectedGenre}
        onChange={(event) => handleGenreChange(event)}
      >
        <option value="" disabled>
          Filter By Genre
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
        <option value="Contemporary fantasy">Contemporary fantasy</option>
        <option value="Sports">Sports</option>
        <option value="Buddy comedy">Buddy comedy</option>
      </select>
      <button onClick={resetMovies}>Reset</button>
    </div>
  );
}

export default SortBy;
