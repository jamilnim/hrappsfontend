import Header from "../component/header/Header";
import { Outlet } from "react-router";

import React from "react";
import Footer from "../component/footer/Footer";

function Root() {
  return (
    <div>
      <Header name="Employee Management" />
      <main>
        <Outlet />
      </main>
      <Footer name="EM" />
    </div>
  );
}

export default Root;
