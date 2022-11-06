import './App.css'
import Main from './components/Main'
import NavBar from './components/NavBar'
import { useState, useEffect } from 'react'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <body>
        <Main />
      </body>
    </div>
  )
}

export default App
