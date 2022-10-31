import Catalog from './Catalog'

const NavBar = () => {
  return (
    <div>
      <setion className='nav-bar'>
        <div className="center-menu">
          <ul className="menu">
            <Catalog />
          </ul>
        </div>
      </setion>
    </div>
  )
}

export default NavBar