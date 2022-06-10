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
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* pasando el state del padre a la props name del hijo*/}
         <Navbar name={this.state.name}/>
         
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/*pasando una props a un elemento hijo, depues puedo pasar el state del padre como props */}
      <h1>Hello, my name is:{this.props.name} </h1>
    </div>
    );
  }
};
class MyAppCb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* ingreso los componentes hijos a renderizar y agrego un callback como props */ }
<GetInput 
input={this.state.inputValue} 
handleChange={this.handleChange}
/>
<RenderInput input={this.state.inputValue}/>
        
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
class MyComponentLifeCycle extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // learning about the lifecycle in react
console.log('hola')
  }
  render() {
    console.log('hola1')
    return(<div />)
   
  }
};
class MyComponentEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // the componentDidMount method is a best place to attach any envents listeners, in this add addEventListener
  // and in conponentWillUnmount remove envent listener
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown',this.handleKeyPress)
  }
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps) {
    console.log('Should I update?');
    // shouldComponentUpdate renderer the component only if a return true, in this case re-renderer
    // the component if props only evens
    return nextProps.value % 2 === 0;
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
class Colorful extends React.Component {
  // using change style in react
  render() {
    return (
      <div style={{color:'red', fontSize:72}}>Big Red</div>
    );
  }
};

class Colorful1 extends React.Component {
  render() {
    return (
      <div style={styles}>Style Me!</div>
    );
    // using a variable to pass style
  }
};
//declare de var styles
const styles = {
  color:'purple',
  fontSize: 40,
  border: '2px solid purple'
}

const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex]; 
    // using a array to modify the DOM taking a answer randomly
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {/* using condicional de variable answer to show 
          the diferents answers*/}
{answer}
          
        </p>
      </div>
    );
  }
}
class MyComponentConditional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // using if to render one thing o another thing
if(this.state.display){
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
    )}
else {
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
       </div>
    )};
  }
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
  <React.StrictMode>
    <App />
    <MyComponent />
    <MyForm />
    <MyApp />
    <MyAppCb />
    <MyComponentLifeCycle />
    <MyComponentEvents />
    <Controller />
    <Colorful />
    <Colorful1 />
    <MagicEightBall />
    <MyComponentConditional />
  </React.StrictMode>
  </React.Fragment>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
