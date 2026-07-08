import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Overlay from "../pages/Overlay";

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
