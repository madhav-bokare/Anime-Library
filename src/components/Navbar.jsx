import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../CSS/Navbar.css";

const Navbar = ({ setQuery = () => {} }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  // Go back one page
  const handleBack = () => {
    navigate(-1);
    setShowMenu(false);
  };

  return (
    <>
      {/* ===== TOP NAVBAR ===== */}
      <nav className="navbar">
        <div className="logo">✦ Anime Library</div>

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

        <div className="search-container">
          <input
            type="search"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </nav>

      {/* ===== MENU ICON ===== */}
      <button
        className="menu-icon-bottom"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? "×" : "☰"}
      </button>

      {/* ===== MINI MENU ABOVE ICON ===== */}
      <div className={`mini-menu-box-bottom ${showMenu ? "show" : ""}`}>
        <Link
          to="/categories"
          className={location.pathname === "/categories" ? "active-link" : ""}
          onClick={() => setShowMenu(false)}
        >
          - Popular Series
        </Link>

        <Link
          to="/popular-movies"
          className={location.pathname === "/popular-movies" ? "active-link" : ""}
          onClick={() => setShowMenu(false)}
        >
          - Popular Movies
        </Link>

        <Link
          to="/help"
          className={location.pathname === "/help" ? "active-link" : ""}
          onClick={() => setShowMenu(false)}
        >
          - Help
        </Link>
        <button className="back-btn" onClick={handleBack}>
          ← Back
        </button>
      </div>
    </>
  );
};

export default Navbar;
