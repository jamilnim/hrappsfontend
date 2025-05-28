import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addemployee.css";
import axios from "axios";

function AddEmployee({ onAddEmployee }) {
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

    axios
      .post("http://localhost:3001/employees", newemployee)
      .then((res) => {
        onAddEmployee(res.data);
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
      <div className="headContainer">
        <h1>Add New Employee</h1>{" "}
      </div>
      <div className="bodyContainer">
        <div className="inputContainer">
          <form onSubmit={handleSubmit}>
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
              type="number"
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
        </div>
      </div>
    </>
  );
}

export default AddEmployee;
