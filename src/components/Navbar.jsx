import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../CSS/Navbar.css"

const Navbar = ({ setQuery = () => {} }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">✦ Anime Library</div>

      {/* ===== MAIN NAV LINKS ===== */}
      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
          Home
        </Link>
        <Link
          to="/categories"
          className={location.pathname === "/categories" ? "active-link" : ""}
        >
          Popular Series
        </Link>
        <Link
          to="/popular-movies"
          className={location.pathname === "/popular-movies" ? "active-link" : ""}
        >
          Popular Movies
        </Link>
      </div>

      {/* ===== SEARCH BAR ===== */}
      <div className="search-container">
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* ===== MINI MENU BOX ===== */}
      <div className="mini-menu-box">
        <Link
          to="/categories"
          className={`mobile-only ${
            location.pathname === "/categories" ? "active-link" : ""
          }`}
        >
          - Popular Series
        </Link>

        <Link
          to="/popular-movies"
          className={`mobile-only ${
            location.pathname === "/popular-movies" ? "active-link" : ""
          }`}
        >
          - Popular Movies
        </Link>

        <div className="more-box">
          <button className="more-btn">⋯ More</button>
          <div className="inner-box">
            <Link
              to="/help"
              className={location.pathname === "/help" ? "active-link" : ""}
            >
              - Help
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
