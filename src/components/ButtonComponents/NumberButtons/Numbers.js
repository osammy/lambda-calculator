import React from "react";
import { numbers } from '../../../data';

import NumberButton from './NumberButton';

const Numbers = ({addCharacter}) => {
  // STEP 2 - add the imported data to state
  return (
    <div className="numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

       {
         
         numbers.map(character  => <NumberButton key={character} addCharacter={()=>addCharacter(character)} character={character} />)
         
       }
       
    </div>
  );
};

export default Numbers;

