import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./home.css";
import {
  AttackOnTitan, BlackButler, Bleach, ChainsawMan, DeathNote, DemonSlayer,
  DragonBall, FireForce, HunterXhunter, Naruto, NarutoShippuden, OnePice,
  SoloLeveling, TokyoRevengers, VinladSaga, WindBreaker
} from "./img";
import {
  ASilentVoice, AttackOnTitanChronicle, DemonSlayerMugenTrain, JujutsuKaisen,
  SpiritedAway, VioletEvergardenTheMovie, WeatheringWithYou, YourName
} from "./img";

const Home = () => {
  const [query, setQuery] = useState("");
  const [fetchedAnime, setFetchedAnime] = useState([]);
  const mostPopularFromDB = fetchedAnime.filter((a) => a.category === "mostPopular");
  const mostLikeFromDB = fetchedAnime.filter((a) => a.category === "mostLike");
  const popularMoviesFromDB = fetchedAnime.filter((a) => a.category === "popularMovies");


  // ===== Default Local Data =====
  const data = useMemo(
    () => ({
      mostPopular: [
        { id: "one piece", img: OnePice, link: "/OnePice", name: "One Piece", category: "mostPopular" },
        { id: "naruto", img: Naruto, link: "/Naruto", name: "Naruto", category: "mostPopular" },
        { id: "naruto shippuden", img: NarutoShippuden, link: "/NarutoShippuden", name: "Naruto Shippuden", category: "mostPopular" },
        { id: "dragon ball z", img: DragonBall, link: "/DragonBall", name: "Dragon Ball Z", category: "mostPopular" },
        { id: "solo leveling", img: SoloLeveling, link: "/SoloLeveling", name: "Solo Levelling", category: "mostPopular" },
        { id: "death note", img: DeathNote, link: "/DeathNote", name: "Death Note", category: "mostPopular" },
        { id: "tokyo revengers", img: TokyoRevengers, link: "/TokyoRevengers", name: "Tokyo Revengers", category: "mostPopular" },
        { id: "wind breaker", img: WindBreaker, link: "/WindBreaker", name: "Wind Breaker", category: "mostPopular" },
      ],
      mostLike: [
        { id: "attack on titan", img: AttackOnTitan, link: "/AttackOnTitan", name: "Attack On Titan", category: "mostLike" },
        { id: "black butler", img: BlackButler, link: "/BlackButler", name: "Black Butler", category: "mostLike" },
        { id: "bleach", img: Bleach, link: "/Bleach", name: "Bleach", category: "mostLike" },
        { id: "chainsaw man", img: ChainsawMan, link: "/ChainsawMan", name: "Chainsaw Man", category: "mostLike" },
        { id: "demon slayer", img: DemonSlayer, link: "/DemonSlayer", name: "Demon Slayer", category: "mostLike" },
        { id: "fire force", img: FireForce, link: "/FireForce", name: "Fire Force", category: "mostLike" },
        { id: "hunter x hunter", img: HunterXhunter, link: "/HunterXhunter", name: "Hunter X Hunter", category: "mostLike" },
        { id: "vinlad saga", img: VinladSaga, link: "/VinladSaga", name: "Vinlad Saga", category: "mostLike" },
      ],
      popularMovies: [
        { id: "your name", img: YourName, link: "/YourName", name: "Your Name", category: "popularMovies" },
        { id: "a silent voice", img: ASilentVoice, link: "/ASilentVoice", name: "A Silent Voice", category: "popularMovies" },
        { id: "jujutsu kaisen 0", img: JujutsuKaisen, link: "/JujutsuKaisen", name: "Jujutsu Kaisen 0", category: "popularMovies" },
        { id: "attack on titan chronicle", img: AttackOnTitanChronicle, link: "/AttackOnTitanChronicle", name: "Attack On Titan Chronicle", category: "popularMovies" },
        { id: "spirited away", img: SpiritedAway, link: "/SpiritedAway", name: "Spirited Away", category: "popularMovies" },
        { id: "violet evergarden: the movie", img: VioletEvergardenTheMovie, link: "/VioletEvergardenTheMovie", name: "Violet Evergarden: The Movie", category: "popularMovies" },
        { id: "weathering with you", img: WeatheringWithYou, link: "/WeatheringWithYou", name: "Weathering With You", category: "popularMovies" },
        { id: "demon slayer mugen train", img: DemonSlayerMugenTrain, link: "/DemonSlayerMugenTrain", name: "Demon Slayer: Mugen Train", category: "popularMovies" },
      ],
      recommendedSeries: [
        { id: "one piece", img: OnePice, link: "/OnePice", name: "One Piece", category: "recommendedSeries" },
        { id: "naruto", img: Naruto, link: "/Naruto", name: "Naruto", category: "recommendedSeries" },
        { id: "attack on titan", img: AttackOnTitan, link: "/AttackOnTitan", name: "Attack On Titan", category: "recommendedSeries" },
      ],
      recommendedMovies: [
        { id: "your name", img: YourName, link: "/YourName", category: "recommendedSeries" },
        { id: "demon slayer mugen train", img: DemonSlayerMugenTrain, link: "/DemonSlayerMugenTrain", name: "Demon Slayer: Mugen Train", category: "recommendedSeries" },
        { id: "spirited away", img: SpiritedAway, link: "/SpiritedAway", name: "Spirited Away", category: "recommendedSeries" },
      ],
    }),
    []
  );

  // ===== Fetch Anime from MongoDB + Cloudinary =====
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await axios.get("https://anime-library-backend.onrender.com/api/anime");
        setFetchedAnime(res.data);
      } catch (err) {
        console.error(" Error fetching anime:", err);
      }
    };
    fetchAnime();
  }, []);

  // ===== Search Logic =====
  const allCards = [
    ...data.mostPopular,
    ...data.mostLike,
    ...data.popularMovies,
    ...data.recommendedMovies,
    ...data.recommendedSeries,
    ...fetchedAnime,
  ];

  const results = query
    ? allCards.filter((c) => c.id?.toLowerCase().includes(query.toLowerCase()))
    : [];

  // ===== Render Section =====
  const renderSection = (title, items) => (
    <section>
      <h2 className="cardHeading">{title}</h2><br />
      <div className="card-container">
        {items.map((card, i) => (
          <div key={`${title}-${i}`} className="card">
            <Link to={card.link || "#"} className="card-link">
              <img src={card.img} alt={card.name} /><br />
            </Link>
            <p className="anime-name">{card.name}</p>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">✦ Anime Library</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/popular-movies">Popular Movies</Link>
        </div>
        <div className="search-container">
          <input
            type="search"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </nav>

      {/* AUTO SLIDE */}
      {!query ? (
        <>
          <section className="auto-slide-section">
            <h2 className="cardHeading">Recommended Series</h2><br />
            <div className="auto-slide-container">
              <div className="auto-slide-track">
                {data.recommendedSeries.concat(data.recommendedSeries).map((card, i) => (
                  <div key={i} className="card">
                    <Link to={card.link}>
                      <img src={card.img} alt={card.id} /><br />
                    </Link>
                    <p className="anime-name">{card.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="auto-slide-section">
            <h2 className="cardHeading">Recommended Movies</h2><br />
            <div className="auto-slide-container">
              <div className="auto-slide-track">
                {data.recommendedMovies.concat(data.recommendedMovies).map((card, i) => (
                  <div key={i} className="card">
                    <Link to={card.link} className="card-link">
                      <img src={card.img} alt={card.id} /><br />
                    </Link>
                    <p className="anime-name">{card.name || card.id}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : null}

      {/* SEARCH RESULTS OR MAIN SECTIONS */}
      {query ? (
        <section className="search-results">
          <h2>Search Results</h2>
          <div className="card-container">
            {results.length ? (
              results.map((card, i) => (
                <div key={i} className="card">
                  <Link to={card.link || "#"}>
                    <img src={card.img} alt={card.name} />
                  </Link>
                </div>
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        </section>

      ) : (
        <>

          {renderSection("Most Popular", [...data.mostPopular, ...mostPopularFromDB])}
          {renderSection("Most Like", [...data.mostLike, ...mostLikeFromDB])}
          {renderSection("Popular Movies", [...data.popularMovies, ...popularMoviesFromDB])}
        </>
      )}
      {/* ======= FOOTER ======= */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h2 className="footer-section-about-h2">About AnimeWorld</h2>
            <p className="footer-section-about-p">
              AnimeWorld brings you the ultimate collection of popular, trending, and
              most-loved anime. Stay connected and explore new adventures every day!
            </p>
          </div>

          <div className="footer-section links">
            <h2 className="footer-section-about-h2">Quick Links</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/popular-movies">Popular Movies</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

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

        <div className="footer-bottom">
          <p className="footer-bottom-a">
            &copy; 2025 AnimeWorld. All Rights Reserved.
          </p>
        </div>
      </footer>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </>
  );
};

export default Home;
