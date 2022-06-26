import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { store } from 'react-redux';

// Redux:
const ADD = 'ADD';
const DELETE = 'DELETE';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};
const deleteMessage = (index) => {
  return {
    type: DELETE,
    index
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    case DELETE:
      return [
        [...state.slice(0,action.index)],[...state].slice(action.index + 1)
      ];
    default:
      return state;
  }
};

//const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
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

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

//const Provider = ReactRedux.Provider;
//const connect = ReactRedux.connect;

// Define el componente Container aquí:
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Completa la sentencia return:
    return (<Provider store={store}>
    <Container/>
    </Provider>);
  }
};