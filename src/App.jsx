import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import OnePice from "./pages/OnePice";
import Naruto from "./pages/Naruto";
import DrazonBall from "./pages/DrazonBall";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one-piece" element={<OnePice />} />
        <Route path="/naruto" element={<Naruto />} />
        <Route path="/dragon-ball-z" element={<DrazonBall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
