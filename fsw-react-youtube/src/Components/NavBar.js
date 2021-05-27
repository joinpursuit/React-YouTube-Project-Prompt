
import React from "react";
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <div className="NavBar">
            <nav>
                <Link to="/">Home</Link>{" "}
                <Link to="/about">About</Link>{" "}
            </nav>
        </div>
    )
}

export default NavBar;