import './App.css'
import Main from './components/Main'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import Input from './components/Input'
import Company from './components/Company'
import { useState, useEffect } from 'react'

function App() {
  let [company, setCompany] = useState({
    id: '',
    name: '',
    url: ''
  })

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
