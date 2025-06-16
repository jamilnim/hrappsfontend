import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About HR Management App</h1>
      <p>
        This HR Management App is developed as an academic project using{" "}
        <strong>React.js</strong> for the frontend and{" "}
        <strong>JSON Server</strong> as a mock backend.
      </p>
      <p>
        The application allows users to manage employee data efficiently. Key
        features include:
      </p>
      <ul>
        <li>Add new employees with detailed information.</li>
        <li>Edit existing employee records.</li>
        <li>
          View a short summary or a detailed version of each employee's data.
        </li>
        <li>
          All data operations (Add, Edit, Delete) are simulated using JSON
          Server.
        </li>
      </ul>
      <p>
        This project demonstrates fundamental concepts of modern web
        development, including component-based UI design, routing with React
        Router, and state management with hooks.
      </p>
      <p>
        <strong>Purpose:</strong> Academic learning and practical understanding
        of building a complete CRUD (Create, Read, Update, Delete) application
        using React.
      </p>
    </div>
  );
}

export default About;
