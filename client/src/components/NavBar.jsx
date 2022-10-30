import Catalog from './Catalog'
import Search from './Search'
import Events from './Events'
import Contact from './Contact'

const NavBar = () => {
  return (
    <div>
      <setion className='nav-bar'>
        <div className="center-menu">
          <ul className="menu">
            <Search />
            <Catalog />
            <Events />
            <Contact />
          </ul>
        </div>
      </setion>
    </div>
  )
}

export default NavBar