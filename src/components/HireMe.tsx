import { Link } from "react-router-dom";
import { WebDevelopmentSvg } from "../pub/vectors";
import { WebDevelopmentSvgWhite } from "../pub/vectors";
import React from "react";
import { UserContext } from "../contexts/userContext";

function HireMe() {
  const userContext = React.useContext(UserContext);

  return (
    <>
      <div className="fixed bottom-3 right-5 flex items-center w-70 justify-center overflow-hidden lg:hidden ">
        <Link
          to="mailto:siuda.maciej@wp.pl"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-solid border-2 border-transparent w-20 h-20 rounded-full 
          font-semibold hover:bg-light hover:text-dark hover:border-dark z-50  dark:text-dark dark:bg-light border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
        >
          Hire Me
        </Link>
        {userContext.theme === "light" ? (
          <WebDevelopmentSvg className={""} />
        ) : (
          <WebDevelopmentSvgWhite className={""} />
        )}
      </div>
    </>
  );
}

export default HireMe;
