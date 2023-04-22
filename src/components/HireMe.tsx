import { Link } from "react-router-dom";
import { WebDevelopmentSvg } from "../pub/vectors";

function HireMe() {
  return (
    <>
      <div className="fixed bottom-4 right-5 flex items-center justify-center overflow-hidden">
        <Link
          to="mailto:siuda.maciej@wp.pl"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-solid border-2 border-transparent w-20 h-20 rounded-full 
          font-semibold hover:bg-light hover:text-dark hover:border-dark z-50
 "
        >
          Hire Me
        </Link>
        <WebDevelopmentSvg className={""} />
      </div>
    </>
  );
}

export default HireMe;
