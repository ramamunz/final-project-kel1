import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/SignIn";
import Signup from "./pages/SignUp";
import DetailFilm from "./pages/detailFilm";
import Favorite from "./pages/favoritFilm";
import DetailLego from "./pages/detail/detailLego";
import DetailTheLegoBatman from "./pages/detail/detailTheLegoBatman";
import DetailMarioBros from "./pages/detail/detailMarioBros";
import DetailElCamino from "./pages/detail/detailelCamino";
import DetailEscapePlan from "./pages/detail/detailEscapePlan";
import DetailEscapePlan2 from "./pages/detail/detailEscapePlan2";
import DetailSpongebob from "./pages/detail/detailSpongebob";
import DetailScaryMovie4 from "./pages/detail/detailScaryMovie4";
import DetailScaryMovie5 from "./pages/detail/detailScaryMovie5";
import DetailCars from "./pages/detail/detailCars";
import { useState } from "react";

function App() {
  const [favoriteFilm, setFavoriteFilm] = useState ([]);

  // Coba-coba dulu
  function handleFavoriteFilm(dataFilm) {
    const payload = {
      id: dataFilm.id,
      title: dataFilm.title,
      poster: dataFilm.poster,
      rating: dataFilm.rating,
      isFavorite: !dataFilm.isFavorite
    };

    setFavoriteFilm([...favoriteFilm, payload]);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/detailFilm" exact element={<DetailFilm />} />
          <Route path="/favoritFilm" exact element={<Favorite favoritFilm={favoriteFilm} setFavoritFilm={setFavoriteFilm} />} />
          <Route path="/SignIn" exact element={<Login />} />
          <Route path="/SignUp" exact element={<Signup />} />
          <Route path="/detailLego" exact element={<DetailLego />} />
          <Route
            path="/detailTheLegoBatman"
            exact
            element={<DetailTheLegoBatman />}
          />
          <Route path="/detailMarioBros" exact element={<DetailMarioBros />} />
          <Route path="/detailelCamino" exact element={<DetailElCamino favoritFilm={favoriteFilm} setFavoritFilm={setFavoriteFilm} />} />
          <Route
            path="/detailEscapePlan"
            exact
            element={<DetailEscapePlan />}
          />
          <Route
            path="/detailEscapePlan2"
            exact
            element={<DetailEscapePlan2 />}
          />
          <Route
            path="/detailScaryMovie4"
            exact
            element={<DetailScaryMovie4 />}
          />
          <Route
            path="/detailScaryMovie5"
            exact
            element={<DetailScaryMovie5 />}
          />
          <Route path="/detailSpongebob" exact element={<DetailSpongebob />} />
          <Route path="/detailCars" exact element={<DetailCars favoritFilm={favoriteFilm} setFavoritFilm={setFavoriteFilm} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
