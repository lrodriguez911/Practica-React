import logo from './logo.svg';
import './App.css';
import {Testimonial} from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <Testimonial />
      <img src={logo}/>
    </div>
  );
}

export default App;