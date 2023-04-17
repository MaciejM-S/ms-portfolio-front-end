import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


const linkContainerCN = " hover:translate-y-[-2px] duration-200"

function Links() {
  return (

      <div className="flex" >
        <div  className={linkContainerCN}>
          <Link to="/" target={"_blank"}>
            <LinkedInIcon />
          </Link>
        </div>
        <div className={`${linkContainerCN} ml-2`} >
          <Link to="/" target={"_blank"}>
            <GitHubIcon />
          </Link>
        </div>
      </div>
  );
}

export default Links;
