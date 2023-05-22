import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { UserContext } from "../contexts/userContext";

const LoadingAnimation: React.FC = () => {
  const userContext = React.useContext(UserContext);

  const [width, setWidth] = React.useState(window.innerWidth)


  useEffect(()=>{
   window.addEventListener('resize', ()=>{
    setWidth(window.innerWidth)
   })
  }, [width])



  return (
    <div className="fixed w-[100%] top-[50%] -translate-y-[50%] flex justify-center">
      <ReactLoading
        delay={75}
        type="cylon"
        color={userContext.theme === "light" ? "#262626" : "#f5f5f5"}
        height={width>600?"20%":"40%"}
        width={width>600?"20%":"40%"}
      />
    </div>
  );
};

export default LoadingAnimation;
