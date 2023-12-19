import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardMovie from "../Card/CardMovie";

function MovieRecommendCard() {
  return (
    <>
      <div className="container-fluid flex flex-wrap justify-center mx-2 mt-6">
        <CardMovie
          imgPath="/src/assets/images/avatar.png"
          alt="Avatar"
          title="Avatar"
          className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
        />
        <CardMovie
          imgPath="/src/assets/images/bladerunner.jpeg"
          alt="Blade Runner"
          title="Blade Runner"
          className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
        />
        <CardMovie
          imgPath="/src/assets/images/spiderman.jpeg"
          alt="Spider-man"
          title="Spider-man"
          className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
        />
        <CardMovie
          imgPath="/src/assets/images/topgun.jpeg"
          alt="Avatar"
          title="Top Gun"
          className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
        />
        <CardMovie
          imgPath="/src/assets/images/avangers.png"
          alt="Avatar"
          title="Avanger"
          className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
        />
        <CardMovie
          imgPath="/src/assets/images/dontworry.jpeg"
          alt="Avatar"
          title="Dont Worry"
          className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
        />
      </div>
    </>
  );
}

export default MovieRecommendCard;
