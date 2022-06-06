import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import useState from 'react';

function Contador (){
  const [sta, setState] = useState();
  console.log(sta)
  return(<div>
    <button onClick={()=>
      setState(({sta : 0 }))
    }>Incrementar</button>
  </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <App/>
    <Contador />
  </React.Fragment>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
