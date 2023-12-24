import React from "react";
import { Link } from "react-router-dom";
import CUHomeLogo from "../assets/img/favFilm/CU-Home.png";
import banner from "../assets/img/favFilm/mandalorian 1.png";
import mandalorianLogo from "../assets/img/favFilm/MandoS3Logo 1.png";
import TopGunM from "../assets/img/favFilm/TopGun M-2.png";
import TopGun from "../assets/img/favFilm/TopGun M.png";
import Avengers from "../assets/img/favFilm/avengers-1.png";
import Spidermen from "../assets/img/favFilm/Spiderman.png";
import Batman from "../assets/img/favFilm/Batman v Superman.png";
import Batman1 from "../assets/img/favFilm/Batman v Superman-2.png";
import Black_bird from "../assets/img/favFilm/black bird.png";
import BlackPanther from "../assets/img/favFilm/BlackPanther.png";

import {
  FaStar,
  FaPlay,
  FaPlus,
  FaBookmark,
  FaBookmarkFill,
} from "react-icons/fa";

function Favorite( {favoritFilm, setFavoritFilm} ) {
  // const favoriteMovies = [
  //   { title: "Top Gun: Maverick", image: TopGunM, rating: 4 },
  //   { title: "Top Gun: Maverick", image: TopGun, rating: 4 },
  //   { title: "Avengers Infinity War", image: Avengers, rating: 4.5 },
  //   { title: "Spider-Man: No Way Home", image: Spidermen, rating: 5 },
  //   { title: "Batman v Superman", image: Batman, rating: 3.5 },
  //   { title: "Black Bird", image: Black_bird, rating: 4 },
  //   { title: "Black Panther", image: BlackPanther, rating: 4.5 },
  //   { title: "Top Gun: Maverick", image: TopGunM, rating: 4 },
  //   { title: "Top Gun: Maverick", image: TopGun, rating: 4 },
  //   { title: "Avengers Infinity War", image: Avengers, rating: 4.5 },
  //   { title: "Spider-Man: No Way Home", image: Spidermen, rating: 5 },
  //   { title: "Batman v Superman", image: Batman1, rating: 3.5 },
  //   { title: "Black Bird", image: Black_bird, rating: 4 },
  //   { title: "Black Panther", image: BlackPanther, rating: 4.5 },
  // ];

  // function handleDeleteFavorite (id){
  //   const newFavorites = favoritFilm.filter(item => item.id !== payload.id);
  //   setFavoritFilm(newFavorites);
  // }

  function handleDeleteFavorite(id) {
    const newFavorites = favoritFilm.filter((item) => item.id !== id);
    setFavoritFilm(newFavorites);
  }

  return (
    <>
      {/* Navbar */}
      <nav className="p-3 w-full bg-merah-hati sticky top-0 z-50 bg-opacity-100">
        <div className="flex flex-row justify-between items-center">
          <div></div>

          <div>
            <ul className="flex flex-row space-x-4">
              <li>
                <Link
                  to="/"
                  className="relative inline-flex items-center justify-center p-0.5  text-center text-sm text-white rounded-full group bg-gradient-to-r from-merah-hati to-merah-cerah"
                >
                  <span className="rounded-full relative w-24  transition-all py-1 bg-white dark:bg-merah-hati group-hover:bg-opacity-0">
                    Home
                  </span>
                </Link>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center p-0.5  text-center text-sm text-white rounded-full group bg-gradient-to-r from-merah-hati to-merah-cerah"
                >
                  <span className="rounded-full relative w-24  transition-all py-1 bg-white dark:bg-merah-hati group-hover:bg-opacity-0">
                    Movies
                  </span>
                </a>
              </li> */}
              <li>
                <img src={CUHomeLogo} alt="logo" />
              </li>
              {/* <li>
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center p-0.5  text-center text-sm text-white rounded-full group bg-gradient-to-r from-merah-hati to-merah-cerah"
                >
                  <span className="rounded-full relative w-24  transition-all py-1 bg-white dark:bg-merah-hati group-hover:bg-opacity-0">
                    Series
                  </span>
                </a>
              </li> */}
              <li>
                <Link
                  to="/fav-list"
                  className="relative inline-flex items-center justify-center p-0.5  text-center text-sm text-white rounded-full group bg-gradient-to-r from-merah-hati to-merah-cerah"
                >
                  <span className="rounded-full relative w-24  transition-all py-1 bg-white dark:bg-merah-hati group-hover:bg-opacity-0">
                    Favorite
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-row gap-2">
              {/* <li>
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center p-0.5  text-center text-sm text-white rounded-full group bg-gradient-to-r from-merah-hati to-merah-cerah"
                >
                  <span className="rounded-full relative w-24  transition-all py-1 bg-white dark:bg-merah-hati group-hover:bg-opacity-0">
                    Login
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center p-0.5  text-center text-sm text-white rounded-full group bg-gradient-to-r from-merah-hati to-merah-cerah"
                >
                  <span className="rounded-full relative w-24  transition-all py-1 bg-white dark:bg-merah-hati group-hover:bg-opacity-0">
                    Register
                  </span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* banner */}
      <section className="bg-merah-hati relative w-full h-screen justify-center items-center">
        <img
          src={banner}
          className="absolute object-cover w-full h-full"
          alt="Banner"
        />

        <div className="relative z-1 w-1/2 py-12 px-12">
          <img src={mandalorianLogo} className="py-8 justify-center" />

          {/* rating */}
          <div className="flex items-end pt-3">
            <div className="flex items-start">
              <FaStar size={24} color="#ffc107" />
              <FaStar size={24} color="#ffc107" />
              <FaStar size={24} color="#ffc107" />
              <FaStar size={24} color="#ffc107" />
              <FaStar size={24} color="#e4e5e9" />
            </div>
            <span className="ml-2 text-white">4.0</span>
          </div>

          <h4 className="text-white font-sm font-200 flex-row pt-4 gap-4">
            <span className="pr-4"> Action </span> |
            <span className="px-4"> Adventure </span> |
            <span className="px-4"> Fantasy </span>
          </h4>

          {/* buttonGroup */}
          <div className="flex pt-4 gap-4">
            <button className="bg-merah-cerah hover:bg-zinc-700 text-white font-bold p-4 rounded-full focus:outline-none focus:shadow-outline">
              <FaPlay size={24} />
            </button>

            <button className="bg-merah-cerah hover:bg-zinc-700 text-white font-bold p-4 rounded-full focus:outline-none focus:shadow-outline">
              <FaPlus size={24} />
            </button>
          </div>

          <div className="pt-4">
            <p className="text-white text-justify">
              The travels of a lone bounty hunter in the outer reaches of the
              galaxy, far from the authority of the New Republic.
            </p>
          </div>
        </div>
      </section>

      {/* Movie list */}
      <section className="bg-merah-hati py-4">
        <div className="max-w-screen-xl mx-auto p-10">
          <div className="text-white font-bold text-xl mb-4">My List</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
              {favoritFilm.map(movie => (
                <div
                  key={movie.id}
                  className="w-full h-48 transform transition-transform hover:scale-110 relative"
                >
                  <img
                    src={movie.poster}
                    className="w-full h-full object-cover rounded-lg"
                    alt={movie.title}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-full px-4 pb-4 flex flex-col items-start">
                    <div className="flex items-start">
                      {/* Display single star rating */}
                      <FaStar size={15} color="#ffc107" />
                      <span className="ml-1 text-white">{movie.rating}</span>
                    </div>
                    <h4 className="text-white font-bold text-lg">
                      {movie.title}
                    </h4>
                    <button onClick={() => handleDeleteFavorite(movie.id)} className="mt-auto bg-transparan hover:bg-zinc-700 text-white font-bold p-2 rounded-full focus:outline-none focus:shadow-outline">
                      <FaBookmark size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
    </>
  );
}

export default Favorite;
