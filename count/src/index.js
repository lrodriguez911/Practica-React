import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useState} from 'react';
import {createStore} from 'redux'

function ContadorOnlyReact (){
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

function counterReducer(state = 0, action) {
  switch (action.key) {
    case caseIncremented:
      return state + 1; 
      break;
    case caseDecremented:
      return state - 1; 
      break;
    case caseReseted:
      return state = 0; 
      break;
    default:
      break;
  }
}
const caseIncremented ={
  type:'@counter/incremented'
}
const caseDecremented ={
  type:'@counter/decremented'
}
const caseReseted ={
  type:'@counter/reset'
}
const store = createStore(counterReducer)

store.subscribe( () => {
  console.log(store.getState())
})

store.dispatch(caseIncremented)

const Contador = () => {
  return(
    <div>
      {store.getState()}
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

