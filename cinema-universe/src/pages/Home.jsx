/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CUHomeLogo from "../assets/img/home/CU-Home.png";
import MarvelLogo from "../assets/img/home/MARVEL LOGO 1.png";
import banner from "../assets/img/home/sjblackwidow 1 (1).png";
import MovieTitle from "../assets/img/home/Black_Widow 1.png";
import Avatar from "../assets/img/home/avatar.png";
import Avegare from "../assets/img/home/avengers.png";
import TopGun from "../assets/img/home/top gun maverick.png";
import Spidermen from "../assets/img/home/spider man.png";
import lalaLand from "../assets/img/home/images/lalaland.jpeg";
import joker from "../assets/img/home/images/joker.png";
import insteltelar from "../assets/img/home/images/insteltelar.jpeg";
import playYellow from "../assets/img/home/icon/playTrailer.svg";
import menu from "../assets/img/home/icon/menu.png";
import filterIcon from "../assets/img/home/icon/filter-icon.png";
import ArrowDown from "../assets/img/home/icon/chevron-right-black.svg";
import chevronRight from "../assets/img/home/icon/chevron-right.svg";
import wakandaImg from "../assets/img/home/images/wakanda-forever.png";
import theMenu from "../assets/img/home/images/the menu 1.png";
import wednesday from "../assets/img/home/images/wednesday.png";
import blackAdam from "../assets/img/home/images/black adam 1.png";
import violentNight from "../assets/img/home/images/violent night 1.png";
import sheHulk from "../assets/img/home/images/she hulk 1.png";
import tar from "../assets/img/home/images/tar 1.png";
import sprited from "../assets/img/home/images/spirited 1.png";
import womanKing from "../assets/img/home/images/the woman king 1.png";
import terrifier from "../assets/img/home/images/terrifier 1.png";
import werewolf from "../assets/img/home/werewolf.png";
import DontWoryDarling from "../assets/img/home/dont worry darling.png";
import onceuponatimeinhollywood from "../assets/img/home/once upon a time in hollywood.png";
import gotgholidayspecial from "../assets/img/home/gotg holiday special.png";
import BlackBird from "../assets/img/home/black bird.png";
import TheBoys from "../assets/img/home/the boys.png";
import TGreat from "../assets/img/home/the greatest showman.png";
import BladeRunner from "../assets/img/home/blade runner.png";
import star from "../assets/img/home/icon/star.svg";
import { FaStar, FaPlay, FaPlus } from "react-icons/fa";

