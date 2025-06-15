import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Addemployee.module.css";
import axios from "axios";
import useAxios from "../hooks/useAxios";

function AddEmployee({ onAddEmployee }) {
  const { post } = useAxios();
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    salary: "",
    phone: "",
    email: "",
    animal: "",
    startDate: "",
    location: "",
    department: "",
    skills: [""],
  });
  const navigate = useNavigate();
  const goback = () => {
    navigate("/EmployeeList");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newemployee = {
      ...formData,
      salary: parseFloat(formData.salary),
      leadership: false,
      workingStatus: true,
    };

    post("/employees", newemployee)
      .then((res) => {
        onAddEmployee({ ...res.data, leadership: false, workingStatus: false });
        navigate("/EmployeeList");
        setFormData({
          name: "",
          title: "",
          salary: "",
          phone: "",
          email: "",
          animal: "",
          startDate: "",
          location: "",
          department: "",
          skills: "",
        });
      })
      .catch((err) => {
        console.error("Failed to add book:", err);
      });
  };

  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.inputContainer}>
          <form onSubmit={handleSubmit}>
            <h2>Add New Employee</h2>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              name="title"
            />
            <input
              type="number"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleChange}
              name="salary"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              name="phone"
            />
            <input
              type="text"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            <select name="animal" id="animal" onChange={handleChange}>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
            </select>
            <input
              type="date"
              placeholder="anstartDateimal"
              value={formData.startDate}
              onChange={handleChange}
              name="startDate"
            />
            <input
              type="text"
              placeholder="location"
              value={formData.location}
              onChange={handleChange}
              name="location"
            />
            <input
              type="text"
              placeholder="department"
              value={formData.department}
              onChange={handleChange}
              name="department"
            />
            <input
              type="textarea"
              placeholder="skills"
              value={formData.skills}
              onChange={handleChange}
              name="skills"
            />
            <button type="submit">Add new employee</button>
          </form>
          <button className={styles.cancelbtn} onClick={goback}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default AddEmployee;
