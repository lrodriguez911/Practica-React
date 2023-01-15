import "./App.css";
import logopm from "./images/logopm.png";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="calc-logo-container">
        <img src={logopm} className="calc-logo" alt="logo of playmore" />
      </div>
      <div className="calc-container">
        <div className="row">
          <Button>1</Button>
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
