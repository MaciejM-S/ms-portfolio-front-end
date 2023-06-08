import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import { Link } from "react-router-dom";

import mrMockups from "../pub/mr-mockups.png";
import aMockups from "../pub/a-mockups.png";
import yeMockups from "../pub/ye-mockups.png";

import TechStack from "../components/TechStack";
import { useEffect } from "react";
import React from "react";
import PageTransition from "../components/PageTransition";
import LoadingAnimation from "../components/LoadingAnimation";
import Repositories from "../components/Repositories";
// import CodeOffIcon from "@mui/icons-material/CodeOff";

const Project = ({
  title,
  summary,
  link,
  githubLink,
  imgDesktop,
  dummyLogin,
  dummyPassword,
  frontEnd,
  backEnd,
  dummyData,
  imageCN
}: {
  type?: string;
  title: string;
  summary: string;
  link: string;
  githubLink: { public: boolean; frontEnd?: string; backEnd?: string };
  imgDesktop: any;
  dummyLogin?: string;
  dummyPassword?: string;
  frontEnd: string[];
  backEnd: string[];
  dummyData?: { remark: any; login: string; password: string };
  imageCN:string
}) => {
  return (
    <article className="w-full items-center justify-between border border-solid border-dark bg-light shadow-2xl py-16 relative rounded-3xl dark:bg-dark dark:border-light xl:my-16">
      <div className="absolute top-0 left-0 -z-10 w-[101%] h-[102%]  rounded-[2rem] bg-dark dark:bg-light md:h-[101.25%] " />
      <div className="flex overflow-hidden xl:flex-col xl:items-center">
        <h2 className="hidden my-2 w-full text-left text-4xl font-bold mb-8  xl:block xl:text-center xs:text-3xl">
          {title}
        </h2>
        <div className="w-2/3 xl:w-full xs:w-[100%]">
          <Link
            to={link}
            target="_blank"
            className=" cursor-pointer overflow-hidden rounded-lg "
          >
            <img
              src={imgDesktop}
              alt={title}
              className={`w-full h-auto dark:opacity-80 ${imageCN}`}
            />
          </Link>
          <TechStack frontEnd={frontEnd} backEnd={backEnd} />
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center pr-12 xl:w-2/3 lg:w-3/4 xl:pr-0">
          <Link to={link} className="hover:underline underline-offset-2"  target="_blank">
            <h2 className="my-2 w-full text-left text-4xl font-bold mb-8 xl:hidden">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark text-justify dark:text-light xs:text-sm">
            {summary}
          </p>
          <div>
            <div className="my-8 flex items-center xs:flex xs:flex-wrap 2xl:flex-col 2xl:items-start 2xl:my-4 xl:flex-row xl:items-center md:flex-col md:justify-center md:items-start md:my-2">
              <Link
                to={link}
                className={`ml-2 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:text-dark dark:bg-light dark:border-light xs:px-4 xs:text-base xs:mt-4 ${
                  githubLink.public ? "" : "mb-6"
                }`}
                target="_blank"
              >
                Visit the Project
              </Link>
              {githubLink.public && <Repositories githubLink={githubLink} />}
            </div>

            <div className="text-justify xs:text-sm">{dummyData?.remark}</div>
            {dummyData?.login && (
              <div className="text-dark my-2 dark:text-light">
                login:{" "}
                <span className=" font-semibold">{dummyData?.login}</span>
              </div>
            )}

            {dummyData?.password && (
              <div className="text-dark  my-2 dark:text-light">
                password:{" "}
                <span className=" font-semibold">{dummyData?.password}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

function Projects() {
  const [width, setWidth] = React.useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  const [pageLoaded, setPageLoaded] = React.useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPageLoaded(true);
    }, 1200);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta name="description" content="recent projects" />
        <link rel="canonical" href="/projects" />
      </Helmet>
      {!pageLoaded && <LoadingAnimation />}
      <PageTransition>
        <main
          className="w-full mb-16 flex flex-col items-center justify-center"
          style={
            pageLoaded
              ? { height: "auto" }
              : { overflow: "hidden", height: "100vh" }
          }
        >
          <Layout className="xs:!p-1">
            <div className="mb-24 xs:mb-0">
              <AnimatedText
                text="Imagination is only valuable when it's followed by action."
                centerClass={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginTop: width < 1250 ? `${0.1 * width - 10}px` : "-20px",
                }}
                className="!text-6xl xl:!text-5xl lg:!text-5xl  md:!text-4xl sm:!text-3xl xs:!text-2xl"
              />
            </div>

            <div className="grid grid-cols-12 gap-24  xl:block">
              <div className="col-span-12">
                <Project
                  title="Avion"
                  summary="Avion is a flight finder web application that allows users to easily search for the best flights from thousands of locations. 
                The platform quickly searches through a numerous flight options in real-time, providing users with the most current and accurate flight information available.
                In the Basic search section, users can quickly search for flights by entering basic details such as their departure and arrival cities and travel dates. 
                In the Advanced search section, users can refine their search results by filtering based on types of passengers and dates ranges."
                  dummyData={{
                    remark: (
                      <span className=" text-primary font-semibold dark:text-secondary">
                        Please note that, due to the commercial usage of this
                        application, I will not provide its code in a public
                        repository.
                      </span>
                    ),
                    login: "",
                    password: "",
                  }}
                  link="https://avion.onrender.com/"
                  type="featured project"
                  githubLink={{ public: false }}
                  imgDesktop={aMockups}
                  frontEnd={["React (TS)", "Redux", "MUI", "React-Spring"]}
                  backEnd={["Node", "Express", "REST API"]}
                  imageCN=' -translate-x-[5%]'
                />
              </div>
              <div className="col-span-12">
                <Project
                  title="Marine Rental"
                  summary="Full-stack platform created for individuals interested in renting a boat or renting out their own. Boat owners can easily create an account, providing all the necessary details about their vessel, including photos, features, and pricing. For individuals seeking to rent a boat, search engine provides a simple and efficient way to search and filter through a variety of available options in different locations."
                  dummyData={{
                    remark: (
                      <>
                        {" "}
                        Please feel more than welcome to create your account but
                        if you prefer, you may also use{" "}
                        <span className=" text-primary font-semibold dark:text-secondary">
                          dummy account
                        </span>{" "}
                        with the following login credentials:
                      </>
                    ),
                    login: "dummy@dummy.pl",
                    password: "123456!",
                  }}
                  link="https://marine-rental.onrender.com"
                  type="featured project"
                  githubLink={{
                    public: true,
                    frontEnd: "https://github.com/MaciejM-S/marine-rental-front-end",
                    backEnd: "https://github.com/MaciejM-S/marine-rental-api",
                  }}
                  imgDesktop={mrMockups}
                  frontEnd={["React (TS)", "Redux", "MUI"]}
                  backEnd={[
                    "Node",
                    "Express",
                    "MongoDB",
                    "REST API",
                    "GraphQL",
                    "JWT",
                    "Bcrypt",
                  ]}
                  imageCN=''
                />
              </div>
              <div className="col-span-12">
                <Project
                  title="yourExp"
                  summary="This FullStack networking web application enables users to create profiles, share and interact with content, connect with friends and family by adding posts, pictures, and commenting on them. Users have the ability to manage their profile details, search for other users using the search engine, and restrict the visibility of their posts to friends. Additionally, the application allows users to easily add and remove friends, enhancing the social networking experience."
                  link="https://your-exp.onrender.com/"
                  type="featured project"
                  githubLink={{
                    public: true,
                    frontEnd: "https://github.com/MaciejM-S/your-exp-front-end",
                    backEnd: "https://github.com/MaciejM-S/your-exp-back-end",
                  }}
                  imgDesktop={yeMockups}
                  frontEnd={["React", "MUI"]}
                  backEnd={[
                    "Node",
                    "Express",
                    "MongoDB",
                    "REST API",
                    "JWT",
                    "Bcrypt",
                    "SendGrid",
                  ]}
                  imageCN=''
                  dummyData={{
                    remark: (
                      <>
                        {" "}
                        Please feel more than welcome to create your account but
                        if you prefer, you may also use{" "}
                        <span className=" text-primary font-semibold dark:text-secondary">
                          dummy account
                        </span>{" "}
                        with the following login credentials:
                      </>
                    ),
                    login: "dummyuser@wp.pl",
                    password: "smith1234",
                    
                  }}
                />
              </div>
            </div>
          </Layout>
        </main>
      </PageTransition>
    </>
  );
}

export default Projects;
