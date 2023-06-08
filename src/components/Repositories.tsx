import React, { useState } from "react";
import { useSpring, animated, useTransition } from "@react-spring/web";
import GitHubIcon from "@mui/icons-material/GitHub";
import useMeasure from "react-use-measure";
import "./buttons.css";
import { Link } from "react-router-dom";

type RepositoriesProps = {
  githubLink: { public: boolean; frontEnd?: string; backEnd?: string };
};

const Repositories = (props: RepositoriesProps) => {
  const [showButtons, setShowButtons] = useState(false);

  const handleButtonClick = () => {
    setShowButtons(!showButtons);
  };

  const buttonContainerAnimation = useSpring({
    opacity: showButtons ? 1 : 0,
    marginTop: showButtons ? 0 : 20,
    scale: showButtons ? 1 : 0.9,
    from: { opacity: 0, marginTop: 20 },
    config: { tension: 1000, friction: 100, mass: 2 },
  });
  return (
    <div className="flex  ml-4 lg:ml-2  2xl:pt-4 xl:pt-0 md:py-4">
      <div
        className={`button-animation flex  overflow-hidden h-[70px] ${
          showButtons ? " w-[250px] sm:w-[190px]" : " w-[25px]"
        } items-center`}
        onMouseEnter={() => {
          setShowButtons(true);
        }}
        onMouseLeave={() => {
          setShowButtons(false);
        }}
      >
        <button className="show">
          <GitHubIcon
            sx={{ fontSize: 25 }}
            onClick={() => {
              setShowButtons(true);
            }}
          />
        </button>
        {showButtons && (
          <animated.div
            className="button-container flex flex-col p-0 m-0"
            style={buttonContainerAnimation}
          >
            <Link
              className="animated-button show pl-4 py-1  sm:text-sm hover:underline"
              to={props.githubLink.frontEnd||''}
              target={"_blank"}
            >
              Frontend Repository
            </Link>
            <Link
              className="animated-button show pl-4 py-1 sm:text-sm hover:underline"
              to={props.githubLink.backEnd||''}
              target={"_blank"}
            >
              Backend Repository
            </Link>
          </animated.div>
        )}
      </div>
    </div>
  );
};

export default Repositories;
