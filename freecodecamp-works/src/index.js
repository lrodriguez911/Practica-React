import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//component use to change state of visibility
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
this.toggleVisibility = this.toggleVisibility.bind(this);

  }
toggleVisibility(){
  this.setState(state => 
  ({visibility : !state.visibility}))
}
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
// create a form and controlled to show
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
 
  event.preventDefault();
  this.setState(()=>({
    submit : this.state.input
  }))
  
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          
          <input value={this.state.input} onChange={this.handleChange}/>
         
          <button type='submit'>Submit!</button>
        </form>
       
        <h1>{this.state.submit}</h1>
       
      </div>
    );
  }
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <MyComponent />
    <MyForm />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
