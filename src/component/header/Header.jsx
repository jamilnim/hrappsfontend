import { NavLink, Link } from "react-router";
import Em from "../../assets/Em.png";
import styles from "./Header.module.css";

import React from "react";

function Header({ name }) {
  return (
    <div>
      <footer className={styles.header}>
        <div className="logo">
          <img className={styles.logo} src={Em} alt="logo" />
        </div>
        <nav>
          <ul>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/employeelist">Employee list</NavLink>
            <NavLink to="/add">Add Employee</NavLink>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Header;
