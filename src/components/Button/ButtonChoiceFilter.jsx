import React from "react";
import ArrowDown from "../../assets/icon/chevron-right-black.svg";

function ButtonChoiceFilter({ set }) {
  return (
    <>
      <div className="button flex bg-slate-300 text-black px-12 py-2 rounded-3xl">
        {set} <img src={ArrowDown} alt="" srcset="" />
      </div>
    </>
  );
}

export default ButtonChoiceFilter;
