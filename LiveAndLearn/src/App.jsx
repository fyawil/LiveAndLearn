import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Live & Learn</h1>
        <nav>
          <h2>Lessons</h2>
          <h2>Homework</h2>
          <h2></h2>
        </nav>
      </div>
    </>
  )
}

export default App
