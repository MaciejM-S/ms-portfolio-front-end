import React, { useEffect, useRef, useState } from "react";
import planet from "../pub/planet.png";
import { useSpring, animated, useInView } from "@react-spring/web";
import { UserContext } from "../contexts/userContext";
const branchClass =
  "w-[130px] absolute bg-light text-dark font-semibold border-dark border-2 border-solid rounded-lg p-1 dark:bg-dark dark:text-light dark:border-light text-center sm:w-[85px] sm:text-xs sm:px-2 sm:h-[45px] sm:flex sm:align-center sm:justify-center sm:flex-col";

type AFprops = {
  x: number;
  y: number;
  name: string;
  translate?: boolean;
  backend?: boolean;
};

const backendSkills = ["node.js", "Express", "mongoDB", "MySQL", "graphQL"];
const frontendSkills = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Redux",
  "MUI",
  "Tailwind",
  "RWD",
];
const otherSkills = ["GIT", "restAPI", "Figma", "Jest"];

function Skills() {
  const mainRef = useRef<HTMLDivElement>(null);
  const userContext = React.useContext(UserContext);
  const [animate, setAnimate] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (mainRef.current) {
        document.documentElement.scrollTop +
          window.innerHeight -
          0.6 * window.innerHeight >
          mainRef.current.offsetTop && setAnimate(true);
      }
    });
  }, []);
  function AnimatedFeature(props: AFprops) {
    const animatedProps = useSpring({
      from: {
        left: props.x + "%",
        top: "10%",
        transform: props.translate ? "translateX(-50%)" : "",
        opacity: 0,
      },
      to: {
        left: props.x + "%",
        top: props.y * 1.5 + "%",
        opacity: 1,
      },
      config: {
        mass: 20,
        tension: 1000,
        friction: 150,
      },
    });

    return (
      <animated.div
        style={
          userContext.theme === "light"
            ? {
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "black",
                color: "#f5f5f5",
                border: "1px solid black",
                padding: width < 450 ? "3px 8px" : "3px 8px",
                borderRadius: "10px",
                width: width < 450 ? "80px" : "130px",
                fontWeight: 600,
                ...animatedProps,
              }
            : {
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#f5f5f5",
                color: "black",
                border: "1px solid #f5f5f5",
                padding: width < 450 ? "3px 8px" : "3px 8px",
                borderRadius: "10px",
                width: width < 450 ? "80px" : "130px",
                fontWeight: 600,
                ...animatedProps,
              }
        }
      >
        <div className="width-auto md:text-xs">{props.name}</div>
      </animated.div>
    );
  }

  return (
    <>
      <div ref={mainRef}>
        <h2 className="font-bold text-7xl mt-40 w-full text-center md:text-6xl sm:text-5xl xs:text-4xl">
          Skills
        </h2>
        <div className="w-3/5 mx-auto h-[60vh] relative flex items-center justify-cneter rounded-full bg-gradientLight mt-10 dark:bg-gradientDark md:w-full ">
          {/* <img
            src={planet}
            className="absolute left-[50%] -translate-x-[50%] bottom-0 w-1/3 h-auto z-10"
          /> */}

          <div
            className={`absolute left-[10%] top-[5%] -translate-x-[50%] ${branchClass}`}
          >
            BACK END
          </div>
          <div
            className={`absolute left-[90%] top-[5%] -translate-x-[50%] ${branchClass} `}
          >
            OTHER
          </div>
          <div
            className={` absolute left-[50%] top-[5%] -translate-x-[50%] ${branchClass}`}
          >
            FRONT END
          </div>
          {animate && (
            <div>
              {frontendSkills.map((skill, index) => (
                <AnimatedFeature
                  key={index}
                  y={index * 6 + 12}
                  x={50}
                  name={skill}
                  translate={true}
                />
              ))}

              {backendSkills.map((skill, index) => (
                <AnimatedFeature
                  key={index}
                  y={index * 6 + 12}
                  x={10}
                  name={skill}
                  translate={true}
                />
              ))}
              {otherSkills.map((skill, index) => (
                <AnimatedFeature
                  key={index}
                  y={index * 6 + 12}
                  x={90}
                  name={skill}
                  backend={false}
                  translate={true}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Skills;
