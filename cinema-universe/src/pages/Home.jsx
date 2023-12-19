import React from "react";
import CUHomeLogo from "../assets/img/home/CU-Home.png";
import MarvelLogo from "../assets/img/home/MARVEL LOGO 1.png";
import banner from "../assets/img/home/sjblackwidow 1 (1).png";
import MovieTitle from "../assets/img/home/Black_Widow 1.png";
import Avatar from "../assets/img/home/avatar.png";
import Avegare from "../assets/img/home/avengers.png";
import TopGun from "../assets/img/home/top gun maverick.png";
import Spidermen from "../assets/img/home/spider man.png";
import Warewolf from "../assets/img/home/werewolf.png";

import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";
import { FaStar, FaPlay, FaPlus } from "react-icons/fa";

import "../../src/assets/img/home/styles/output.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <nav className="p-3 w-full bg-merah-hati sticky top-0 z-50 bg-opacity-100">
        <div className="flex flex-row justify-between items-center">
          <div></div>

          <div>
            <ul className="flex flex-row space-x-4">
              <li>
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center p-0.5  text-center text-sm text-white rounded-full group bg-gradient-to-r from-merah-hati to-merah-cerah"
                >
                  <span className="rounded-full relative w-24  transition-all py-1 bg-white dark:bg-merah-hati group-hover:bg-opacity-0">
                    Home
                  </span>
                </a>
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
                  to="/favoritFilm"
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

      <section className=" bg-merah-hati relative w-full h-screen justify-center items-center overflow-hidden">
        <img src={banner} className="absolute object-cover h-screen w-full" />

        <div className="relative z-1 w-1/2 py-12 px-12">
          <img src={MarvelLogo} className="py-8 justify-center" />
          <img src={MovieTitle} />

          {/* rating */}
          <div className="flex items-center pt-3">
            <FaStar size={24} color="#ffc107" />
            <FaStar size={24} color="#ffc107" />
            <FaStar size={24} color="#ffc107" />
            <FaStar size={24} color="#e4e5e9" />
            <FaStar size={24} color="#e4e5e9" />
          </div>

          <h4 className="text-white font-sm font-200 flex-row pt-4 gap-4">
            <span className="pr-4"> Drama </span> |
            <span className="px-4"> Action </span> |
            <span className="px-4"> Sci-Fi</span>
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
              Natasha Romanoff, aka Black Widow, confronts the darker parts of
              her ledger when a dangerous conspiracy with ties to her past
              arises. Pursued by a force that will stop at nothing to bring her
              down, Natasha must deal with her history as a spy, and the broken
              relationships left in her wake long before she became an Avenger.
            </p>
          </div>
        </div>
      </section>

      {/* rekomendasi */}

      <section class="bg-merah-hati mt-1 py-4 h-max flex ">
        <div className="flex flex-row max-h-fit p-10 ">
          <div class="mr-5 w-30 h-full transform transition-transform hover:scale-110 mr-4 ml-4">
            <Link to="/detailFilm">
              <img
                src={Avatar}
                className="w-full h-29 object-cover"
                alt="Avatar"
              />
            </Link>
            <h4 class="text-white text-center pt-4 w-28"> Avatar </h4>
          </div>

          <div class="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4">
            <img src={TopGun} className="w-full h-39" alt="Top Gun" />
            <h4 class="text-white text-center pt-4  w-28 h-10">
              {" "}
              Top Gun : Maverick{" "}
            </h4>
          </div>

          <div class="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4">
            <img src={Avegare} className="w-full h-39" alt="Avengers" />
            <h4 class="text-white text-center pt-4  w-28 h-10">
              {" "}
              AVENGERS INFINITY WAR{" "}
            </h4>
          </div>

          <div class="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4">
            <img src={Spidermen} className="w-full h-39" alt="spiderman" />
            <h4 class="text-white text-center pt-4  w-28 h-10">
              SPIDER-MAN NO WAY HOME{" "}
            </h4>
          </div>

          <div class="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4">
            <img src={Warewolf} className="w-full h-39" alt="warewolf" />
            <h4 class="text-white text-center pt-4  w-28 h-10">
              WEREWOLF BY NIGHT{" "}
            </h4>
          </div>
          <div class="mr-5 w-30 h-full transform transition-transform hover:scale-110 mr-4 ml-4">
            <img
              src={Avatar}
              className="w-full h-29 object-cover"
              alt="Avatar"
            />
            <h4 class="text-white text-center pt-4 w-28"> Avatar </h4>
          </div>

          <div class="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4">
            <img src={TopGun} className="w-full h-39" alt="Top Gun" />
            <h4 class="text-white text-center pt-4  w-28 h-10">
              {" "}
              Top Gun : Maverick{" "}
            </h4>
          </div>

          <div class="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4">
            <img src={Avegare} className="w-full h-39" alt="Avengers" />
            <h4 class="text-white text-center pt-4  w-28 h-10">
              {" "}
              AVENGERS INFINITY WAR{" "}
            </h4>
          </div>
        </div>
      </section>

      {/* Navbar 2 or divider */}

      <MainContent />

      <Footer />
    </>
  );
}

export default Home;
