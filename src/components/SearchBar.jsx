import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ movies, setIsSearchOn }) {
  const [searchInput, setSearchInput] = useState("");
  let moviesToSearch = movies;

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    setIsSearchOn(true);
    moviesToSearch = moviesToSearch.filter((movie) => {
      return movie.title.toLowerCase().includes(searchInput.toLowerCase());
    });

    console.log(moviesToSearch);
  }
  return (
    <div className="searchbar-style">
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <div className="movies-container">
        {movies &&
          moviesToSearch.map((movie) => {
            return (
              <Link key={movie.id} to={`${movie.id}`}>
                <div className="list-group-each">
                  <p>{movie.title}</p>
                  <img src={movie.imageUrl} />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
