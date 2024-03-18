import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar({movies}) {
  const [searchInput, setSearchInput] = useState("");
  let moviesToSearch = movies

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    moviesToSearch = moviesToSearch.filter((movie) => {
      return movie.title.toLowerCase().includes(searchInput.toLowerCase());
    });
  
    console.log(moviesToSearch)
  }
  return (
    <div>
      SearchBar
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <div>
        {movies &&
          moviesToSearch.map((movie) => {
            return (
              <Link key={movie.id} to={`${movie.id}`}>
                <div className="list-group-each">
                  <h2>{movie.title}</h2>
                  <img src={movie.imageUrl} />
                  <p>{movie.description}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
