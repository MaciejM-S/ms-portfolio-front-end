import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SchoolIcon from "@mui/icons-material/School";
const Details = ({
  place,
  field,
  companyLink,
  time,
  address,
  work,
  department,
}: {
  place?: string;
  field?: string;
  companyLink?: string;
  time?: string;
  address?: string;
  work?: string;
  department?: string;
}) => {
  return (
    <li
      className="my-8 first:mt-0 last
  :mb-0 w-[60%] mx-auto flex flex-col items-start justify-between relativer sm:w-[70%]"
    >
      <div className="w-6 h-6 absolute left-[21.5px] bg-dark border-solid border-2 rounded-full border-light dark:bg-light dark:border-dark sm:left-[7px] sm:w-5 sm:h-5  " />
      <div>
        <h2 className="font-bold text-2xl flex 2xl:flex-col md:text-lg">
          <a href={companyLink} target="_blank">
            {place}&nbsp;{" "}
          </a>{" "}
        </h2>

        <h2 className="flex 2xl:flex-col text-2xl md:text-lg font-bold text-primary dark:text-secondary mt-2 ">
          {department}&nbsp;{" "}
        </h2>

        <h2 className="my-4 font-bold opacity-80">{field}</h2>

        <span className=" capitalize font-medium text-dark/75 px-0 mx-0 dark:text-light/75">
          {time}
        </span>
        <span className="capitalize font-medium text-dark/75 ml-2">
          {address}
        </span>
      </div>
    </li>
  );
};

type EdcuationProps = {
  width: number;
};

function Education(props: EdcuationProps) {
  return (
    <>
      <div className="my-64 sm:my-40">
        <h2 className="font-bold text-7xl mb-32 w-full text-center md:text-6xl sm:text-5xl xs:text-4xl sm:mb-20">
          Education
        </h2>
        <div className="w-[75%] mx-auto relative sm:w-full ">
          <div className="absolute left-8 top-0 w-[4px] h-full bg-dark dark:bg-light sm:left-[16px] sm:w-[2px]" />

          <ul className="w-full flex flex-col items-start justify-between ml-4">
            <Details
              place="Wrocław University of Science and Technology"
              companyLink="https://pwr.edu.pl/en/"
              field="MSc in Management"
              address="| Wrocław  "
              time="2010"
              department="The Department of IT and Management"
            />
            <Details
              place="Military University of Land Forces"
              companyLink="https://www.wojsko-polskie.pl/awl"
              field="BSc in Management and Marketing"
              address="| Wrocław  "
              time="2008"
              department="The Department of Fundamental Problems of Technology"
            />
          </ul>
          <div className="text-primary dark:text-secondary">
            <SchoolIcon
              sx={{
                fontSize: 45,
                position: "absolute",
                left: props.width < 630 ? -5 : 10,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Education;
