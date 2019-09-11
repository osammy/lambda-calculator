import React from "react";
import Operators from '../OperatorButtons/Operators';
import Specials from '../SpecialButtons/Specials';
import Numbers from '../NumberButtons/Numbers';
const Buttons = ({addCharacter,setTotal}) => {
  return (
    <div className="buttonsContainer">
      <div>
        <Specials addCharacter={addCharacter} setTotal={setTotal} />
        <Numbers addCharacter={addCharacter} />
      </div>
      <Operators addCharacter={addCharacter} />
    </div>
  );
};

export default Buttons;
