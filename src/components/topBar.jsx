import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div>
        <Link to="/">
          <img src={Logo} className="topbar-logo"></img>
        </Link>
      </div>
      <div className="bar-links">
        <Link to="/"> Home</Link>
        <Link to="/movies"> Movies</Link>
        <Link to="/add-new-movie"> Add New Movie</Link>
        <Link to="/play-page"> Play! </Link>
      </div>
    </div>
  );
}
