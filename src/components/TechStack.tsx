import CodeIcon from "@mui/icons-material/Code";
const liClassName =
  "bg-light text-dark border-2 w-[100px] font-semibold text-center border-dark border-solid m-1 py-1 rounded-lg h-8  text-sm";

type TechStackProps = {
  frontEnd:string[],
  backEnd:string[]
}

function TechStack(props:TechStackProps) {
  
  
  return (<>
    <div className="mr-12 ml-20 -mt-8 mb-4" >
            <div className="capitalize font-semibold text-primary text-lg ">
              {" "}
              {/* <CodeIcon /> */}
             Tech Stack
            </div>
            <div>
              <div className="flex items-center  justify-start mb-4">
                <div className="w-[130px] ">front-end:</div>
                <ul className="flex flex-wrap w-full ">
                  {props.frontEnd.map((tech) => (
                    <li className={liClassName}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-star">
                <div className="w-[130px]">back-end:</div>
                <ul className="flex flex-wrap w-full ">
                  {props.backEnd.map((tech) => (
                    <li className={liClassName}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
  </>  );
}

export default TechStack;