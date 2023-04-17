import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function MainBars() {
 
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer/>
    </>
  );
}
export default MainBars;
