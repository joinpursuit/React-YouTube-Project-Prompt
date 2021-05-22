import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="NavBarContainer">
      <img
        src="https://cdn130.picsart.com/301451482048211.png?r1024x1024"
        alt="YouTube logo"
      />
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navbar;
