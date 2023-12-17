import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import lalaLand from "../../assets/images/lalaland.jpeg";
import joker from "../../assets/images/joker.png";
import insteltelar from "../../assets/images/insteltelar.jpeg";
import playYellow from "../../assets/icon/playTrailer.svg";
import "./CaraouselStyles.css";

function Carousel() {
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

  return (
    <div className="carousel-container mt-14">
      <Slider {...settings}>
        <div className="carousel-item ">
          <img src={lalaLand} alt="La La Land" />
          <div className="watch-trailer-action flex gap-3 items-center">
            <img src={playYellow} alt="Play Trailer" className="play" />
            <span className="text-lg">WATCH TRAILER</span>
          </div>
        </div>
        <div className="carousel-item">
          <img src={joker} alt="Interstellar" />
        </div>
        <div className="carousel-item">
          <img src={insteltelar} alt="Joker" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
