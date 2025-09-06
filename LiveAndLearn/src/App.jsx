import { useState } from 'react'
import './App.css'

function App() {

  const [page, setPage] = useState('Home')

  return (
    <>
    { page == 'Home' && <div>
        <div>
          <div>
            <div>
              <h1>Basmalah</h1>
              <p>Learn for the Next Life and what you need in this Life to reach your destination. Live & Learn is a platform created with the goal of allowing students and teachers to interact flexibly in a efficient manner, allowing both to review required reading, homework, feedback and helpful articles to aid the student in accumulating knowledge. Sign up now to start your journey as a lifelong student...</p>
            </div>
            <div>
              Sign In Component
            </div>
          </div>
        </div>
        <footer>
          <h3><a href='mailto:contact@liveandlearn.com'>contact@liveandlearn.com</a></h3>
          <h3><a href='tel:+44700000000000'>+44700000000000</a></h3>
        </footer>
    </div>}
      <div>
        <header>
          <h1>Live & Learn</h1>          
        </header>
        <nav>
          <h2><a>Lessons</a></h2>
          <h2><a>Homework</a></h2>
          <h2><a>Get In Touch</a></h2>
        </nav>

      </div>
    </>
  )
}

export default App
