import useAxios from "./hooks/useAxios";
import axios from "axios";
import "./App.css";
import Header from "./component/header/Header";
import EmployeeList from "./hrinfo/EmployeeList";
import Root from "./page/Root";
import About from "./page/About";
import AddEmployee from "./page/AddEmployee";

import { useEffect, useState } from "react";
import EditEmployeeCard from "./page/EditEmployeeCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const { get, patch, remove } = useAxios();
  const [employeeData, setEmployeeData] = useState([]);

  // all data extract
  useEffect(() => {
    get("/employees")
      .then((res) => {
        setEmployeeData(res.data);
      })
      .catch((err) => console.error("Failed to fathc employeeinfo", err));
  }, []);

  // adding new data with all data

  const addEmployeeHandler = (newemployee) => {
    setEmployeeData((prev) => [...prev, newemployee, ,]);
  };

  //  brining one object mathing with id and cahnge it (upate) as changing all data of object
  // SO put

  const updateEmployee = (id, updateData) => {
    patch(`/employees/${id}`, updateData)
      .then((res) =>
        setEmployeeData((prev) =>
          prev.map((emp) => (emp.id === id ? { ...emp, ...res.data } : emp))
        )
      )

      .catch((err) => {
        console.error("Failed to fully update employee:", err);
      });
  };

  // toggle handlt function

  const handleToggleField = (id, fieldName) => {
    const employee = employeeData.find((b) => b.id === id);
    if (!employee) return;

    const updateField = { [fieldName]: !employee[fieldName] };

    patch(`employees/${id}`, updateField)
      .then((res) => {
        setEmployeeData((prev) =>
          prev.map((emp) => (emp.id === id ? res.data : emp))
        );
      })

      .catch((err) =>
        console.error(
          `Failed to update ${fieldName}
    :`,
          err
        )
      );
  };

  const ondeleteemployeehandeler = (id) => {
    remove(`/employees/${id}`)
      .then(() => {
        setEmployeeData((prev) => prev.filter((emp) => emp.id !== id));
      })
      .catch((err) => console.error("faild to delete employee:", err));
  };

  const handleSalaryChange = (id, newSalary) => {
    patch(`/employees/${id}`, {
      salary: newSalary,
    })
      .then((res) => {
        setEmployeeData((prev) =>
          prev.map((employee) => (employee.id === id ? res.data : employee))
        );
      })
      .catch((err) => {
        console.error("fail to update salary", err);
      });
  };

  return (
    // router for Root and child

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="about" element={<About />} />
          <Route
            path="EmployeeList"
            element={
              <EmployeeList
                employeeData={employeeData}
                setEmployeeData={setEmployeeData}
                onToogleChanged={handleToggleField}
                ondeleteemployee={ondeleteemployeehandeler}
                onSalarychange={handleSalaryChange}
              />
            }
          />
          <Route
            path="add"
            element={<AddEmployee onAddEmployee={addEmployeeHandler} />}
          />
          <Route
            path="edit/:id"
            element={
              <EditEmployeeCard
                updateEmployee={updateEmployee}
                employeeData={employeeData}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
