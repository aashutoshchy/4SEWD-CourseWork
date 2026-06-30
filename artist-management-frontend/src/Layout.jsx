import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Overlay from "./components/Overlay";

function Layout() {
  return (
    <>
      <Overlay />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
