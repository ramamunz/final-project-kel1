import React from "react";

function ButtonLink({ set }) {
  return (
    <>
      <a
        href="#"
        className="relative inline-flex items-center justify-center p-0.5  text-center text-sm text-white rounded-full group bg-gradient-to-r from-merah-hati to-merah-cerah"
      >
        <span className="rounded-full relative w-24  transition-all py-1 bg-white dark:bg-merah-hati group-hover:bg-opacity-0">
          {set}
        </span>
      </a>
    </>
  );
}

export default ButtonLink;
