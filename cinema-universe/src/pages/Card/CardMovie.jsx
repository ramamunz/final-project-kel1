import React from "react";

function CardMovie({ imgPath, alt, title, className  }) {
  return (
    <>
      <div className="flex flex-row">
        <div className="card-movie-content me-4" style={{width: 'fit-content'}}>
          <img src={imgPath} alt={alt} className={className} />
          <p className="text-center mt-3 font-normal uppercase tracking-widest ">{title}</p>
        </div>
      </div>
    </>
  );
}

export default CardMovie;
