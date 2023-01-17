import "./App.css";
import React from "react";
import logopm from "./images/logopm.png";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ButtonClear from "./components/ButtonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value)
  };

  const calcResult = () => {
    if (input){
    setInput(evaluate(input))} else{
      alert("Please insert the values to can calculated they")
    }
  };
  return (
    <div className="App">
      
      <div className="calc-logo-container">
        <img src={logopm} className="calc-logo" alt="logo of playmore" />
      </div>
      <div className="calc-container">
        <Screen input={input}/>
        <div className="row">
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>/</Button>
        </div>
        <div className="row">
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>0</Button>
          <ButtonClear manageClear={() => setInput('')} />
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button manageClick={calcResult}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
