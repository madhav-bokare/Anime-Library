import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const searchInputRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const searchInput = searchInputRef.current;
    const cards = cardsRef.current;

    const filterCards = () => {
      const query = searchInput.value.toLowerCase();
      cards.forEach((card) => {
        const title = card.id.toLowerCase();
        if (title.includes(query)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    };

    searchInput.addEventListener("input", filterCards);
    return () => {
      searchInput.removeEventListener("input", filterCards);
    };
  }, []);

  const mostPopular = [
    { id: "one-piece", img: "/images/series img/one pice.webp", link: "/one-piece", alt: "One Piece" },
    { id: "naruto", img: "/images/series img/naruto.webp", link: "/naruto", alt: "Naruto" },
    { id: "dragon-ball-z", img: "/images/series img/drazon ball z.webp", link: "/dragon-ball-z", alt: "Dragon Ball Z" },
  ];

  const mostLike = [
    { id: "black-butler", img: "/images/series img/black butler.avif", link: "/black-butler", alt: "Black Butler" },
    { id: "bleach", img: "/images/series img/bleach.webp", link: "/bleach", alt: "Bleach" },
    { id: "chainsaw-man", img: "/images/series img/chainsow man.jpg", link: "/chainsaw-man", alt: "Chainsaw Man" },
  ];

  const popularMovies = [
    { id: "your-name", img: "/images/movies images/your name.jpg", link: "/your-name", alt: "Your Name" },
    { id: "a-silent-voice", img: "/images/movies images/a silent voice.webp", link: "/a-silent-voice", alt: "A Silent Voice" },
    { id: "demon-slayer-mugen-train", img: "/images/movies images/Demon Slayer-Mugen Train.jpg", link: "/demon-slayer-mugen-train", alt: "Demon Slayer Mugen Train" },
  ];

  return (
    <>
      {/* ======= NAVBAR ======= */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-symbol">✦</span> Anime Library
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/popular-movies">Popular Movies</Link>
        </div>

        <div className="search-container">
          <input ref={searchInputRef} id="search" type="search" placeholder="Search..." />
          <button type="button">Search</button>
        </div>

        {/* ======= MENU ICON ======= */}
     <div class="menu-icon">☰
      <ul>
        <li class="menu-sab-li"><a class="menu-sab-a" href="/menu-pages/help.html">Help</a></li>
        <li class="menu-sab-li"><a class="menu-sab-a" href="/menu-pages/settings.html">Settings</a></li>
      </ul>
    </div>

      </nav>

      <br /><br />

      {/* ======= MOST POPULAR ======= */}
      <section className="most-popular-section">
        <h2>Most Popular</h2>
        <br />
        <div className="card-container">
          {mostPopular.map((card, index) => (
            <div key={`popular-${index}`} id={card.id} className="card" ref={(el) => (cardsRef.current[index] = el)}>
              <Link to={card.link}>
                <img src={card.img} alt={card.alt} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ======= MOST LIKE ======= */}
      <section className="most-like-section">
        <h2>Most Like</h2>
        <br />
        <div className="card-container">
          {mostLike.map((card, index) => (
            <div key={`like-${index}`} id={card.id} className="card" ref={(el) => (cardsRef.current[index + mostPopular.length] = el)}>
              <Link to={card.link}>
                <img src={card.img} alt={card.alt} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ======= POPULAR MOVIES ======= */}
      <section className="popular-movies-section">
        <h2>Popular Movies</h2>
        <br />
        <div className="card-container">
          {popularMovies.map((card, index) => (
            <div key={`movie-${index}`} id={card.id} className="card" ref={(el) => (cardsRef.current[index + mostPopular.length + mostLike.length] = el)}>
              <Link to={card.link}>
                <img src={card.img} alt={card.alt} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <br /><br />

      {/* ======= FOOTER ======= */}
   <footer className="footer">
      <div className="footer-container">

        {/* ======= ABOUT SECTION ======= */}
        <div className="footer-section about">
          <h2 className="footer-section-about-h2">About AnimeWorld</h2>
          <p className="footer-section-about-p">
            AnimeWorld brings you the ultimate collection of popular, trending, and most-loved anime. 
            Stay connected and explore new adventures every day!
          </p>
        </div>

        {/* ======= QUICK LINKS ======= */}
        <div className="footer-section links">
          <h2 className="footer-section-about-h2">Quick Links</h2>
          <ul>
            <li><Link  to="/">Home</Link></li>
            <li><Link  to="/categories">Categories</Link></li>
            <li><Link  to="/popular-movies">Popular Movies</Link></li>
            <li><Link  to="/contact">Contact Us</Link></li>
            <li><Link  to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link  to="/terms">Terms of Services</Link></li>
          </ul>
        </div>

        {/* ======= SOCIAL MEDIA ======= */}
        <div className="footer-section social">
          <h2 className="footer-section-about-h2">Follow Us</h2>
          <div className="social-icons">
            <p><i className="fab fa-facebook-f"></i> Facebook</p><br />
            <p><i className="fab fa-instagram"></i> Instagram</p><br />
            <p className="footer-twitter"><i className="fab fa-twitter"></i> Twitter</p><br />
            <p><i className="fab fa-youtube"></i> YouTube</p>
          </div>
        </div>

      </div>

      {/* ======= BOTTOM COPYRIGHT ======= */}
      <div className="footer-bottom">
        <p className="footer-bottom-a">
          &copy; 2025 AnimeWorld. All Rights Reserved.
        </p>
      </div>

      {/* ======= FONT AWESOME ======= */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </footer>
    </>
  );
};

export default Home;
