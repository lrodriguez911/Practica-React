import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import {useState} from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {connect} from 'react-redux'
//import DisplayMessages from './DisplayMessages.js'

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
//const store = createStore(counterReducer)


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
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

//const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Renderiza el Provider debajo de esta línea
  render(){
    return(
  <Provider store={store}>
  <DisplayMessages />
  </Provider>
    )
    }
  // Cambia el código encima de esta línea
};
const CounterConnect = connect(mapStateToProps)(Contador)
const root = ReactDOM.createRoot(document.getElementById('root'));
const renderApp = () =>{
  root.render(
    <React.Fragment>
      <Contador />
    <Provider store={store}>
      <CounterConnect/>
    </Provider>
    <AppWrapper/>
    <DisplayMessages />
    </React.Fragment>
    
  );
}
renderApp()
store.subscribe(renderApp)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

