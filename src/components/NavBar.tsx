import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import Links from "./Links";

const spanClassName =
  "h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300";

function NavBar() {

  const location = useLocation();

  return (
    <>
      <header className="w-full px-32  py-8 font-medium  flex items-center  justify-between">
        <nav>
          <Link to="/" className="group mr-4  relative">
            Home
            <span className={`${spanClassName} ${location.pathname==='/'?'w-full':'w-0'}`}>&nbsp;</span>
          </Link>
          <Link to="/about" className="group mx-4 relative">
            About
            <span className={`${spanClassName} ${location.pathname==='/about'?'w-full':'w-0'}`}>&nbsp;</span>
          </Link>
          <Link to="/projects" className="group ml-4 relative">
            Projects
            <span className={`${spanClassName} ${location.pathname==='/projects'?'w-full':'w-0'}`}>&nbsp;</span>
          </Link>
        </nav>
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
        <nav>
          <Links/>
         
        </nav>
      </header>
    </>
  );
}

export default NavBar;
