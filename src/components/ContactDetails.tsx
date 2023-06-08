import CallIcon from "@mui/icons-material/Call";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PlaceIcon from "@mui/icons-material/Place";
import React from "react";
import { UserContext } from "../contexts/userContext";

const detailClassName = "flex text-lg xs:text-base";

function ContactDetails() {
  const user = React.useContext(UserContext);
  const iconStyle = {
    mr: 2,
    color: user.theme === "light" ? "#B63E96" : "#58E6D9",
  };
  return (
    <>
      <div className="text-2xl font-semibold  my-2 mb-4 lg:text-center">
        Contact me
      </div>
      <div className="relative bg-light flex flex-col justify-around w-[300px] h-[235px] rounded-xl p-5 z-0 opacity-100 dark:bg-dark lg:mx-auto xs:w-[240px] xs:p-4 ">
        <div className="absolute top-0 left-0 -z-10 w-[100%] h-[100%]  rounded-[1rem] bg-light  border-2 border-solid border-dark dark:bg-dark dark:border-light" />
        <div className="absolute top-1 left-1 -z-20 w-[101.5%] h-[101.5%]  rounded-[1rem] rounded-br-2xl bg-dark dark:bg-light md:h-[101.25%] " />

        <div className={detailClassName}>
          <CallIcon sx={iconStyle} /> +48 519 103 453
        </div>
        <div className={detailClassName}>
          {" "}
          <AlternateEmailIcon sx={iconStyle} /> siuda.maciej@wp.pl
        </div>
        <div className={detailClassName}>
          {" "}
          <PlaceIcon sx={iconStyle} /> Kraków / Krzeszowice
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
