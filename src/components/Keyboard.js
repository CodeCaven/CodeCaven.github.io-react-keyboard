import Screen from "./Screen";
import Header from "./Header";
import KeyboardButton from "./KeyboardButton";
import { useState } from "react";
import root from "../index.js";

const row1 = ['q','w','e','r','t','y','u','i','o','p'];
const row2 = ['a','s','d','f','g','h','j','k','l'];
const row3 = ['z','x','c','v','b','n','m'];
let upper = false;

function Keyboard() {
  const [screenValue, setScreenValue] = useState("");

  function buttonPressHandler(event) {
    setScreenValue((oldState) => {
      return oldState + event.target.value;
    })
  }

  function spaceHandler(event) {
    setScreenValue((oldState) => {
      return oldState + " ";
    })
  }

  function capsLock(event){
      upper = !upper;
      root.render(
        <Keyboard />
      );
  }

  return (
    <div>
      <Header />
      <Screen value={screenValue} />

      {row1.map((value, index) => { // key needed when mapping(https://reactjs.org/docs/lists-and-keys.html)
        return (
          <KeyboardButton key={index} keyboardButtonValue={ upper === true ? value.toUpperCase() : value } handleClick={buttonPressHandler} />
        )
      })}
      <KeyboardButton keyboardButtonValue="del" handleClick={() => {
        setScreenValue("")
      }} />
      <br />
      {row2.map((value, index) => {
        return (
          <KeyboardButton key={index} keyboardButtonValue={ upper === true ? value.toUpperCase() : value } handleClick={buttonPressHandler} />
        )
      })}
       <KeyboardButton class="buttonSpace" keyboardButtonValue="CAPS" handleClick={capsLock} />
      <br />
      {row3.map((value, index) => {
        return (
          <KeyboardButton key={index} keyboardButtonValue={ upper === true ? value.toUpperCase() : value } handleClick={buttonPressHandler} />
        )
      })}
      <br />
      <KeyboardButton class="buttonSpace" keyboardButtonValue="Space" handleClick={spaceHandler} />
    </div>
  )
}

export default Keyboard;