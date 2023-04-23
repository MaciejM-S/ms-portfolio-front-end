import React, { useEffect, useRef, useState } from "react";
import planet from "../pub/planet.png";
import { useSpring, animated, useInView } from "@react-spring/web";
import { BlackHoleSVG } from "../pub/vectors";
const branchClass =
  "bg-light text-dark font-semibold border-dark border-2 border-solid rounded-lg p-1";

type AFprops = {
  x: number;
  y: number;
  name: string;
};

const backendSkills = ["node.js", "Express", "mongoDB", "MySQL", "graphQL"];
const frontendSkills = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  'TypeScript',
  "React.js",
  "Redux",
  "MUI",
  "Tailwind CSS",
  "RWD",
];
const otherSkills = ["GIT", "restAPI", "Figma", "Jest"];

function Skills() {
  const mainRef = useRef<HTMLDivElement>(null);

  function AnimatedFeature(props: AFprops) {
    const [animate, setAnimate] = useState(false);
    const [showComponent, setShowComponent] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (mainRef.current) {
          document.documentElement.scrollTop +
            window.innerHeight -
            0.6 * window.innerHeight >
          mainRef.current.offsetTop
            ? setAnimate(true)
            : setAnimate(false);
        }
      });
    }, []);

    const animatedProps = useSpring({
      from: { left: "45%", top: "47%" },
      to: {
        left: animate ? props.x + "%" : "45%",
        top: animate ? props.y + "%" : "47%",
      },
      config: {
        mass: 20,
        tension: 1000,
        friction: 150,
      },
    });

    return (
      <animated.div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "black",
          color: "white",
          border: "1px solid black",
          padding: "3px 8px",
          borderRadius: "10px",
          width: "120px",

          ...animatedProps,
        }}
      >
        <div className="width-auto">{props.name} </div>
      </animated.div>
    );
  }

  return (
    <>
      <div ref={mainRef}>
        <h2 className="font-bold text-7xl mt-40 w-full text-center">Skills</h2>
        <div className="w-3/4 mx-auto h-screen relative flex items-center justify-cneter rouned-full bg-gradientLight mt-10">
          <img
            src={planet}
            className="absolute left-[50%] -translate-x-[50%] w-1/3 h-auto z-10"
          />
          <div className={`${branchClass} absolute left-[5%] top-[20%]`}>
            BACK END
          </div>
          <div className={`${branchClass} absolute left-[83.5%] top-[20%]`}>
            FRONT END
          </div>
          <div
            className={`${branchClass} absolute bottom-40 left-[50%] -translate-x-[50%]`}
          >
            OTHER
          </div>

          {/* FRONTEND */}
          {frontendSkills.map((skill, index) => (
            <AnimatedFeature y={index * 6 + 28} x={83} name={skill} />
          ))}

          {backendSkills.map((skill, index) => (
            <AnimatedFeature y={index * 6 + 28} x={4} name={skill} />
          ))}

          {otherSkills.map((skill, index) => (
            <AnimatedFeature y={index * 6 + 85} x={44} name={skill} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
