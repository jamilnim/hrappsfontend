import Header from "../component/header/Header";
import { Outlet } from "react-router";

import React from "react";
import Footer from "../component/footer/Footer";

function Root() {
  return (
    <div>
      <Header name="HR Management" />
      <main>
        <Outlet />
      </main>
      <Footer  />
    </div>
  );
}

export default Root;
