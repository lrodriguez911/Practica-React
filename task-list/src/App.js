import "./App.css";
import logo from "./images/logopm.png"
import Task from "./components/Task";

function App() {
  return (
    <div className="app-task-list">
      <div className="logo-container">
        <img src={logo} alt="logo ofplay more" className="logo-playmore" />
      </div>
      <div className="tasks-principal-list">
        <h1>My Tasks</h1>
        <Task text='hola'/>
      </div>
    </div>
  );
}

export default App;
