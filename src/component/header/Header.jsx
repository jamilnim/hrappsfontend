import { NavLink, Link } from "react-router";
import Em from "../../assets/Em.png";
import styles from "./Header.module.css";

import React from "react";

function Header({ name }) {
  return (
    <div>
      <header className={styles.headerContent}>
        <div className={styles.logoContent}>
          <img className={styles.logo} src={Em} alt="logo" />
          <Link to="/">
            <h2>{name}</h2>
          </Link>
        </div>

        <nav>
          <ul>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/employeelist">Employee list</NavLink>
            <NavLink to="/add">Add Employee</NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
