import { NavLink, Link } from "react-router";

import styles from "./Footer.module.css";
import Em from "../../assets/Em.png";

import React from "react";

function Footer({ name }) {
  return (
    <div>
      <footer className={styles.footer}>
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

export default Footer;
