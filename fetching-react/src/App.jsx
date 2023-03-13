import { useFetch } from './useFetch'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const { data, loading, error, handleCancelRequest } = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Fetch like a PRO</h1>
        <button onClick={handleCancelRequest}>Cancel Request</button>
        <div className="card">
          <ul>
            {error && <li>Error: {error}</li>}
            {loading && <li>Loading...</li>}
            {data?.map(user => (<li key={user.id}>{user.name}</li>))}
          </ul>
        </div>
      </div>
      
      
    </div>
  )
}

export default App
