import React from "react";
import "../pages/App.css";
import { NavLink } from "react-router-dom";
let style = {};
const Nav = () => (
  <nav>
    <ul>
      <li className="def-nav">
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li className="def-nav">
        <NavLink exact to="/about">
          About
        </NavLink>
      </li>
      <li className="def-nav">
        <NavLink exact to="/projects">
          Projects
        </NavLink>
      </li>    
      <li className="cv-nav">
        <a href="/assets/mtyksammel_cv_en.pdf">CV</a>    
      </li>
    </ul>
  </nav>
);

export default Nav;
