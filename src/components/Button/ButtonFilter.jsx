import React, { useState } from "react";
import ButtonChoiceFilter from "./ButtonChoiceFilter";
import chevronRight from "../../assets/icon/chevron-right.svg";
import "./ButtonFilterStyle.css";

function ButtonFilter({ set }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    'ACTION',
    'ACTION',
    'ADVENTURE',
    'ANIMATION',
    'BIOGRAPHY',
    'COMEDY',
    'CRIME',
    'DOCUMENTARY',
    'DRAMA',
    'FANTASY',
    'FAMILY',
    'HORROR',
    'HISTORY',
    'MUSIC',
    'NEWS',
    'POLITICS',
    'ROMANCE',
    'SERIES',
    'SCI-FI',
    'TALK',
    'TV MOVIE',
    'THRILLER',
    'WESTERN',
    'WAR'
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
    <div key={chunkIndex} className="options-column">
      {chunk.map((option, index) => (
        <li key={index} onClick={() => handleOptionClick(option)}>
          {option}
        </li>
      ))}
    </div>
  ));

  return (
    <div className="button-filter-container">
      <button
        className="btn-filter flex gap-4 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || set} <img src={chevronRight} alt="Chevron" />
      </button>
      {isOpen && (
        <ul className="dropdown-options">
          <div className="columns-container">
            {columns.map((column, index) => (
              <div key={index} className="column-wrapper">
                {column}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <ButtonChoiceFilter set="Country" />
            <ButtonChoiceFilter set="Year" />
          </div>
        </ul>
      )}
    </div>
  );
}

export default ButtonFilter;
