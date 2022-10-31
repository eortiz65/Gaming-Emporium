import './App.css'
import Main from './components/Main'
import NavBar from './components/NavBar'
import Input from './components/Input'
import Company from './components/Company'
import { useState, useEffect } from 'react'

function App() {
  let [company, setCompany] = useState('')

  setCompany = () => {}

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
