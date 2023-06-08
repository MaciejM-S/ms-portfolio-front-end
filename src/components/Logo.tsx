import { Link, useLocation, useNavigate } from "react-router-dom";
import logoWhite from "./../pub/logo-white.png";
import logoBlack from "./../pub/logo-black.png";
import { UserContext } from "../contexts/userContext";
import React from "react";

type LogoProps = { theme: string };

function Logo(props: LogoProps) {
  const { setRerender } = React.useContext(UserContext);
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/") {
      setRerender(new Date().getTime());
    }
  };

  return (
    <>
      <div className="transition duration-500 ease-in-out flex items-center justify-center mt-2 hover:scale-110">
        <Link
          to="/"
          className="w-20 h-20 text-light flex items-center justify-center rounded-full text-2xl font-bold opacity-90"
          onClick={handleClick}
        >
          {props.theme === "light" ? (
            <img src={logoBlack} alt="" />
          ) : (
            <img src={logoWhite} alt="" />
          )}
        </Link>
      </div>
    </>
  );
}

export default Logo;
