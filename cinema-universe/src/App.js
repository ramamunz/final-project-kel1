import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/SignIn";
import Signup from "./pages/SignUp";
import Favorite from "./pages/favoritFilm";
import DetailLego from "./pages/detail/detailLego";
import DetailTheLegoBatman from "./pages/detail/detailTheLegoBatman";
import DetailMarioBros from "./pages/detail/detailMarioBros";
import DetailElCamino from "./pages/detail/detailelCamino";
import DetailEscapePlan from "./pages/detail/detailEscapePlan";
import DetailEscapePlan2 from "./pages/detail/detailEscapePlan2";
import DetailEscapePlan3 from "./pages/detail/detailEscapePlan3";
import DetailSpongebob from "./pages/detail/detailSpongebob";
import DetailScaryMovie4 from "./pages/detail/detailScaryMovie4";
import DetailScaryMovie5 from "./pages/detail/detailScaryMovie5";
import DetailCars from "./pages/detail/detailCars";
import DetailCars2 from "./pages/detail/detailCars2";
import DetailToyStory from "./pages/detail/detailToyStory";
import DetailTheRoundUp from "./pages/detail/detailTheRoundUp";
import DetailFindingNemo from "./pages/detail/detailFindingNemo";
import DetailKungfuPanda from "./pages/detail/detailKunfuPanda";
import DetailTrainToBusan from "./pages/detail/detailTrainToBusan";
import DetailTar from "./pages/detail/detailTar";
import DetailTheBig4 from "./pages/detail/detailTheBig4";
import DetailBlackHawkDown from "./pages/detail/detailBlackHawkDown";

function App() {
  const [favoriteFilm, setFavoriteFilm] = useState([]);
  function handleFavoriteFilm(dataFilm) {
    const payload = {
      id: dataFilm.id,
      title: dataFilm.title,
      poster: dataFilm.poster,
      rating: dataFilm.rating,
      isFavorite: !dataFilm.isFavorite,
    };

    setFavoriteFilm([...favoriteFilm, payload]);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/favoritFilm"
            exact
            element={
              <Favorite
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route path="/SignIn" exact element={<Login />} />
          <Route path="/SignUp" exact element={<Signup />} />
          <Route
            path="/detailLego"
            exact
            element={
              <DetailLego
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailTheLegoBatman"
            exact
            element={
              <DetailTheLegoBatman
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailMarioBros"
            exact
            element={
              <DetailMarioBros
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailelCamino"
            exact
            element={
              <DetailElCamino
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailEscapePlan"
            exact
            element={
              <DetailEscapePlan
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailEscapePlan2"
            exact
            element={
              <DetailEscapePlan2
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailEscapePlan3"
            exact
            element={
              <DetailEscapePlan3
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailScaryMovie4"
            exact
            element={
              <DetailScaryMovie4
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailScaryMovie5"
            exact
            element={
              <DetailScaryMovie5
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailSpongebob"
            exact
            element={
              <DetailSpongebob
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailCars"
            exact
            element={
              <DetailCars
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailCars2"
            exact
            element={
              <DetailCars2
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailToyStory"
            exact
            element={
              <DetailToyStory
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailTheRoundUp"
            exact
            element={
              <DetailTheRoundUp
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailFindingNemo"
            exact
            element={
              <DetailFindingNemo
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailKungfuPanda"
            exact
            element={
              <DetailKungfuPanda
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailTrainToBusan"
            exact
            element={<DetailTrainToBusan />}
          />
          <Route
            path="/detailTar"
            exact
            element={
              <DetailTar
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailTheBig4"
            exact
            element={
              <DetailTheBig4
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
          <Route
            path="/detailBlackHawkDown"
            exact
            element={
              <DetailBlackHawkDown
                favoritFilm={favoriteFilm}
                setFavoritFilm={setFavoriteFilm}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
