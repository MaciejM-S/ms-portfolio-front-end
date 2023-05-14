import { Link } from "react-router-dom";
import logoWhite from "./../pub/logo-white.png";
import logoBlack from "./../pub/logo-black.png";

type LogoProps = { theme: string };

function Logo(props: LogoProps) {
  return (
    <>
      <div className="transition duration-500 ease-in-out flex items-center justify-center mt-2 hover:scale-110">
        <Link
          to="mailto:siuda.maciej@wp.pl"
          className="w-20 h-20 text-light flex items-center justify-center rounded-full text-2xl font-bold opacity-90"
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
