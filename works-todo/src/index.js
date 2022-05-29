import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorksTodo />
  </React.StrictMode>
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


class WorksTodo extends React.Component {
  constructor(props){
    super(props);
    this.state = {items: [], text : ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render(){
    return (
        <div>
          <h3>Tareas Pendientes</h3>
          <TodoList intems={this.state.intems}/>
          <form onSubmit={this.handleSubmit}/>
            <label htmlFor='new-todo'>
              que necesito hacer?
              </label>
          <imput 
          id='new-todo'
          onChange={this.handleChange}
          value={this.state.text}
          />
          <button>
            Añadir #{this.state.items.length + 1}
          </button>
        </div>
    )
  }
handleChange(e){
  this.setState({text: e.target.value});
}
handleSubmit(e){
  e.preventDefault();
  if(this.state.text.length === 0){
    return;
  }
  const newItem = {
    text: this.state.text,
    id : Date.now()
  }
  this.setState(state => ({
    items : state.items.concat(newItem),
    text:''
  }));
}
}
class TodoList extends React.Component {
  render(){
    return (
      <ul>
        {this.props.items.map( i => (
          <li key={i.id}>{i.text}</li>
        ))}
      </ul>
    )
  }
}
