import React, {useState,useEffect} from "react";
import "./App.css";
import Display from './components/DisplayComponents/Display';
// import Numbers from './components/ButtonComponents/NumberButtons/Numbers';

import {numbers,specials,operators} from './data';
import Buttons from './components/ButtonComponents/Buttons/Buttons';
import Logo from "./components/DisplayComponents/Logo";

function App() {

  const [total, setTotal] = useState(0);
  const [displayCharacters, updateDisplayChar] = useState("");



  function addCharacter(ch) {

    if(ch === "C") {
      resetdisplayCharacters();
      return;
    }

    if(isEqualToSignInDisplayCharacter(displayCharacters)) {
      resetdisplayCharacters();
      updateDisplayChar(ch)
      return;
    }

    if (operators.includes(ch)) ch = " "+ch;
    
    if(ch === "=") {
      const newTotal = evaluateString(displayCharacters);
      setTotal(newTotal);
      const charaterToDisplay = `${displayCharacters}${ch} ${newTotal}`;
      console.log(total)
      updateDisplayChar(charaterToDisplay)
      return;
    }

    
    let charaterToDisplay = `${displayCharacters}${ch}`;
    updateDisplayChar(charaterToDisplay)
  }

  function resetdisplayCharacters() {
    updateDisplayChar("")
  }

  function evaluateString(displayCharacters) {
    return eval(displayCharacters);
  }

  function isEqualToSignInDisplayCharacter(theCharactersToCheck) {
    if(theCharactersToCheck !== "" && theCharactersToCheck.split("=").length > 1) return true;
    return false;
  }

  return (
    <div className="container">
      <div className="content">
      <Logo />
      <div className="App">
        <Display displayCharacters={displayCharacters} />
        <Buttons addCharacter={addCharacter} setTotal={setTotal}  />
      </div>
      </div>
    </div>
  );
}

export default App;
