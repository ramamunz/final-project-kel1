import React from "react";
import CardMovie from "../Card/CardMovie";
import wakandaImg from "../../assets/images/wakanda-forever.png";
import themenuImg from "../../assets/images/the menu 1.png";
import lamborginiImg from "../../assets/images/lamborghini 1.png";
import blackadamImg from "../../assets/images/black adam 1.png";
import violentnightImg from "../../assets/images/violent night 1.png";
import shehulkImg from "../../assets/images/she hulk 1.png";
import tarImg from "../../assets/images/tar 1.png";
import thewomankingImg from "../../assets/images/the woman king 1.png";
import terrifierImg from "../../assets/images/terrifier 1.png";
import spiritedImg from "../../assets/images/spirited 1.png";


function PopulerSectionComponents() {
  return (
    <>
      <div className="uppercase flex justify-center" >
        <div className="container ">
          <div className="flex justify-between">
            <p className="underline">populer right now</p>
            <p className="underline">see all</p>
          </div>

          <div className="flex flex-wrap mt-10 gap-y-7 justify-between ">
            <CardMovie
              imgPath={wakandaImg}
              alt="Wakanda Forever"
              title="Wakanda Forever"
              className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
            />
            <CardMovie
              imgPath={themenuImg}
              alt="the menu 1"
              title="the menu "
              className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
            />
            <CardMovie
              imgPath={lamborginiImg}
              alt="lamborgini"
              title="Wednesday"
              className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
            />
            <CardMovie
              imgPath={blackadamImg}
              alt="black adam"
              title="black adam"
              className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
            />
            <CardMovie
              imgPath={violentnightImg}
              alt="violent night"
              title="violent night"
              className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
            />
            <CardMovie
              imgPath={shehulkImg}
              alt="she hulk"
              title="she-hulk"
              className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
            />
            <CardMovie
              imgPath={tarImg}
              alt="tar"
              title="tar"
              className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
            />

            <CardMovie
              imgPath={thewomankingImg}
              alt="the woman king"
              title="the woman king"
              className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
            />
            <CardMovie
              imgPath={terrifierImg}
              alt="terrifier"
              title="terrifier 2"
              className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
            />
            <CardMovie
              imgPath={spiritedImg}
              alt="spirited"
              title="spirited"
              className="w-32 sm:w-44 rounded-2xl mb-4 sm:mb-0"
            />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default PopulerSectionComponents;
