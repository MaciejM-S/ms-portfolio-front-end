import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

import mrMockups from "../pub/mr-mockups.png";
import aMockups from "../pub/a-mockups.png";
import yeMockups from "../pub/ye-mockups.png";

import TechStack from "../components/TechStack";
import { useEffect } from "react";
import React from "react";
import PageTransition from "../components/PageTransition";

const Project = ({
  type,
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
}: {
  type?: string;
  title: string;
  summary: string;
  link: string;
  githubLink: string;
  imgDesktop: any;
  dummyLogin?: string;
  dummyPassword?: string;
  frontEnd: string[];
  backEnd: string[];
  dummyData?: { remark: any; login: string; password: string };
}) => {
  return (
    <article className="w-full items-center justify-between border border-solid border-dark bg-light shadow-2xl py-10 relative rounded-3xl dark:bg-dark dark:border-light xl:my-16">
      <div className="absolute top-0 left-0 -z-10 w-[101%] h-[102%]  rounded-[2rem] bg-dark dark:bg-light md:h-[101.25%] " />
      <div className="flex overflow-hidden xl:flex-col xl:items-center">
        <h2 className="hidden my-2 w-full text-left text-4xl font-bold mb-8  xl:block xl:text-center xs:text-3xl">
          {title}
        </h2>
        <div className="w-2/3 xl:w-full xs:w-[115%]">
          <Link
            to={link}
            target="_blank"
            className=" cursor-pointer overflow-hidden rounded-lg "
          >
            <img
              src={imgDesktop}
              alt={title}
              className="w-full h-auto dark:opacity-80 xl:-translate-x-[5%]"
            />
          </Link>
          <TechStack frontEnd={frontEnd} backEnd={backEnd} />
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center pr-12 xl:w-2/3 lg:w-3/4 xl:pr-0">
          <Link to={link} className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-4xl font-bold mb-8 xl:hidden">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark text-justify dark:text-light xs:text-sm">
            {summary}
          </p>
          <div>
            <div className="my-8 xs:flex xs:flex-wrap">
              {githubLink && (
                <Link to={githubLink}>
                  <GitHubIcon sx={{ width: 40 }} />
                </Link>
              )}
              <Link
                to={link}
                className="ml-2 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:text-dark dark:bg-light dark:border-light xs:px-4 xs:text-base xs:mt-4"
              >
                Visit the Project
              </Link>
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
      <PageTransition>
        <main className="w-full mb-16 flex flex-col items-center justify-center">
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
                  link="http://linkToMyExp"
                  type="featured project"
                  githubLink=""
                  imgDesktop={aMockups}
                  frontEnd={["react (TS)", "Redux", "MUI", "react-spring"]}
                  backEnd={["node", "express", "REST API"]}
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
                  link="http://linkToMyExp"
                  type="featured project"
                  githubLink="ggg"
                  imgDesktop={mrMockups}
                  frontEnd={["react (TS)", "Redux", "MUI"]}
                  backEnd={[
                    "node",
                    "express",
                    "mongoDB",
                    "REST API",
                    "graphQL",
                    "JWT",
                    "bcrypt",
                  ]}
                />
              </div>
              <div className="col-span-12">
                <Project
                  title="yourExp"
                  summary="FullStack networking web application. Allows users to create a profile, share and interact with content, connect with friends and family throught adding posts, pictures and commenting them."
                  link="https://your-exp.onrender.com/"
                  type="featured project"
                  githubLink="ggg"
                  imgDesktop={yeMockups}
                  frontEnd={["react", "MUI"]}
                  backEnd={[
                    "node",
                    "express",
                    "mongoDB",
                    "REST API",
                    "graphQL",
                    "JWT",
                    "bcrypt",
                    "SendGrid",
                  ]}
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
