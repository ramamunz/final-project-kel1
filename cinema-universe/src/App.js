import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/fav-list";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav-list" element={<Favorite />} />
      </Routes>
    </Router>
  );
}

export default App;
