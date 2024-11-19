import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <h1>run vite + react + typescript</h1>
        <h2>- Page list -</h2>

        <ul style={{
          listStyle: "none",
          padding: 0,
        }}>
          <li>
            {/* Add page Link */}
            <Link to='/counter'>/counter</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
