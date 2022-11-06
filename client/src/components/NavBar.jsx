import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="gaming-emporium">Gaming Emporium</h1>
      <div>
        <Link to="/" className="links">
          Home
        </Link>        

        <Link to="/companyform" className="links">
          New Company
        </Link>

        <Link to="/figureform" className="links">
          New Figure
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
