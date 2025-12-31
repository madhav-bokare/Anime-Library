import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const BottomMenu = ({ showMenu, setShowMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
    setShowMenu(false);
  };

  return (
    <>
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
          className={
            location.pathname === "/popular-movies" ? "active-link" : ""
          }
          onClick={() => setShowMenu(false)}
        >
          - Popular Movies
        </Link>

        <button className="back-btn" onClick={handleBack}>
          ← Back
        </button>
      </div>
    </>
  );
};

export default BottomMenu;
