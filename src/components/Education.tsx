import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SchoolIcon from "@mui/icons-material/School";
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
  :mb-0 w-[60%] mx-auto flex flex-col items-start justify-between relativer "
    >
      <div className="w-5 h-5 absolute left-[24px] bg-dark border-dark border-solid border-2 rounded-full"></div>
      <div className="bg-yellow">
        <h3 className="capitalize font-bold text-2xl ">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary"
          >
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 px-0 mx-0">
          {time}
        </span>
        <span className="capitalize font-medium text-dark/75 ">{address}</span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

function Education() {
  return (
    <>
      <div className="my-64">
        <h2 className="font-bold text-6xl mb-32 w-full text-center">
          Education
        </h2>
        <div className="w-[75%] mx-auto relative">
          <div className="absolute left-8 top-0 w-[4px] h-full bg-dark " />

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
          <div className="text-primary">
            <SchoolIcon sx={{ fontSize: 45, position: "absolute", left: 10 }} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Education;
