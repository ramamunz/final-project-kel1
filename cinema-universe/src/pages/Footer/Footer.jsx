import React from "react";
import LogoCU from "../Button/LogoCU";
import './FooterStyles.css'


function Footer() {
  return (
    <>
      <div className="footer-container flex justify-center items-center flex-col py-8 bg-merah-hati text-white">
        <p>
          <span className="me-1">
            CINEMA UNIVERSE © 2023-2024
          </span>
          <span className="font-extralight">
           Blog Contact Browse Movies Requests Login Language
           </span>
        </p>
           <LogoCU/>

      </div>
    </>
  );
}

export default Footer;
