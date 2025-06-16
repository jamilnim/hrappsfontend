import { NavLink, Link } from "react-router";

import Styles from "./Footer.module.css";

import React from "react";

function Footer({ name }) {
  return (
    <div>
      <footer className={Styles.footer}>
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
      </footer>
    </div>
  );
}

export default Footer;
