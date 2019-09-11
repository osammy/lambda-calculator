import React from "react";
import { specials } from '../../../data';
import SpecialButton from './SpecialButton';

//import any components needed

//Import your array data to from the provided data file

const Specials = ({addCharacter}) => {
  // STEP 2 - add the imported data to state

  return (
    <div className="specials">
       {
         specials.map(character => <SpecialButton key={character} addCharacter={()=>addCharacter(character)} character={character} />)
       }
    </div>
  );
};

export default Specials
