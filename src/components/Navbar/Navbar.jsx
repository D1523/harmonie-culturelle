import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to="/"
            className="nav__link"
            style={({ isActive }) => {
              return { color: isActive ? "#ff652f" : "inherit" };
            }}>
            {" "}
            Home{" "}
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/about"
            className="nav__link"
            style={({ isActive }) => {
              return { color: isActive ? "#ff652f" : "inherit" };
            }}>
            ACCUEIL
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            to="/projects"
            className="nav__link"
            style={({ isActive }) => {
              return { color: isActive ? "#ff652f" : "inherit" };
            }}>
           QUI SOMMES NOUS ?
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/about"
            className="nav__link"
            style={({ isActive }) => {
              return { color: isActive ? "#ff652f" : "inherit" };
            }}>
           ÉVÈNEMENTS
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/contacts"
            className="nav__link"
            style={({ isActive }) => {
              return { color: isActive ? "#ff652f" : "inherit" };
            }}>
            Contactez-nous
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;






