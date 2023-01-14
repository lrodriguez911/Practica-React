import "./App.css";
import logopm from './images/logopm.png'
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manageClick = () => {
    setNumClicks(numClicks + 1)
  };
  const resetCounter = () => {
    setNumClicks(0)
  };

  return (
    <div className="App">
      <div className="container-logo">
        <img className='logo'
        src={logopm}
        alt="Logo of company"/>
      </div>
      <div className="container-principal">
        <Counter numClicks={numClicks}/>
        <Button text='Click' isButtonClick={true} manageClick={manageClick}/>
        <Button text='Reset' isButtonClick={false} manageClick={resetCounter}/>
      </div>
    </div>
  );
}

export default App;
