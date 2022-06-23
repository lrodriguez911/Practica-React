import React from "react";

class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    this.handleChange = this.handleChange.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
    }
    // Agrega los métodos handleChange() y submitMessage() aquí
    handleChange(event){
        this.setState({
            input : event.target.value,
            messages : [...this.state.messages]
            
        })
    event.preventDefault()
    }
    submitMessage(){
        this.setState({
            input : '',
            messages : [...this.state.messages, this.state.input]
        })

    }
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* Renderiza un input, button, y ul debajo de esta línea */ }
        <input onChange={this.handleChange} value={this.state.input}></input>
        <button onClick={this.submitMessage}>Add Message</button>
        <ul>{this.state.messages.map(a => <li>{a}</li>)}</ul>
          { /* Cambia el código encima de esta línea */ }
        </div>
      );
    }
  };
  export default DisplayMessages