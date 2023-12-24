import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/favoritFilm" exact element={<Favorite />} />
          <Route path="/SignIn" exact element={<Login />} />
          <Route path="/SignUp" exact element={<Signup />} />
          <Route path="/detailLego" exact element={<DetailLego />} />
          <Route
            path="/detailTheLegoBatman"
            exact
            element={<DetailTheLegoBatman />}
          />
          <Route path="/detailMarioBros" exact element={<DetailMarioBros />} />
          <Route path="/detailelCamino" exact element={<DetailElCamino />} />
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
            path="/detailEscapePlan3"
            exact
            element={<DetailEscapePlan3 />}
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
          <Route path="/detailCars" exact element={<DetailCars />} />
          <Route path="/detailCars2" exact element={<DetailCars2 />} />
          <Route path="/detailToyStory" exact element={<DetailToyStory />} />
          <Route
            path="/detailTheRoundUp"
            exact
            element={<DetailTheRoundUp />}
          />
          <Route
            path="/detailFindingNemo"
            exact
            element={<DetailFindingNemo />}
          />
          <Route
            path="/detailKungfuPanda"
            exact
            element={<DetailKungfuPanda />}
          />
          <Route
            path="/detailTrainToBusan"
            exact
            element={<DetailTrainToBusan />}
          />
          <Route path="/detailTar" exact element={<DetailTar />} />
          <Route path="/detailTheBig4" exact element={<DetailTheBig4 />} />
          <Route
            path="/detailBlackHawkDown"
            exact
            element={<DetailBlackHawkDown />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
