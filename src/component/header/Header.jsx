import React from "react";
import { NavLink, Link } from "react-router-dom";
import Em from "../../assets/Em.png";
import styles from "./Header.module.css";

function Header({ name }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={Em} alt="logo" />
        <Link to="/">
          <h2>{name}</h2>
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/employeelist">Employee list</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add Employee</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
