import './App.css'
import Main from './components/Main'
import Search from './components/Search'
import SideBar from './components/SideBar'
import Catalog from './components/Catalog'
import Input from './components/Input'
import Task from './components/Tasks'

function App() {
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
