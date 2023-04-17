import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import logoWhite from "./../pub/logo-white.png";
import logoBlack from "./../pub/logo-black.png";

function Logo() {
  return (
    <>
      <div className="transition duration-500 ease-in-out flex items-center justify-center mt-2 hover:scale-110">
        <Link
          to="/"
          className="w-20 h-20 text-light flex items-center justify-center rounded-full text-2xl font-bold opacity-90"
        >
          <img src={logoBlack} alt="" />
        </Link>
      </div>
    </>
  );
}

export default Logo;
