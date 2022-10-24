import './App.css'
import Main from './components/Main'
import Search from './components/Search'
import SideBar from './components/SideBar'
import Catalog from './components/Catalog'
import Input from './components/Input'
import Company from './components/Company'
import { useState, useEffect } from 'react'

function App() {
  const [] = useState('')

  return (
    <div className="App">
      <header>
        <Search />
      </header>
      <body>
        <Main />
      </body>
    </div>
  )
}

export default App
