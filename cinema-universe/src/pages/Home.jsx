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
import lalaLand from "../assets/img/home/images/lalaland.jpeg";
import joker from "../assets/img/home/images/joker.png";
import insteltelar from "../assets/img/home/images/insteltelar.jpeg";
import playYellow from "../assets/img/home/icon/playTrailer.svg";
import menu from "../assets/img/home/icon/menu.png";
import filterIcon from "../assets/img/home/icon/filter-icon.png";
import ArrowDown from "../assets/img/home/icon/chevron-right-black.svg";
import chevronRight from "../assets/img/home/icon/chevron-right.svg";
import star from "../assets/img/home/icon/star.svg";
import { FaStar, FaPlay, FaPlus } from "react-icons/fa";

import "../../src/assets/img/home/styles/mediaQuery.css";
import "../../src/assets/img/home/styles/output.css";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function Home() {
  const [movies, setMovies] = useState([]);
  const [escapeplans, setEscapePlans] = useState([]);
  const [spongebobs, setSpongebobs] = useState([]);
  const [scarymovies, setScaryMovies] = useState([]);
  const [carss, setCarss] = useState([]);
  const [toystorys, setToyStorys] = useState([]);
  const [findingnemos, setFindingNemos] = useState([]);
  const [theroundups, setTheRoundups] = useState([]);
  const [kungfupandas, setKungfuPandas] = useState([]);
  const [trainstobusans, setTrainToBusans] = useState([]);
  const [tars, setTars] = useState([]);
  const [thebig4s, setTheBig4s] = useState([]);
  const [blackhawkdowns, setBlackHawkDowns] = useState([]);

  const [user, setUser] = useState(null);

  // untuk mendengarkan perubahan status otentikasi
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // fungsi untuk menangani logout
  const handleLogout = () => {
    auth.signOut();
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const responseMovies = await fetch(
          "http://www.omdbapi.com/?apikey=53fc65b0&s=movie"
        );
        const dataMovies = await responseMovies.json();
        setMovies(dataMovies.Search || []);

        const responseEscapePlan = await fetch(
          "https://www.omdbapi.com/?apikey=53fc65b0&s=Escape%20Plan"
        );
        const dataEscapePlan = await responseEscapePlan.json();
        setEscapePlans(dataEscapePlan.Search || []);

        const responseSpongebob = await fetch(
          "https://www.omdbapi.com/?apikey=53fc65b0&s=spongebob"
        );
        const dataSpongebob = await responseSpongebob.json();
        setSpongebobs(dataSpongebob.Search || []);

        const responseScaryMovie = await fetch(
          "https://www.omdbapi.com/?apikey=53fc65b0&s=scary%20movie"
        );
        const dataScaryMovie = await responseScaryMovie.json();
        setScaryMovies(dataScaryMovie.Search || []);

        const responseCars = await fetch(
          "https://www.omdbapi.com/?apikey=53fc65b0&s=cars"
        );
        const dataCars = await responseCars.json();
        setCarss(dataCars.Search || []);

        const responseToyStory = await fetch(
          "https://www.omdbapi.com/?apikey=53fc65b0&s=toy%20story"
        );
        const dataToyStory = await responseToyStory.json();
        setToyStorys(dataToyStory.Search || []);

        const responseFindingNemo = await fetch(
          "https://www.omdbapi.com/?apikey=53fc65b0&s=finding%20nemo"
        );
        const dataFindingNemo = await responseFindingNemo.json();
        setFindingNemos(dataFindingNemo.Search || []);

        const responseTheRoundup = await fetch(
          "https://www.omdbapi.com/?apikey=53fc65b0&s=the%20roundup"
        );
        const dataTheRoundup = await responseTheRoundup.json();
        setTheRoundups(dataTheRoundup.Search || []);

        const responseKungfuPanda = await fetch(
          "https://www.omdbapi.com/?apikey=53fc65b0&s=kung%20fu%20panda"
        );
        const dataKungfuPanda = await responseKungfuPanda.json();
        setKungfuPandas(dataKungfuPanda.Search || []);

        const responseTrainToBusan = await fetch(
          "https://www.omdbapi.com/?apikey=53fc65b0&s=train%20to%20busan"
        );
        const dataTrainToBusan = await responseTrainToBusan.json();
        setTrainToBusans(dataTrainToBusan.Search || []);

        const responseTar = await fetch(
          "https://www.omdbapi.com/?apikey=53fc65b0&s=tar"
        );
        const dataTar = await responseTar.json();
        setTars(dataTar.Search || []);

        const responseTheBig4 = await fetch(
          "https://www.omdbapi.com/?apikey=53fc65b0&s=the%20big%204"
        );
        const dataTheBig4 = await responseTheBig4.json();
        setTheBig4s(dataTheBig4.Search || []);

        const responseBlackHawkDown = await fetch(
          "https://omdbapi.com/?apikey=53fc65b0&s=black%20hawk%20down"
        );
        const dataBlackHawkDown = await responseBlackHawkDown.json();
        setBlackHawkDowns(dataBlackHawkDown.Search || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
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
              <li>
                <Link to="/">
                  <img src={CUHomeLogo} alt="logo" />
                </Link>
              </li>
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
              {user ? (
                <>
                  <li>
                    <span className="text-white">
                      {user.displayName || user.email}
                    </span>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="relative inline-flex items-center justify-center p-0.5 text-center text-sm text-white rounded-full group bg-gradient-to-r from-merah-hati to-merah-cerah"
                    >
                      <span className="rounded-full relative w-24 transition-all py-1 bg-white dark:bg-merah-hati group-hover:bg-opacity-0">
                        Logout
                      </span>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/SignIn"
                      className="relative inline-flex items-center justify-center p-0.5 text-center text-sm text-white rounded-full group bg-gradient-to-r from-merah-hati to-merah-cerah"
                    >
                      <span className="rounded-full relative w-24 transition-all py-1 bg-white dark:bg-merah-hati group-hover:bg-opacity-0">
                        Login
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/SignUp"
                      className="relative inline-flex items-center justify-center p-0.5 text-center text-sm text-white rounded-full group bg-gradient-to-r from-merah-hati to-merah-cerah"
                    >
                      <span className="rounded-full relative w-24 transition-all py-1 bg-white dark:bg-merah-hati group-hover:bg-opacity-0">
                        Register
                      </span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <section className=" bg-merah-hati relative w-full h-screen justify-center items-center overflow-hidden">
        <img src={banner} className="absolute object-cover h-screen w-full" />

        <div className="relative z-1 w-1/2 py-12 px-12">
          <img src={MarvelLogo} className="py-8 justify-center" />
          <img src={MovieTitle} />

          <div className="flex items-center pt-3">
            <FaStar size={24} color="#ffc107" />
            <FaStar size={24} color="#ffc107" />
            <FaStar size={24} color="#ffc107" />
            <FaStar size={24} color="#ffc107" />
            <FaStar size={24} color="#e4e5e9" />
          </div>

          <h4 className="text-white font-sm font-200 flex-row pt-4 gap-4">
            <span className="pr-4"> Drama </span> |
            <span className="px-4"> Action </span> |
            <span className="px-4"> Sci-Fi</span>
          </h4>

          <div className="flex pt-4 gap-4">
            <button className="bg-merah-cerah hover:bg-zinc-700 text-white font-bold p-4 rounded-full focus:outline-none focus:shadow-outline">
              <FaPlay size={24} />
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
      <section className="bg-merah-hati mt-1 py-20 h-max flex">
        <div className="flex flex-row max-h-fit p-100 mb-20">
          <div className="flex flex-row max-h-fit p-100 mb-20">
            {movies.slice(0, 1).map((movie) => (
              <div
                key={movie.imdbID}
                className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
              >
                <Link to={"/detailLego"}>
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
        </div>
        <div className="flex flex-row max-h-fit p-100 mb-20">
          <div className="flex flex-row max-h-fit p-100 mb-20">
            {movies.slice(2, 3).map((movie) => (
              <div
                key={movie.imdbID}
                className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
              >
                <Link to={"/detailelCamino"}>
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
        </div>
        <div className="flex flex-row max-h-fit p-100">
          <div className="flex flex-row max-h-fit p-100">
            {escapeplans.slice(0, 1).map((escapeplan) => (
              <div
                key={escapeplan.imdbID}
                className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
              >
                <Link to={"/detailEscapePlan"}>
                  <img
                    src={escapeplan.Poster}
                    className="w-full h-39"
                    alt={escapeplan.Title}
                  />
                </Link>
                <h4 className="text-white text-center pt-4 w-28">
                  {escapeplan.Title}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row max-h-fit p-100">
          {movies.slice(9, 10).map((movie) => (
            <div
              key={movie.imdbID}
              className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
            >
              <Link to={"/detailScaryMovie4"}>
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
              <Link to={"/detailMarioBros"}>
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
          <div className="flex flex-row max-h-fit p-100">
            {spongebobs.slice(2, 3).map((spongebob) => (
              <div
                key={spongebob.imdbID}
                className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
              >
                <Link to={"/detailSpongebob"}>
                  <img
                    src={spongebob.Poster}
                    className="w-full h-39"
                    alt={spongebob.Title}
                  />
                </Link>
                <h4 className="text-white text-center pt-4 w-28">
                  <h4 className="text-white text-center pt-4 w-28">
                    {spongebob.Title}
                  </h4>
                </h4>
              </div>
            ))}
          </div>
          );{" "}
        </div>
        <div className="flex flex-row max-h-fit p-100">
          <div className="flex flex-row max-h-fit p-100">
            {scarymovies.slice(4, 5).map((scarymovie) => (
              <div
                key={scarymovie.imdbID}
                className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
              >
                <Link to={"/detailScaryMovie5"}>
                  <img
                    src={scarymovie.Poster}
                    className="w-full h-39"
                    alt={scarymovie.Title}
                  />
                </Link>
                <h4 className="text-white text-center pt-4 w-28">
                  <h4 className="text-white text-center pt-4 w-28">
                    {scarymovie.Title}
                  </h4>
                </h4>
              </div>
            ))}
          </div>{" "}
        </div>
        <div className="flex flex-row max-h-fit p-100">
          {movies.slice(7, 8).map((movie) => (
            <div
              key={movie.imdbID}
              className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
            >
              <Link to={"/detailTheLegoBatman"}>
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
          <div className="flex flex-row max-h-fit p-100">
            {carss.slice(0, 1).map((cars) => (
              <div
                key={cars.imdbID}
                className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
              >
                <Link to={"/detailCars"}>
                  <img
                    src={cars.Poster}
                    className="w-full h-39"
                    alt={cars.Title}
                  />
                </Link>
                <h4 className="text-white text-center pt-4 w-28">
                  <h4 className="text-white text-center pt-4 w-28">
                    {cars.Title}
                  </h4>
                </h4>
              </div>
            ))}
          </div>
          );{" "}
        </div>
        <div className="flex flex-row max-h-fit p-100">
          {escapeplans.slice(1, 2).map((escapeplan) => (
            <div
              key={escapeplan.imdbID}
              className="mr-5 w-30 h-40 transform transition-transform hover:scale-110 mr-4 ml-4"
            >
              <Link to={"/detailEscapePlan2"}>
                <img
                  src={escapeplan.Poster}
                  className="w-full h-39"
                  alt={escapeplan.Title}
                />
              </Link>
              <h4 className="text-white text-center pt-4 w-28">
                {escapeplan.Title}
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
            </div>
            {/* Film */}
            <div className="flex flex-wrap mt-10 gap-y-7 justify-center gap-x-16 items-center ">
              <div className="flex flex-row">
                {escapeplans.slice(2, 3).map((escapeplan) => (
                  <div
                    key={escapeplan.imdbID}
                    className="card-movie-content me-4"
                    style={{ width: "fit-content" }}
                  >
                    <Link to="/detailEscapePlan3">
                      <img
                        src={escapeplan.Poster}
                        alt={escapeplan.Title}
                        className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                      />
                      <p className="mt-3 font-bold uppercase tracking-widest ">
                        ESCAPE PLAN 3
                      </p>
                    </Link>
                    <div className="rating flex gap-x-1 items-center">
                      <img src={star} alt="" />
                      <p className="bold">7.5</p>
                      <p>|</p>
                      <p className="capitalize text-gray-500 text-xs">
                        Drama - Action
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row">
                {carss.slice(1, 2).map((cars) => (
                  <div
                    key={cars.imdbID}
                    className="card-movie-content me-4"
                    style={{ width: "fit-content" }}
                  >
                    <Link to="/detailCars2">
                      <img
                        src={cars.Poster}
                        alt={cars.Title}
                        className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                      />
                      <p className="mt-3 font-bold uppercase tracking-widest ">
                        {cars.Title}
                      </p>
                    </Link>
                    <div className="rating flex gap-x-1 items-center">
                      <img src={star} alt="" />
                      <p className="bold">8.0</p>
                      <p>|</p>
                      <p className="capitalize text-gray-500 text-xs">
                        Comedy, Animation
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row">
                {toystorys.slice(0, 1).map((toystory) => (
                  <div
                    key={toystory.imdbID}
                    className="card-movie-content me-4"
                    style={{ width: "fit-content" }}
                  >
                    <Link to="/detailToyStory">
                      <img
                        src={toystory.Poster}
                        alt={toystory.Title}
                        className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                      />
                      <p className="mt-3 font-bold uppercase tracking-widest ">
                        {toystory.Title}
                      </p>
                    </Link>
                    <div className="rating flex gap-x-1 items-center">
                      <img src={star} alt="" />
                      <p className="bold">8.5</p>
                      <p>|</p>
                      <p className="capitalize text-gray-500 text-xs">
                        Comedy, Animation
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row">
                {theroundups.slice(0, 1).map((theroundup) => (
                  <div
                    key={theroundup.imdbID}
                    className="card-movie-content me-4"
                    style={{ width: "fit-content" }}
                  >
                    <Link to="/detailTheRoundUp">
                      <img
                        src={theroundup.Poster}
                        alt={theroundup.Title}
                        className="w-32 h-64 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                      />
                      <p className="mt-3 font-bold uppercase tracking-widest ">
                        {theroundup.Title}
                      </p>
                    </Link>
                    <div className="rating flex gap-x-1 items-center">
                      <img src={star} alt="" />
                      <p className="bold">8.2</p>
                      <p>|</p>
                      <p className="capitalize text-gray-500 text-xs">
                        Action - Gangster - Thriller
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row">
                {findingnemos.slice(0, 1).map((findingnemo) => (
                  <div
                    key={findingnemo.imdbID}
                    className="card-movie-content me-4"
                    style={{ width: "fit-content" }}
                  >
                    <Link to="/detailFindingNemo">
                      <img
                        src={findingnemo.Poster}
                        alt={findingnemo.Title}
                        className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                      />
                      <p className="mt-3 font-bold uppercase tracking-widest ">
                        {findingnemo.Title}
                      </p>
                    </Link>
                    <div className="rating flex gap-x-1 items-center">
                      <img src={star} alt="" />
                      <p className="bold">7.8</p>
                      <p>|</p>
                      <p className="capitalize text-gray-500 text-xs">
                        Comedy, Animation
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row">
                {kungfupandas.slice(0, 1).map((kungfupanda) => (
                  <div
                    key={kungfupanda.imdbID}
                    className="card-movie-content"
                    style={{ width: "fit-content" }}
                  >
                    <Link to="/detailKungfuPanda">
                      <img
                        src={kungfupanda.Poster}
                        alt={kungfupanda.Title}
                        className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                      />
                      <p className="font-bold uppercase tracking-widest mt-3">
                        {kungfupanda.Title}
                      </p>
                    </Link>
                    <div className="rating flex gap-x-1 items-center">
                      <img src={star} alt="" />
                      <p className="bold">7.7</p>
                      <p>|</p>
                      <p className="capitalize text-gray-500 text-xs">
                        Comedy, Animattion
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row">
                {trainstobusans.slice(0, 1).map((trainstobusan) => (
                  <div
                    key={trainstobusan.imdbID}
                    className="card-movie-content me-4"
                    style={{ width: "fit-content" }}
                  >
                    <Link to="/detailTrainToBusan">
                      <img
                        src={trainstobusan.Poster}
                        alt={trainstobusan.Title}
                        className="w-32 h-64 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                      />
                      <p className="mt-3 font-bold uppercase tracking-widest ">
                        {trainstobusan.Title}
                      </p>
                    </Link>
                    <div className="rating flex gap-x-1 items-center">
                      <img src={star} alt="" />
                      <p className="bold">8.0</p>
                      <p>|</p>
                      <p className="capitalize text-gray-500 text-xs">
                        Horror, Mystery
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row">
                {tars.slice(0, 1).map((tar) => (
                  <div
                    key={tar.imdbID}
                    className="card-movie-content me-4"
                    style={{ width: "fit-content" }}
                  >
                    <Link to="/detailTar">
                      <img
                        src={tar.Poster}
                        alt={tar.Title}
                        className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                      />
                      <p className="mt-3 font-bold uppercase tracking-widest ">
                        {tar.Title}
                      </p>
                    </Link>
                    <div className="rating flex gap-x-1 items-center">
                      <img src={star} alt="" />
                      <p className="bold">7.1</p>
                      <p>|</p>
                      <p className="capitalize text-gray-500 text-xs">
                        Drama - Narrative
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row">
                {thebig4s.slice(0, 1).map((thebig4) => (
                  <div
                    key={thebig4.imdbID}
                    className="card-movie-content me-4"
                    style={{ width: "fit-content" }}
                  >
                    <Link to="/detailTheBig4">
                      <img
                        src={thebig4.Poster}
                        alt={thebig4.Title}
                        className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                      />
                      <p className="mt-3 font-bold uppercase tracking-widest ">
                        {thebig4.Title}
                      </p>
                    </Link>
                    <div className="rating flex gap-x-1 items-center">
                      <img src={star} alt="" />
                      <p className="bold">7.7</p>
                      <p>|</p>
                      <p className="capitalize text-gray-500 text-xs">
                        Action - Comedy
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-row">
                {blackhawkdowns.slice(0, 1).map((blackhawkdown) => (
                  <div
                    key={blackhawkdown.imdbID}
                    className="card-movie-content me-4"
                    style={{ width: "fit-content" }}
                  >
                    <Link to="/detailBlackHawkDown">
                      <img
                        src={blackhawkdown.Poster}
                        alt={blackhawkdown.Title}
                        className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
                      />
                      <p className="mt-3 font-bold uppercase tracking-widest ">
                        {blackhawkdown.Title}
                      </p>
                    </Link>
                    <div className="rating flex gap-x-1 items-center">
                      <img src={star} alt="" />
                      <p className="bold">7.5</p>
                      <p>|</p>
                      <p className="capitalize text-gray-500 text-xs">
                        War - Horror
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="footer-container border-t-2 border-white flex justify-center items-center flex-col py-8 bg-merah-hati text-white">
          <p>
            <span className="me-1">
              Created By Kelompok 1 (Motionminds) © CINEMA UNIVERSE 2023-2024
            </span>
          </p>
          <div className="border-4 border-red-600 text-white  mt-3 px-2 font-bold text-2xl">
            CINEMA UNIVERSE
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
