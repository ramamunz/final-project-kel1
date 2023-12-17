import React from "react";
import ButtonFilter from "../Button/ButtonFilter";
import menu from "../../assets/icon/menu.png";
import filterIcon from "../../assets/icon/filter-icon.png";

function FilterComponent() {
  return (
    <div className="  mx-auto px-5 md:px-10 lg:px-20 py-8">
      <div className="flex items-center justify-between">
        <ButtonFilter set="Genres" />
        <div className="border-t-2 border-gray-300 flex-1 ml-4 md:ml-8"></div>
        <img src={menu} alt="Menu" className="w-8 h-8 md:w-10 md:h-10 me-3 ms-3" />
        <img src={filterIcon} alt="Filter" className="w-8 h-8 md:w-10 md:h-10" />
      </div>
    </div>
  );
}

export default FilterComponent;
