import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import styles from "./EditEmployeeCard.module.css";

function EditEmployeeCard(props) {
  const { updateEmployee, employeeData } = props;
  const { id } = useParams();

  const location = useLocation();
  const employee =
    location.state?.employee ||
    employeeData.find((emp) => emp.id === Number(id));

  if (!employee) {
    return <p>Employee not found!</p>;
  }

  const navigate = useNavigate();

  const [isEditing, setEditing] = useState(true);
  const [formData, setFormData] = useState({ ...employee });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateEmployee(formData.id, formData);
    setEditing(false);
    navigate("/EmployeeList");
  };

  return (
    <div className={styles.employeeCard}>
      <p>Id: {formData.id}</p>

      {isEditing ? (
        <>
          <form onSubmit={handleSave}>
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

            <select
              name="animal"
              id="animal"
              value={formData.animal}
              onChange={handleChange}
            >
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

            <textarea
              type="textarea"
              placeholder="skills"
              value={formData.skills}
              onChange={handleChange}
              name="skills"
            />

            <button type="submit">Save</button>
          </form>
          <button onClick={() => navigate("/EmployeeList")}>cancel</button>
        </>
      ) : (
        <>
          <p>Cancel</p>
        </>
      )}
    </div>
  );
}

export default EditEmployeeCard;
