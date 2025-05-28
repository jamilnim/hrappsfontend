import { NavLink, Link } from "react-router";

import "./Header.css";

import React from "react";

function Header({ name }) {
  return (
    <div>
      <header>
        <div className="logo">
          <Link to="/">
            <h2>{name}</h2>
          </Link>
        </div>
        <nav>
          <ul>
            <NavLink to="/">About</NavLink>
            <NavLink to="/employeelist">Employee list</NavLink>
            <NavLink to="/add">Add Employee</NavLink>
            <NavLink to="/personList">Person List</NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
