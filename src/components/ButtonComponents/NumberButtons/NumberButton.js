import React from "react";

const NumberButton = ({character}) => {
  let btnClass = "btn"
  if(character ===  "0") btnClass = "btn-lg"
  return <button className={btnClass}>{character}</button>
};

export default NumberButton;




// export default NumberButton;
