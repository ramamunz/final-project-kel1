import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/SignIn";
import Signup from "./pages/SignUp";
import DetailFilm from "./pages/detailFilm";
import Favorite from "./pages/favoritFilm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/detailFilm" exact element={<DetailFilm />} />
          <Route path="/favoritFilm" exact element={<Favorite />} />
          <Route path="/SignIn" exact element={<Login />} />☻
          <Route path="/SignUp" exact element={<Signup />} />☻
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
