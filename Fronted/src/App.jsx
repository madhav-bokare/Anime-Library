import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import DivComponents from "./components/DivComponents.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/anime/:animeName" element={<DivComponents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
