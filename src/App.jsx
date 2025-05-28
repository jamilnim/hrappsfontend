import axios from "axios";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./component/header/Header";
import EmployeeList from "./hrinfo/EmployeeList";
import Root from "./page/Root";
import About from "./page/About";
import AddEmployee from "./page/AddEmployee";

import { useEffect, useState } from "react";
import EditEmployeeCard from "./page/EditEmployeeCard";

const App = () => {
  const [employeeData, setEmployeeData] = useState([]);

  // all data extract
  useEffect(() => {
    axios
      .get("http://localhost:3001/employees/")
      .then((res) => setEmployeeData(res.data))
      .catch((err) => console.error("Failed to fathc book", err));
  }, []);

  // adding new data with all data

  const addEmployeeHandler = (newemployee) => {
    setEmployeeData((prev) => [
      ...prev,
      {
        ...newemployee,
        id: Date.now(),
      },
    ]);
  };

  //  brining one object mathing with id and cahnge it (upate) as changing all data of object
  // SO put

  const updateEmployee = (id, updateData) => {
    axios
      .put(`http://localhost:3001/employees/${id}`, updateData)
      .then((res) =>
        setEmployeeData((prev) =>
          prev.map((emp) => (emp.id === id ? res.data : emp))
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
    axios
      .patch(`http://localhost:3001/employees/${id}`, updateField)
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

  // router for Root and child
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/about", element: <About /> },
        {
          path: "/EmployeeList",
          element: (
            <EmployeeList
              employeeData={employeeData}
              setEmployeeData={setEmployeeData}
              onToogleChanged={handleToggleField}
            />
          ),
        },
        {
          path: "/add",
          element: <AddEmployee onAddEmployee={addEmployeeHandler} />,
        },

        {
          path: "/edit",
          element: <EditEmployeeCard updateEmployee={updateEmployee} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
