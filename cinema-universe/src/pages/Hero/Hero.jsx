import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroStyle.css";
import ButtonRounded from "../Button/ButtonRounder";

function Hero() {
  return (
    <>
      <div className="hero-container text-white">
        <div className="container-fluid mx-5">
          <div className="movie-title">
            <div className="flex justify-center">
              <img src="/src/assets/images/MARVELLOGO.png" alt="" srcset="" />
            </div>
            <div className="mt-4">
              <img src="/src/assets/images/Black_Widow_title.png" alt="" srcset=""  />
            </div>
            <div className="mt-4">
              <img src="/src/assets/images/rating.png" alt="" srcset="" className="w-20"  />
            </div>
            <div className="flex mt-4">
                <p className="text-xs">DRAMA</p>
                <p className="text-xs mx-2">|</p>
                <p className="text-xs">ACTION</p>
                <p className="text-xs mx-2">|</p>
                <p className="text-xs">SCI-FI</p>
            </div>
            <div className="flex">
             <ButtonRounded imgPath='/src/assets/icon/Play.png' alt='play'/>
             <ButtonRounded imgPath='/src/assets/icon/Plus.png' alt='pause'/>
            </div>
            <div className="description text-sm">
            Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
