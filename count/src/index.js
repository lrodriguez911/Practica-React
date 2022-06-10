import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App.js'
import './index.css';
//import reportWebVitals from './reportWebVitals';
import {useState} from 'react';

function Contador (){
  const [sta, setState] = useState(0);

  const handleStateinc = () =>{
    return(setState(sta + 1))
  }
  const handleStatedec = () =>{
    return(setState(sta + 1))
  }
  return(
  <div>
    <button onClick={handleStateinc
    }>Incrementar</button>
    <button onClick={handleStatedec
    }>Decrementar</button>
    <span>{sta}</span>
  </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Contador />
  </React.Fragment>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

