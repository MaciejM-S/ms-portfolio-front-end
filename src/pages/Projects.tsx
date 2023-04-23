import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

import mrMockups from "../pub/mr-mockups.png";
import aMockups from "../pub/a-mockups.png";

import TechStack from "../components/TechStack";

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
    <article className="w-full  items-center justify-between border border-solid border-dark bg-light shadow-2xl py-10 relative rounded-3xl">
      <div className=" absolute top-0 left-0 -z-10 w-[101%] h-[102%]  rounded-[2rem] bg-dark" />
      <div className="flex overflow-hidden">
        <div className="w-2/3">
          <Link
            to={link}
            target="_blank"
            className=" cursor-pointer overflow-hidden rounded-lg "
          >
            <img src={imgDesktop} alt={title} className="w-full h-auto" />
          </Link>
          <TechStack frontEnd={frontEnd} backEnd={backEnd} />
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center pr-12 ">
          <Link to={link} className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-4xl font-bold mb-8 ">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark text-justify">{summary}</p>
          <div>
            <div className="my-8">
             { githubLink&&<Link to={githubLink}>
                <GitHubIcon />
              </Link>}
              <Link
                to={link}
                className="ml-2 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
              >
                Visit the Project
              </Link>
            </div>

            <div className="text-justify">{dummyData?.remark}</div>
            {dummyData?.login && (
              <div className="text-dark my-2">
                login:{" "}
                <span className=" font-semibold">{dummyData?.login}</span>
              </div>
            )}

            {dummyData?.password && (
              <div className="text-dark  my-2">
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
  return (
    <>
      <Helmet>
        <title>Projects</title>
        <meta name="description" content="recent projects" />
        <link rel="canonical" href="/projects" />
      </Helmet>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout>
          <div className="mb-24">
            <AnimatedText
              text="Imagination is only valuable when it's followed by action."
              centerClass={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
              className="!text-7xl"
            />
          </div>

          <div className="grid grid-cols-12 gap-24 ">
            <div className="col-span-12">
              <Project
                title="myExp"
                summary="FullStack networking web application. Allows users to create a profile, share and interact with content, connect with friends and family throught adding posts, pictures and commenting them."
                link="http://linkToMyExp"
                type="featured project"
                githubLink=""
                imgDesktop=""
                frontEnd={["JS"]}
                backEnd={["JS"]}
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
                      <span className=" text-primary font-semibold">
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
                githubLink=""
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
              {/* Whether you're planning a business trip or a vacation, FlightFinder makes it easy to find the most affordable and convenient flights available.  */}

              <Project
                title="Avion"
                summary="Avion is a flight finder web application that allows users to easily search for the best flights from thousands of locations. 
                The platform quickly searches through a numerous flight options in real-time, providing users with the most current and accurate flight information available.
                In the Basic search section, users can quickly search for flights by entering basic details such as their departure and arrival cities and travel dates. 
                In the Advanced search section, users can refine their search results by filtering based on types of passengers and dates ranges."
                dummyData={{
                  remark: (
                    <span className=" text-primary font-semibold">
                      Please note that, due to the commercial usage of this application, I will not provide its code in a public repository.
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
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Projects;
