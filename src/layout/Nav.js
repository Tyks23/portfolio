import React from "react";
import "../pages/App.css";
import { NavLink } from "react-router-dom";
let style = {};
const Nav = () => (
  <nav>
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/projects">
          Projects
        </NavLink>
      </li>    
    </ul>
  </nav>
);

export default Nav;
