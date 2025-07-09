import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='background'>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ClickCounter</h1>
      <h1>{count}</h1>
      <div className="card">
        <button className="button1" onClick={() => setCount((count) => count + 1)}>
          Increase
        </button>

        <button className="button2" onClick={() => setCount((count) => count - 1)}>
          Decrease
        </button>
      </div>
    </div>
  )
}

export default App