import "../../src/assets/img/home/styles/mediaQuery.css";
import "../../src/assets/img/home/styles/output.css";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "http://www.omdbapi.com/?apikey=53fc65b0&s=movie"
        );
        const data = await response.json();
        setMovies(data.Search || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    "ACTION",
    "ACTION",
    "ADVENTURE",
    "ANIMATION",
    "BIOGRAPHY",
    "COMEDY",
    "CRIME",
    "DOCUMENTARY",
    "DRAMA",
    "FANTASY",
    "FAMILY",
    "HORROR",
    "HISTORY",
    "MUSIC",
    "NEWS",
    "POLITICS",
    "ROMANCE",
    "SERIES",
    "SCI-FI",
    "TALK",
    "TV MOVIE",
    "THRILLER",
    "WESTERN",
    "WAR",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const chunkedOptions = options.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 5);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  const columns = chunkedOptions.map((chunk, chunkIndex) => (
    <div key={chunkIndex} className="options-column list-none">
      {chunk.map((option, index) => (
        <li
          className="px-2 py-2 cursor-pointer text-white hover:bg-gray-200"
          key={index}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </li>
      ))}
    </div>
  ));

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
              <li>
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
              </li>
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

      {/* <section class="bg-merah-hati mt-1 py-4 h-max flex ">
        <div className="flex flex-row max-h-fit p-10 ">
          <div class="mr-5 w-30 h-full transform transition-transform hover:scale-110 mr-4 ml-4">
            <Link to="/detailFilm">
              <img
                src={Avatar}
                className="w-full h-29 object-cover"
                alt="Avatar"
              />
              <h4 class="text-white text-center pt-4 w-28"> Avatar </h4>
            </Link>
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
            <img
              src={DontWoryDarling}
              className="w-full h-39"
              alt="Don't Worry Darling"
            />
            <h4 class="text-white text-center pt-4  w-28 h-10 text-lg">
              Don't Worry Darling{" "}
            </h4>
          </div>

          <div class="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4">
            <img src={werewolf} className="w-full h-39" alt="warewolf" />
            <h4 class="text-white text-center pt-4  w-28 h-10">
              WEREWOLF BY NIGHT{" "}
            </h4>
          </div>

          <div class="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4">
            <img
              src={onceuponatimeinhollywood}
              className="w-full h-39"
              alt="once upon a time in hollywood"
            />
            <h4 class="text-white text-center pt-4  w-28 h-10 text-lg">
              {" "}
              once upon a time in hollywood{" "}
            </h4>
          </div>

          <div class="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4">
            <img
              src={gotgholidayspecial}
              className="w-full h-39"
              alt="GUARDIANS OF THE GALAXY"
            />
            <h4 class="text-white text-center pt-4  w-28 h-10 text-lg">
              {" "}
              GUARDIANS OF THE GALAXY{" "}
            </h4>
          </div>

          <div class="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4">
            <img src={BlackBird} className="w-full h-39" alt="BLACK BIRD" />
            <h4 class="text-white text-center pt-4  w-28 h-10 text-lg">
              {" "}
              BLACK BIRD{" "}
            </h4>
          </div>
          <div class="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4">
            <img src={TheBoys} className="w-full h-39" alt="HE BOYS" />
            <h4 class="text-white text-center pt-4  w-28 h-10 text-lg">
              {" "}
              THE BOYS{" "}
            </h4>
          </div>

          <div class="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4">
            <img
              src={TGreat}
              className="w-full h-39"
              alt="THE GREATEST SHOWMAN "
            />
            <h4 class="text-white text-center pt-4  w-28 h-10 text-lg">
              {" "}
              THE GREATEST SHOWMAN{" "}
            </h4>
          </div>

          <div class="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4">
            <img
              src={BladeRunner}
              className="w-full h-39"
              alt="BLADE RUNNER 2049"
            />
            <h4 class="text-white text-center pt-4  w-28 h-10 text-lg">
              {" "}
              BLADE RUNNER 2049{" "}
            </h4>
          </div>
        </div>
      </section> */}

      <section className="bg-merah-hati mt-1 py-4 h-max flex">
        <div className="flex flex-row max-h-fit p-100">
          {movies.slice(0, 1).map((movie) => (
            <div
              key={movie.imdbID}
              className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
            >
              <Link to={"/detailFilm"}>
                <img
                  src={movie.Poster}
                  className="w-full h-39"
                  alt={movie.Title}
                />
              </Link>
              <h4 className="text-white text-center pt-4 w-28">
                {movie.Title}
              </h4>
            </div>
          ))}
        </div>
        <div className="flex flex-row max-h-fit p-100">
          {movies.slice(1, 2).map((movie) => (
            <div
              key={movie.imdbID}
              className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
            >
              <Link to={"/detailFilm"}>
                <img
                  src={movie.Poster}
                  className="w-full h-39"
                  alt={movie.Title}
                />
              </Link>
              <h4 className="text-white text-center pt-4 w-28">
                {movie.Title}
              </h4>
            </div>
          ))}
        </div>
        <div className="flex flex-row max-h-fit p-100">
          {movies.slice(2, 3).map((movie) => (
            <div
              key={movie.imdbID}
              className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
            >
              <Link to={"/detailFilm"}>
                <img
                  src={movie.Poster}
                  className="w-full h-39"
                  alt={movie.Title}
                />
              </Link>
              <h4 className="text-white text-center pt-4 w-28">
                {movie.Title}
              </h4>
            </div>
          ))}
        </div>
        <div className="flex flex-row max-h-fit p-100">
          {movies.slice(3, 4).map((movie) => (
            <div
              key={movie.imdbID}
              className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
            >
              <Link to={"/detailFilm"}>
                <img
                  src={movie.Poster}
                  className="w-full h-39"
                  alt={movie.Title}
                />
              </Link>
              <h4 className="text-white text-center pt-4 w-28">
                {movie.Title}
              </h4>
            </div>
          ))}
        </div>
        <div className="flex flex-row max-h-fit p-100">
          {movies.slice(4, 5).map((movie) => (
            <div
              key={movie.imdbID}
              className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
            >
              <Link to={"/detailFilm"}>
                <img
                  src={movie.Poster}
                  className="w-full h-39"
                  alt={movie.Title}
                />
              </Link>
              <h4 className="text-white text-center pt-4 w-28">
                {movie.Title}
              </h4>
            </div>
          ))}
        </div>
        <div className="flex flex-row max-h-fit p-100">
          {movies.slice(5, 6).map((movie) => (
            <div
              key={movie.imdbID}
              className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
            >
              <Link to={"/detailFilm"}>
                <img
                  src={movie.Poster}
                  className="w-full h-39"
                  alt={movie.Title}
                />
              </Link>
              <h4 className="text-white text-center pt-4 w-28">
                {movie.Title}
              </h4>
            </div>
          ))}
        </div>
        <div className="flex flex-row max-h-fit p-100">
          {movies.slice(6, 7).map((movie) => (
            <div
              key={movie.imdbID}
              className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
            >
              <Link to={"/detailFilm"}>
                <img
                  src={movie.Poster}
                  className="w-full h-39"
                  alt={movie.Title}
                />
              </Link>
              <h4 className="text-white text-center pt-4 w-28">
                {movie.Title}
              </h4>
            </div>
          ))}
        </div>
        <div className="flex flex-row max-h-fit p-100">
          {movies.slice(7, 8).map((movie) => (
            <div
              key={movie.imdbID}
              className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
            >
              <Link to={"/detailFilm"}>
                <img
                  src={movie.Poster}
                  className="w-full h-39"
                  alt={movie.Title}
                />
              </Link>
              <h4 className="text-white text-center pt-4 w-28">
                {movie.Title}
              </h4>
            </div>
          ))}
        </div>
        <div className="flex flex-row max-h-fit p-100">
          {movies.slice(8, 9).map((movie) => (
            <div
              key={movie.imdbID}
              className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
            >
              <Link to={"/detailFilm"}>
                <img
                  src={movie.Poster}
                  className="w-full h-39"
                  alt={movie.Title}
                />
              </Link>
              <h4 className="text-white text-center pt-4 w-28">
                {movie.Title}
              </h4>
            </div>
          ))}
        </div>
        <div className="flex flex-row max-h-fit p-100">
          {movies.slice(9, 10).map((movie) => (
            <div
              key={movie.imdbID}
              className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
            >
              <Link to={"/detailFilm"}>
                <img
                  src={movie.Poster}
                  className="w-full h-39"
                  alt={movie.Title}
                />
              </Link>
              <h4 className="text-white text-center pt-4 w-28">
                {movie.Title}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* caraousel */}

      <div className="overflow-hidden main-content-container text-white bg-merah-hati">
        <div className="carousel-container mt-14 w-full overflow-hidden relative carousel-container">
          <Slider {...settings}>
            <div className="carousel-item relative">
              <img
                src={lalaLand}
                alt="La La Land"
                className="w-full object-cover px-2"
              />
              <div className="watch-trailer-action flex gap-3 items-center absolute top-80 left-20">
                <img
                  src={playYellow}
                  alt="Play Trailer"
                  className="play p-0 w-10"
                />
                <span className="text-lg">WATCH TRAILER</span>
              </div>
            </div>
            <div className="carousel-item relative">
              <img
                src={joker}
                alt="Interstellar"
                className="w-full object-cover px-2"
              />
            </div>
            <div className="carousel-item relative">
              <img
                src={insteltelar}
                alt="Joker"
                className="w-full object-cover px-2"
              />
            </div>
          </Slider>
        </div>
      </div>

      {/* FILTER */}
      <section className="filter bg-merah-hati">
        <div className="bg-merah-hati  mx-auto px-5 md:px-10 lg:px-20 py-8">
          <div className="flex items-center justify-between">
            <div className="button-filter-container relative inline-block">
              <button
                className="btn-filter flex gap-4 text-white text-left bg-gray-900 px-6 py-2 w-36 text-base rounded-md border border-white uppercase"
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedOption || "Filter"}{" "}
                <img src={chevronRight} alt="Chevron" />
              </button>
              {isOpen && (
                <ul className="dropdown-options absolute top-full left-0 z-10 bg-gray-900 dark:bg-gray-1000 rounded-3xl shadow-md py-10 px-10 mt-4  w-filterDropdown">
                  <div className="columns-container flex flex-wrap gap-10 ">
                    {columns.map((column, index) => (
                      <div key={index} className="column-wrapper flex flex-col">
                        {column}
                      </div>
                    ))}
                  </div>
                  <div className=" flex justify-center gap-4 mt-4">
                    <div className="button flex bg-slate-300 text-black px-12 py-2 rounded-3xl">
                      Country <img src={ArrowDown} alt="" srcset="" />
                    </div>
                    <div className="button flex bg-slate-300 text-black px-12 py-2 rounded-3xl">
                      Year <img src={ArrowDown} alt="" srcset="" />
                    </div>
                  </div>
                </ul>
              )}
            </div>
            <div className="border-t-2 border-gray-300 flex-1 ml-4 md:ml-8"></div>
            <img
              src={menu}
              alt="Menu"
              className="w-8 h-8 md:w-10 md:h-10 me-3 ms-3"
            />
            <img
              src={filterIcon}
              alt="Filter"
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </div>
        </div>
      </section>

      {/* Populer movie section */}
      <section className="bg-merah-hati h-[800px] text-white">
        <div className="uppercase flex justify-center">
          <div className="container ">
            <div className="flex justify-between">
              <p className="underline">populer right now</p>
              <p className="underline">see all</p>
            </div>
            <div className="flex flex-wrap mt-10 gap-y-7 justify-center gap-x-16 items-center ">
              <div className="flex flex-row">
                <div
                  className="card-movie-content me-4"
                  style={{ width: "fit-content" }}
                >
                  <img
                    src={wakandaImg}
                    alt="wakanda"
                    className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                  />
                  <p className="mt-3 font-bold uppercase tracking-widest ">
                    Wakanda Forever
                  </p>
                  <div className="rating flex gap-x-1 items-center">
                    <img src={star} alt="" />
                    <p className="bold">7.3</p>
                    <p>|</p>
                    <p className="capitalize text-gray-500 text-xs">
                      Action - Movie
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div
                  className="card-movie-content me-4"
                  style={{ width: "fit-content" }}
                >
                  <img
                    src={theMenu}
                    alt="the Menu"
                    className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                  />
                  <p className="mt-3 font-bold uppercase tracking-widest ">
                    The Menu
                  </p>
                  <div className="rating flex gap-x-1 items-center">
                    <img src={star} alt="" />
                    <p className="bold">7.5</p>
                    <p>|</p>
                    <p className="capitalize text-gray-500 text-xs">
                      Horror, Thriller - Movie
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div
                  className="card-movie-content me-4"
                  style={{ width: "fit-content" }}
                >
                  <img
                    src={wednesday}
                    alt="Wednesday"
                    className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                  />
                  <p className="mt-3 font-bold uppercase tracking-widest ">
                    Wednesday{" "}
                    <span className="font-light text-sm">(Series)</span>
                  </p>
                  <div className="rating flex gap-x-1 items-center">
                    <img src={star} alt="" />
                    <p className="bold">8.5</p>
                    <p>|</p>
                    <p className="capitalize text-gray-500 text-xs">
                      Comedy, Mystery - Movie
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div
                  className="card-movie-content me-4"
                  style={{ width: "fit-content" }}
                >
                  <img
                    src={blackAdam}
                    alt="black adam"
                    className="w-32 h-64 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                  />
                  <p className="mt-3 font-bold uppercase tracking-widest ">
                    The Menu
                  </p>
                  <div className="rating flex gap-x-1 items-center">
                    <img src={star} alt="" />
                    <p className="bold">4.6</p>
                    <p>|</p>
                    <p className="capitalize text-gray-500 text-xs">
                      Horror, Thriller - Movie
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div
                  className="card-movie-content me-4"
                  style={{ width: "fit-content" }}
                >
                  <img
                    src={violentNight}
                    alt="violent Night"
                    className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                  />
                  <p className="mt-3 font-bold uppercase tracking-widest ">
                    Violent Night
                  </p>
                  <div className="rating flex gap-x-1 items-center">
                    <img src={star} alt="" />
                    <p className="bold">6.2</p>
                    <p>|</p>
                    <p className="capitalize text-gray-500 text-xs">
                      Comedy, Crime - Movie
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row  h-[308px] w-[200px]">
                <div
                  className="card-movie-content"
                  style={{ width: "fit-content" }}
                >
                  <img
                    src={sheHulk}
                    alt="She Hulk"
                    className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                  />
                  <p className="font-bold uppercase tracking-widest mt-3">
                    She-Hulk: <br /> Attorney at law
                  </p>
                  <div className="rating flex gap-x-1 items-center">
                    <img src={star} alt="" />
                    <p className="bold">5.2</p>
                    <p>|</p>
                    <p className="capitalize text-gray-500 text-xs">
                      Comedy, Adventure - movie
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div
                  className="card-movie-content me-4"
                  style={{ width: "fit-content" }}
                >
                  <img
                    src={tar}
                    alt="tar"
                    className="w-32 h-64 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                  />
                  <p className="mt-3 font-bold uppercase tracking-widest ">
                    TAR
                  </p>
                  <div className="rating flex gap-x-1 items-center">
                    <img src={star} alt="" />
                    <p className="bold">4.6</p>
                    <p>|</p>
                    <p className="capitalize text-gray-500 text-xs">
                      Horror, Thriller - Movie
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div
                  className="card-movie-content me-4"
                  style={{ width: "fit-content" }}
                >
                  <img
                    src={sprited}
                    alt="sprited"
                    className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                  />
                  <p className="mt-3 font-bold uppercase tracking-widest ">
                    sprited
                  </p>
                  <div className="rating flex gap-x-1 items-center">
                    <img src={star} alt="" />
                    <p className="bold">4.6</p>
                    <p>|</p>
                    <p className="capitalize text-gray-500 text-xs">
                      Comedy, Family - movie
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div
                  className="card-movie-content me-4"
                  style={{ width: "fit-content" }}
                >
                  <img
                    src={womanKing}
                    alt="the woman king"
                    className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                  />
                  <p className="mt-3 font-bold uppercase tracking-widest ">
                    The Woman King
                  </p>
                  <div className="rating flex gap-x-1 items-center">
                    <img src={star} alt="" />
                    <p className="bold">4.6</p>
                    <p>|</p>
                    <p className="capitalize text-gray-500 text-xs">
                      Horror, Thriller - Movie
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div
                  className="card-movie-content me-4"
                  style={{ width: "fit-content" }}
                >
                  <img
                    src={terrifier}
                    alt="wakanda"
                    className="w-32 h-64 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                  />
                  <p className="mt-3 font-bold uppercase tracking-widest ">
                    Terrifier 2
                  </p>
                  <div className="rating flex gap-x-2 items-center">
                    <img src={star} alt="" />
                    <p className="bold">7.3</p>
                    <p>|</p>
                    <p className="capitalize text-gray-500 text-xs">
                      Action - Movie
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="footer-container border-t-2 border-white flex justify-center items-center flex-col py-8 bg-merah-hati text-white">
          <p>
            <span className="me-1">CINEMA UNIVERSE © 2023-2024 -</span>
            <span className="font-extralight">
              <a href="#">Blog</a>
              <span className="font-normal mx-1">-</span>
              <a href="#">Contact</a>
              <span className="font-normal mx-1">-</span>
              <a href="#">Browse Movies</a>
              <span className="font-normal mx-1">-</span>
              <a href="#">Request</a>
              <span className="font-normal mx-1">-</span>
              <a href="#">Login</a>
              <span className="font-normal mx-1">-</span>
              <a href="#">Language</a>
            </span>
          </p>
          <div className="border-4 border-red-600 text-white  mt-5 px-3 font-bold text-2xl">
            CU
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
