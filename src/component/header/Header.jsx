import { NavLink, Link } from "react-router";

import styles from "./Header.module.css";

import React from "react";

function Header({ name }) {
  return (
    <div>
      <header className={styles.header}>
        <div className="logo">
          <Link to="/">
            <h2>{name}</h2>
          </Link>
        </div>
        <nav>
          <ul>
            <NavLink to="/about">About</NavLink>
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
