import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import {useState} from 'react';
import {createStore} from 'redux'
import {connect} from 'react-redux'

/* function ContadorOnlyReact (){
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
} */

function counterReducer(state = 0, action) {
  switch (action.type) {
    case '@counter/incremented':
      return state + 1; 
    case '@counter/decremented':
      return state - 1; 
    case '@counter/reset':
      return state = 0; 
    default :
    return state;
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


const Contador = () => {
  return(
    <div>
    <div>
      {store.getState()}
    </div>
    <button onClick={()=>{
      store.dispatch(caseIncremented)
    }}>Incrementar</button>
    <button onClick={()=>{
      store.dispatch(caseDecremented)
    }}>Decrementar</button>
    <button onClick={()=>{
      store.dispatch(caseReseted)
    }}>Reset</button>
    </div>
  )
}
function mapStateToProps(state) {
  return {
    count: state.count
  };

}
connect(mapStateToProps, Contador)
const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = () =>{
  root.render(
    <React.Fragment>
      <Contador />
    </React.Fragment>
  );
}
renderApp()
store.subscribe(renderApp)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

