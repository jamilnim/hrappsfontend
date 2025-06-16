import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./EmployeeCard.module.css";

const EmployeeCard = ({
  id,
  name,
  title,
  salary,
  phone,
  email,
  animal,
  startDate,
  location,
  department,
  skills,
  leadership,
  workingStatus,
  onToggleadership,
  onToggleworkstatus,
  ondelete,
  onSalarychange,
}) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const [newsalary, setNewsalary] = useState(salary);

  const handleEdit = () => {
    navigate(`/edit/${id}`, {
      state: {
        employee: {
          id,
          name,
          title,
          salary,
          phone,
          email,
          animal,
          startDate,
          location,
          department,
          skills,
          leadership,
          workingStatus,
        },
      },
    });
  };

  const [isEditing, setIsEditing] = useState(false);

  const yearsWorked = (() => {
    const start = new Date(startDate);
    const now = new Date();
    return Math.max(0, now.getFullYear() - start.getFullYear());
  })();

  const handleSave = () => {
    onSalarychange(id, parseFloat(newsalary));
    alert("Data saved");
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewsalary(salary);
    setIsEditing(false);
  };

  const isSaveDisabled =
    newsalary === "" || parseFloat(newsalary) === parseFloat(salary);

  const workStatusIcon = workingStatus ? "👷‍♀️" : "🏖️🌊✈️";
  const animalEmoji =
    animal?.toLowerCase() === "dog"
      ? "🐶"
      : animal?.toLowerCase() === "cat"
      ? "🐱"
      : animal?.toLowerCase() === "bird"
      ? "🐦"
      : "🐾";

  return (
    <div className={styles.employeeCard}>
      {/* Top-left: Leader status */}
      <button
        className={leadership ? styles.leadmyself : styles.leaderohter}
        onClick={onToggleadership}
      >
        {leadership ? "Lead other 👑" : "Lead Myself 🙋‍♂️"}
      </button>

      {/* Top-right: Status icon */}
      <div
        className={styles.statusIcon}
        onClick={onToggleworkstatus}
        title="Toggle Working Status"
      >
        Work Status {workStatusIcon}
      </div>
      <p className={styles.employeeText}>
        🎉 Yearcompleted {yearsWorked} year{yearsWorked !== 1 ? "s" : ""}!
      </p>

      {/*  small card salary edit button  */}

      {/* Top-right: Animal emoji */}
      <div className={styles.animalemoji}>{animalEmoji}</div>
      {/* Visible Info */}
      <div className={styles.dataContainer}>
        <div className={styles.key}>Id</div>
        <div className={styles.value}>{id}</div>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.key}>Name</div>
        <div className={styles.value}>{name}</div>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.key}>title</div>
        <div className={styles.value}> {title}</div>
      </div>
      {/* salary editing inbox in small card */}

      <div className={styles.salaryContainer}>
        {isEditing ? (
          <div className={styles.dataContainer}>
            <div className={styles.key}>Salary</div>

            <div className={styles.value}>
              {" "}
              <input
                className={styles.salaryInpu}
                type="number"
                placeholder="Salary"
                value={newsalary}
                onChange={(e) => setNewsalary(e.target.value)}
                name="salary"
              />
            </div>
          </div>
        ) : (
          <div className={styles.dataContainer}>
            <div className={styles.key}>Salary</div>
            <div className={styles.value}> ${salary}</div>
          </div>
        )}

        {isEditing ? (
          <>
            <button
              className={styles.salaryEditBtn}
              onClick={handleSave}
              disabled={isSaveDisabled}
            >
              💾
            </button>
            <button className={styles.salaryEditBtn} onClick={handleCancel}>
              ✖️
            </button>
          </>
        ) : (
          <button
            className={styles.secondary}
            onClick={() => setIsEditing(true)}
          >
            ✍️
          </button>
        )}
      </div>

      {/* Collapsible Extension */}
      {expanded && (
        <div className={styles.extention}>
          <div className={styles.dataContainer}>
            <div className={styles.key}>Phone</div>
            <div className={styles.value}>{phone}</div>
          </div>
          <div className={styles.dataContainer}>
            <div className={styles.key}>Email</div>
            <div className={styles.value}>{email}</div>
          </div>
          <div className={styles.dataContainer}>
            <div className={styles.key}>Start Date</div>
            <div className={styles.value}>{startDate}</div>
          </div>
          <div className={styles.dataContainer}>
            <div className={styles.key}>Location</div>
            <div className={styles.value}>{location}</div>
          </div>
          <div className={styles.dataContainer}>
            <div className={styles.key}>Department</div>
            <div className={styles.value}>{department}</div>
          </div>
          <div className={styles.dataContainer}>
            <div className={styles.key}>Skills</div>
            <div className={styles.value}>{skills}</div>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className={styles.buttoncontainer}>
        <button
          className={styles.actionBtn}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Less" : "More"}
        </button>
        <button className={styles.actionBtn} onClick={handleEdit}>
          Edit
        </button>

        <button className={styles.actionBtn} onClick={ondelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
