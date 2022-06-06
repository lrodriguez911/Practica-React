import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

console.log(useState)
class WorksTodo extends React.Component {
  constructor(props){
    super(props);
    this.state = {items: [], text : ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangedelete = this.handleChangedelete.bind(this);
  }
  render(){
    return (
        <div>
          <h3>Tareas Pendientes</h3>
          <TodoList items={this.state.items}/>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              Tareas para hacer?
              </label>
          <input 
          id="new-todo"
          onChange={this.handleChange}
          value={this.state.text}
          />
          <button>
            Añadir #{this.state.items.length + 1}
          </button>
          </form>
        </div>
    )
  }

handleChange(e){
  this.setState({text: e.target.value});
}
handleChangedelete(){
  this.setState(state => ({
    items : state.items.pop(this.items[0])
  }))
}
handleSubmit(e){
  e.preventDefault();
  console.log(e)
  if(this.state.text.length === 0){ //evita que se agreguen tareas en blanco
    return;
  }
  const newItem = {
    text: this.state.text, //actualiza el text con lo q se carga en el form
    id : Date.now()
  }
  this.setState(state => ({
    items : state.items.concat(newItem), // da la llamada para renderizar el nuevo item
    text:''
  }));
}
}
class TodoList extends React.Component {
  render(){
    return (
      <ul>
        <p>Aqui va la lista de tareas</p>
        {this.props.items.map( (items) => 
        <li key={items.id}>{items.text}</li>)}<button onClick={() => 
        {this.setState(this.props.items.pop()) // utilizo setState para avisar q cuando se 
        // hace click se tiene q eliminar la prop
          }}>Eliminar</button>
      </ul>
    );
  }
}
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Cambia el código debajo de esta línea
this.handleChange = this.handleChange.bind(this)
    // Cambia el código encima de esta línea
  }
  // Cambia el código debajo de esta línea
handleChange(event){
this.setState({input : event.target.value})
}
  // Cambia el código encima de esta línea
  render() {
    return (
      <div>
        { /* Cambia el código debajo de esta línea */}
<input type='text' value={this.state.input}
onChange={this.handleChange}/>
        { /* Cambia el código encima de esta línea */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Cambia el código debajo de esta línea
this.increment = this.increment.bind(this)
this.decrement = this.decrement.bind(this)
this.reset = this.reset.bind(this)
    // Cambia el código encima de esta línea
  }
  // Cambia el código debajo de esta línea
increment(){
  return this.setState((state)=>({
    count : state.count +1
  }))
}
decrement(){
  return this.setState((state) => ({
    count : state.count - 1
  }))
}
reset(){
  return this.setState(() =>(
    {count : 0}
  ))
}
  // Cambia el código encima de esta línea
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
root.render(<WorksTodo />); 
root.render(<ControlledInput />); 
root.render(<Counter />); 