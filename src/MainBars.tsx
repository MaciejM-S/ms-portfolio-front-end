import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { UserProvider } from "./contexts/userContext";
import PageTransition from "./components/PageTransition";

function MainBars() {
  return (
    <>
      <UserProvider>
        <NavBar />
       
          <Outlet />
          <Footer />
     
      </UserProvider>
    </>
  );
}
export default MainBars;
