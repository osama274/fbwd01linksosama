import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Nav.scss"

function Nav() {
  return (
    <div className="Nav">
     <ul>
       <li> <NavLink  exact to="/"> Home</NavLink> </li>
       <li> < NavLink to="/about">About</NavLink> </li>
     </ul>
    </div>
  );
}

export default Nav;
