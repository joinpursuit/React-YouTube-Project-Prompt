import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="NavBarContainer">
      <Link>
        <img src="https://cdn130.picsart.com/301451482048211.png?r1024x1024" alt="YouTube logo" />
      </Link>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navbar;
