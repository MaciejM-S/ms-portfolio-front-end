import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import Links from "./Links";
import useModeSwitcher from "./customHooks/useModeSwitcher";
import { FormControlLabel } from "@mui/material";
import ThemeSwitcher from "./ThemeSwitcher";
import { UserContext } from "../contexts/userContext";
import React from "react";
import AnimatedNavigation from "./AnimatedNavigation";

const rowClassName =
  "bg-dark block h-0.5 w-7 rounded-sm dark:bg-light transition-all duration-400 ";
const spanClassName =
  "h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light";

type MobileLink = { name: string; url: string; handleBurger: () => void };

const MobileLink = (props: MobileLink) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (url: string) => {
    navigate(url);
    props.handleBurger();
  };

  return (
    <button
      onClick={() => {
        handleClick(props.url);
      }}
      className="group relative font-semibold text-light border-b-light dark:text-dark dark:border-dark my-2"
    >
      {props.name}
      <span
        className={` h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${
          location.pathname === props.url ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

function NavBar() {
  const location = useLocation();
  const [theme, setTheme] = useModeSwitcher();
  const [openMobile, setOpenMobile] = useState(false);
  const userContext = React.useContext(UserContext);
  const handleBurger = () => {
    setOpenMobile(!openMobile);
  };

  const handleMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
    userContext.setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    window.localStorage.currentMode === "light"
      ? userContext.setTheme("light")
      : userContext.setTheme("dark");
  }, []);

  return (
    <>
      <header className="w-full px-40 py-8 font-medium  flex items-center  justify-between dark:text-light xl:px-24 lg:px-16 md:px-12 sm:px-8 ">
        <button
          className="flex-col justify-center items-center hidden lg:flex pt-4 -translate-y-2"
          onClick={handleBurger}
        >
          <span
            className={`${rowClassName}  ${
              openMobile
                ? "rotate-45 translate-y-2"
                : "rotate-0 -translate-y-0.5"
            } `}
          >
            {" "}
          </span>
          <span
            className={`${rowClassName} ${
              openMobile ? "opacity-0" : ""
            } my-0.5`}
          >
            {" "}
          </span>
          <span
            className={`${rowClassName}${
              openMobile
                ? "-rotate-45 -translate-y-1."
                : "rotate-0 translate-y-0.5"
            } `}
          >
            {" "}
          </span>
        </button>

        <div className="absolute left-[50%] top-2 translate-x-[-50%] md:scale-75">
          <Logo theme={theme} />
        </div>
        <div className="hidden lg:inline-block">
          <Links />
        </div>
        {/* desktop navigation */}
        <div className="flex items-center w-full lg:hidden">
          <nav>
            <Link to="/" className="group mr-4  relative font-semibold">
              Home
              <span
                className={`${spanClassName} ${
                  location.pathname === "/" ? "w-full" : "w-0"
                }`}
              >
                &nbsp;
              </span>
            </Link>
            <Link to="/about" className="group mx-4 relative font-semibold">
              About
              <span
                className={`${spanClassName} ${
                  location.pathname === "/about" ? "w-full" : "w-0"
                }`}
              >
                &nbsp;
              </span>
            </Link>
            <Link to="/projects" className="group mx-4 relative font-semibold">
              Projects
              <span
                className={`${spanClassName} ${
                  location.pathname === "/projects" ? "w-full" : "w-0"
                } `}
              >
                &nbsp;
              </span>
            </Link>
            <Link to="/contact" className="group ml-4 relative font-semibold">
              Contact
              <span
                className={`${spanClassName} ${
                  location.pathname === "/contact" ? "w-full" : "w-0"
                } `}
              >
                &nbsp;
              </span>
            </Link>
          </nav>

          <nav className="flex items-center ml-auto">
            <div>
              <Links />
            </div>
            <div className="ml-12">
              <FormControlLabel
                control={
                  <ThemeSwitcher
                    // mode={theme}
                    checked={theme === "dark"}
                    onClick={handleMode}
                  />
                }
                label=""
              />
            </div>
          </nav>
        </div>

        {/* mobile navigation  */}
        {openMobile && (
          <AnimatedNavigation>
            <div className="min-w-[70vw] hidden z-50 flex-col justify-between items-center lg:flex  bg-dark/90 dark:bg-light/80 rounded-lg backdrop-blur-md py-36">
              <nav className="flex  flex-col items-center justify-center">
                <MobileLink name="Home" url="/" handleBurger={handleBurger} />
                <MobileLink
                  name="About"
                  url="/about"
                  handleBurger={handleBurger}
                />
                <MobileLink
                  name="Projects"
                  url="/projects"
                  handleBurger={handleBurger}
                />
                <MobileLink
                  name="Contact"
                  url="/contact"
                  handleBurger={handleBurger}
                />
              </nav>

              <nav className="flex items-center ml-auto lg:ml-0 mt-2">
                <div className="ml-12 lg:ml-7">
                  <FormControlLabel
                    control={
                      <ThemeSwitcher
                        // mode={theme}
                        checked={theme === "dark"}
                        onClick={handleMode}
                      />
                    }
                    label=""
                  />
                </div>
              </nav>
            </div>
          </AnimatedNavigation>
        )}
      </header>
    </>
  );
}

export default NavBar;
