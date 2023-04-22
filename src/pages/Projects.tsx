import { Helmet } from "react-helmet-async";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

import mrMockups from "../pub/mr-mockups.png";
import { Divider } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';

const liClassName =
  "bg-light text-dark border-2 w-[100px] font-semibold text-center border-dark border-solid m-1 py-1 rounded-lg h-8  text-sm";

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
}) => {
  return (
    <article className="w-full  items-center justify-between border border-solid border-dark bg-light shadow-2xl p-10">
      <div className="flex ">
        <Link
          to={link}
          target="_blank"
          className="w-2/3 cursor-pointer overflow-hidden rounded-lg -ml-[7%]"
        >
          <img src={imgDesktop} alt={title} className="w-full h-auto" />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-center pl-6 ">
          {/* <span className="text-primary font-medium text-xl" >{type}</span> */}
          <Link to={link} className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-left text-4xl font-bold">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark">{summary}</p>
          <div>
            <Link to={githubLink}>
              <GitHubIcon />
            </Link>
            <Link
              to={link}
              className="ml-2 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
            >
              Visit the Project
            </Link>
          </div>

          
          <div>
           
            <div className="capitalize font-semibold text-primary text-lg mt-12  mb-4"> <CodeIcon/>used technologise</div>
            <div>
              <div className="flex items-center  justify-start mb-4">
                <div className="w-[130px] ">front-end:</div>
                <ul className="flex flex-wrap w-full ">
                  {frontEnd.map((tech) => (
                    <li className={liClassName}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-star">
                <div className="w-[130px]">back-end:</div>
                <ul className="flex flex-wrap w-full ">
                  {backEnd.map((tech) => (
                    <li className={liClassName}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
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
                summary="Fullstack boat rental website."
                dummyLogin="dummy@dummy.pl"
                dummyPassword="123456!"
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

            <div className="col-span-6">Featured Project</div>
            <div className="col-span-6">Project-1</div>
            <div className="col-span-6">Project-2</div>
            <div className="col-span-6">Featured Project</div>
            <div className="col-span-6">Project-3</div>
            <div className="col-span-6">Project-4</div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Projects;
