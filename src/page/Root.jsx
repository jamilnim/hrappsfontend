import Header from "../component/header/Header";
import { Outlet } from "react-router";

import React from "react";

function Root() {
  return (
    <div>
      <Header name="Employee Management" />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
