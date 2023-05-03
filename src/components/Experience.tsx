import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import React from "react";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: {
  position?: string;
  company?: string;
  companyLink?: string;
  time?: string;
  address?: string;
  work?: string;
}) => {
  return (
    <li
      className="my-8 first:mt-0 last
  :mb-0 w-[60%] mx-auto flex flex-col items-start justify-between sm:w-[70%] sm:text-sm xs:w-[80%]"
    >
      <div className="w-6 h-6 absolute left-[21.5px] bg-dark border-solid border-2 rounded-full border-light dark:bg-light dark:border-dark sm:left-[7px] sm:w-5 sm:h-5"></div>
      <div>
        <h2 className="capitalize font-bold text-2xl flex 2xl:flex-col md:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary dark:text-secondary"
          >
            {company}
          </a>
        </h2>
        <span className="capitalize font-medium text-dark/75 px-0 mx-0 dark:text-light/75">
          {time}
        </span>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

type ExperienceProps = {
  width:number
}

function Experience(props:ExperienceProps) {
  return (
    <>
      <div className="my-64 sm:my-40">
        <h2 className="font-bold text-7xl mb-32 w-full text-center md:text-6xl sm:text-5xl xs:text-4xl sm:mb-20">
          Experience
        </h2>
        <div className="w-[75%] mx-auto relative sm:w-full ">
          <div className="absolute left-8 top-0 w-[4px] h-full bg-dark dark:bg-light sm:left-[16px] sm:w-[2px]" />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            <Details
              position="staff officer/specialist"
              companyLink="www.google.com"
              company="Ministry Of Defence"
              address="Rzeszów | Kraków | Siedlce"
              time="2010-present"
              work=""
            />
            <Details
              position="front-end developer - part time job"
              companyLink="www.google.com"
              company="devops"
              address="Remote"
              time="2022-present"
              work="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores soluta, autem error, nesciunt et incidunt voluptatibus aspernatur iusto ad alias optio earum suscipit! Est id, possimus ut odio magnam animi?"
            />
          </ul>
          <div className="text-primary dark:text-secondary">
            <WorkHistoryIcon
              sx={{ fontSize: 45, position: "absolute", left: props.width<630?-5:10 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
