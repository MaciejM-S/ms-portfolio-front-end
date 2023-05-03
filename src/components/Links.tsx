import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import { UserContext } from "../contexts/userContext";


const linkContainerCN = " hover:translate-y-[-2px] duration-200"


function Links() {
  const userContext = React.useContext(UserContext);
  const iconStyle = { color:userContext.theme==='light'? '#1b1b1b':'#f5f5f5' }
  return (

      <div className="flex" >
        <div  className={userContext.theme==='light'?`${linkContainerCN} ml-2 lg:text-light`:`${linkContainerCN} ml-2 text-dark`}>
          <Link to="/" target={"_blank"}>
            <LinkedInIcon sx={iconStyle} />
          </Link>
        </div>
        <div className={userContext.theme==='light'?`${linkContainerCN} ml-2 lg:text-light`:`${linkContainerCN} ml-2 text-dark`} >
          <Link to="/" target={"_blank"}>
            <GitHubIcon sx={iconStyle} />
          </Link>
        </div>
      </div>
  );
}

export default Links;
