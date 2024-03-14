import React from "react";
import { Link } from "react-router-dom";
import PopUpForm from "./PopUpForm";

export default function topBar() {
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
        <PopUpForm />
      </div>
    </div>
  );
}
