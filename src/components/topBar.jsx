import React from "react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div>
        <Link to="/">
          <h1>PlotTwist</h1>{" "}
        </Link>
      </div>
      <div className="bar-links">
        <Link to="/"> Home</Link>
        <Link to="/movies"> Movies</Link>
        <Link to="/add-new-movie"> Add New Movie</Link>
      </div>
    </div>
  );
}
