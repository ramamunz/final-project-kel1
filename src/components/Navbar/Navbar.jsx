import React from "react";
import humburger from "../../assets/icon/hamburger.png";
import ButtonLink from "../Button/ButtonLink";
import LogoCU from "../Button/LogoCU";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center bg-actionRed p-3">
        <div className="hamburger">
          <img src={humburger} alt="" srcset="" />
        </div>
        <div className="mx-auto">
          <ButtonLink set="Home" />
          <ButtonLink set="Movies" />
          <button className="border-4 border-red-600 text-white  px-3 font-bold text-2xl">
            CU
          </button>
          <span className="ms-2 me-2 text-white font-bold">CINEMATIC UNIVERSE</span>
          <ButtonLink set="Home" />
          <ButtonLink set="Movies" />
        </div>
        <img src="/src/assets/icon/search.svg" className="me-2" alt="" srcset="" />
        <img src="/src/assets/icon/bell.svg" className="me-2" alt="" srcset="" />
        <img src="/src/assets/icon/Image.png" className="me-2" alt="" srcset="" />
        <img src="/src/assets/icon/Arrow - Down 2.svg" className="me-2" alt="" srcset="" />
      </div>
    </>
  );
}

export default Navbar;
