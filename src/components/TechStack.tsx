import CodeIcon from "@mui/icons-material/Code";
const liClassName =
  "bg-light text-dark border-2 w-[100px] font-semibold text-center border-dark border-solid m-1 py-1 rounded-lg h-8  text-sm dark:bg-dark dark:border-light dark:text-light md:w-[85px] md:text-xs md:h-auto";

type TechStackProps = {
  frontEnd: string[];
  backEnd: string[];
};

function TechStack(props: TechStackProps) {
  return (
    <div className="mr-12 ml-20 -mt-8 mb-4 xl:w-2/3 lg:w-3/4 md:w-4/5 xl:m-0 xl:-mt-8 xl:mb-8 xl:mx-auto ">
      <div className="capitalize font-semibold text-primary text-lg dark:text-secondary my-2 xs:text-center">
        {" "}
        Tech Stack
      </div>
      <div className="flex items-center  justify-start mb-4 xs:flex xs:flex-col xs:text-center">
        <div className="w-[130px] md:w-[110px] md:mr-2">front-end:</div>
        <ul className="flex flex-wrap w-full xs:justify-center">
          {props.frontEnd.map((tech) => (
            <li className={liClassName}>{tech}</li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-star xs:flex xs:flex-col xs:text-center">
        <div className="w-[130px] md:w-[110px] md:mr-2">back-end:</div>
        <ul className="flex flex-wrap w-full xs:justify-center">
          {props.backEnd.map((tech) => (
            <li className={liClassName}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TechStack;
