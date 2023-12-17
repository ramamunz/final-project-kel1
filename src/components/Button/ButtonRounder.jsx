import React from "react";


function ButtonRounded({ imgPath, alt }){
    return(
        <>
            <img src={imgPath} alt={alt} className="w-20" style={{marginLeft: '-19px'}}/>
        </>
    )
}


export default ButtonRounded;