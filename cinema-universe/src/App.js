import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/SignIn";
import Signup from "./pages/SignUp";
import DetailFilm from "./pages/detailFilm";
import Favorite from "./pages/favoritFilm";

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { MovieProvider } from "./components/MovieContext";
// import "./App.css";
// import Home from "./pages/Home";
// import Login from "./pages/SignIn";
// import Signup from "./pages/SignUp";
// import DetailFilm from "./pages/detailFilm";
// import Favorite from "./pages/favoritFilm";

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
      {/* <Router>
        <MovieProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/detailFilm" component={DetailFilm} />
            <Route path="/favoritFilm" exact element={<Favorite />} />
            <Route path="/SignIn" exact element={<Login />} />☻
            <Route path="/SignUp" exact element={<Signup />} />☻
          </Switch>
        </MovieProvider>
      </Router> */}
    </div>
  );
}
export default App;
