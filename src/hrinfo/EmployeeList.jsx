import React from "react";
import EmployeeCard from "./Employeecard";
import styles from "./EmployeeList.module.css";
import { useState } from "react";

const EmployeeList = ({
  employeeData,
  setEmployeeData,
  onToogleChanged,
  ondeleteemployee,
  onSalarychange
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [showifLeaderonly, setshowifLeaderonly] = useState(false);
  const [showInwork, setshowInwork] = useState(false);
  const [showsearchOptions, setshowsearchOptions] = useState(false);

  const searchHandle = (event) => {
    setSearchValue(event.target.value);
  };

  const filteremployees = employeeData.filter((employee) => {
    const search = searchValue.toLowerCase();
    const matchesSearch =
      (employee.title?.toLowerCase().includes(search) ||false)||
      employee.name?.toLowerCase().includes(search)||false;

    const ifLeader = showifLeaderonly ? employee.leadership : true;
    const inwork = showInwork ? employee.workingStatus : true;

    return matchesSearch && ifLeader && inwork;
  });

  return (
    <>
      {showsearchOptions ? (
        <div className={styles.searchBox}>
          <div>
            <label className={styles.searchIcon} htmlFor="search">
              🔍
            </label>
            <input
              type="text"
              id="search"
              className={styles.search}
              name="search"
              value={searchValue}
              onChange={searchHandle}
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="Leadership"
              checked={showifLeaderonly}
              onChange={() => setshowifLeaderonly((prev) => !prev)}
            />
            <label htmlFor="Leadership"> Show only Leaders</label>

            <input
              type="checkbox"
              id="workingStatus"
              checked={showInwork}
              onChange={() => setshowInwork((prev) => !prev)}
            />
            <label htmlFor="workingStatus"> working Only</label>
          </div>
          <button
            className={styles.searchOptionBtn}
            onClick={() => setshowsearchOptions((prev) => !prev)}
          >
            ➖
          </button>
        </div>
      ) : (
        <button
          className={styles.searchOptionBtn}
          onClick={() => setshowsearchOptions((prev) => !prev)}
        >
          ➕
        </button>
      )}

      <div className={styles.cardContainer}>
        <div className={styles.desplayCard}>
          {filteremployees.length > 0 ? (
            filteremployees.map((employee) => (
              <EmployeeCard
                key={employee.id}
                {...employee}
                onToggleadership={() =>
                  onToogleChanged(employee.id, "leadership")
                }
                onToggleworkstatus={() =>
                  onToogleChanged(employee.id, "workingStatus")
                }
                ondelete={() => ondeleteemployee(employee.id)}
                onSalarychange={(id,newSalary)=>onSalarychange(id,newSalary)}
              />
            ))
          ) : (
            <p> No employee found.Try again</p>
          )}
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
