import React from "react";
import humburger from "../../assets/icon/hamburger.png";
import ButtonLink from "../Button/ButtonLink";

import pencarianIcon from "../../assets/icon/search.svg"

function NavbarSection2() {
  return (
    <>
      <div className="flex justify-between items-center bg-merah-hati p-3 border-y-2 ">
        <div className="hamburger">
          <img src={humburger} alt="" srcset="" />
        </div>
        <div className="mx-auto">
          <ButtonLink set="Home" />
          <ButtonLink set="Movies" />
          <span className="ms-5 me-5 "></span>
          <ButtonLink set="series" />
          <ButtonLink set="Favorite" />
        </div>
        <img src={pencarianIcon} className="me-2" alt="" srcset="" />
      </div>
    </>
  );
}

export default NavbarSection2;
